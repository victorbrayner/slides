import { readdir, readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
import { join, parse, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const SLIDES_DIR = join(ROOT, "slides");
const SRC_DIR = join(ROOT, "src");
const ASSETS_DIR = join(ROOT, "assets");
const DIST_DIR = join(ROOT, "dist");

const SITE_URL = "https://slides.brayner.dev";

const FILENAME_RE = /^(\d{4}-\d{2}-\d{2})--(.+)\.pdf$/;

export function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function titleize(slug) {
  return slug
    .split("-")
    .map((word, i) => (i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

export function semesterOf(dateStr) {
  const month = Number(dateStr.slice(5, 7));
  const year = dateStr.slice(0, 4);
  return month <= 7 ? `${year}.1` : `${year}.2`;
}

export function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y.slice(2)}`;
}

export function esc(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// codifica cada segmento do caminho para uso em href (espaços, aspas, acentos…)
export function encodePath(path) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

async function render(templatePath, vars) {
  let html = await readFile(templatePath, "utf8");
  for (const [key, value] of Object.entries(vars)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  return html;
}

export async function scan({ slidesDir } = {}) {
  const universities = [];

  let uniEntries;
  try {
    uniEntries = await readdir(slidesDir ?? SLIDES_DIR, { withFileTypes: true });
  } catch {
    return universities;
  }

  for (const uniEntry of uniEntries) {
    if (!uniEntry.isDirectory()) continue;
    const uniName = uniEntry.name;
    const uniSlug = slugify(uniName);
    const uniPath = join(slidesDir ?? SLIDES_DIR, uniName);
    const disciplines = [];

    const discEntries = await readdir(uniPath, { withFileTypes: true });
    for (const discEntry of discEntries) {
      if (!discEntry.isDirectory()) continue;
      const discName = discEntry.name;
      const discSlug = slugify(discName);
      const discPath = join(uniPath, discName);

      let overrides = {};
      try {
        overrides = JSON.parse(await readFile(join(discPath, "_titulos.json"), "utf8"));
      } catch {
        // sem overrides, tudo bem
      }

      const files = await readdir(discPath);
      const slides = [];
      for (const file of files) {
        const match = FILENAME_RE.exec(file);
        if (!match) {
          if (file.endsWith(".pdf")) {
            console.warn(`⚠ nome fora do padrão, ignorado: ${uniName}/${discName}/${file}`);
          }
          continue;
        }
        const [, date, titleSlug] = match;
        slides.push({
          date,
          title: overrides[file] ?? titleize(titleSlug),
          file,
          href: `${uniSlug}/${discSlug}/${file}`,
        });
      }

      // ordem determinística: data decrescente, desempate pelo nome do arquivo
      slides.sort((a, b) => b.date.localeCompare(a.date) || a.file.localeCompare(b.file));
      if (slides.length === 0) continue;

      disciplines.push({
        name: discName,
        slug: discSlug,
        path: `${uniSlug}/${discSlug}`,
        slides,
        lastDate: slides[0].date,
        semester: semesterOf(slides[0].date),
      });
    }

    if (disciplines.length > 0) {
      universities.push({ name: uniName, slug: uniSlug, disciplines });
    }
  }

  return universities;
}

export async function build({
  slidesDir,
  srcDir,
  assetsDir,
  distDir,
  silent = false,
} = {}) {
  const resolvedSlidesDir = slidesDir ?? SLIDES_DIR;
  const resolvedSrcDir = srcDir ?? SRC_DIR;
  const resolvedAssetsDir = assetsDir ?? ASSETS_DIR;
  const resolvedDistDir = distDir ?? DIST_DIR;

  await rm(resolvedDistDir, { recursive: true, force: true });
  await mkdir(resolvedDistDir, { recursive: true });

  const universities = await scan({ slidesDir: resolvedSlidesDir });

  // assets estáticos (fonte, favicon, etc.) + arquivos fixos
  await mkdir(join(resolvedDistDir, "assets"), { recursive: true });
  for (const asset of await readdir(resolvedAssetsDir)) {
    await copyFile(join(resolvedAssetsDir, asset), join(resolvedDistDir, "assets", asset));
  }
  await copyFile(join(resolvedSrcDir, "style.css"), join(resolvedDistDir, "style.css"));
  await copyFile(join(resolvedSrcDir, "theme.js"), join(resolvedDistDir, "theme.js"));
  await copyFile(join(resolvedSrcDir, "404.html"), join(resolvedDistDir, "404.html"));

  const allDisciplines = universities.flatMap((uni) =>
    uni.disciplines.map((disc) => ({ uni, disc }))
  );
  allDisciplines.sort(
    (a, b) =>
      b.disc.lastDate.localeCompare(a.disc.lastDate) || a.disc.name.localeCompare(b.disc.name)
  );

  const totalSlides = allDisciplines.reduce((n, { disc }) => n + disc.slides.length, 0);

  // página inicial — painel de disciplinas
  const rows = allDisciplines
    .map(
      ({ uni, disc }) => `        <tr>
          <th scope="row" class="name"><a href="${encodePath(disc.path)}/" title="${esc(disc.name)}">${esc(disc.name)}</a></th>
          <td class="uni" data-label="Universidade">${esc(uni.name)}</td>
          <td class="sem" data-label="Semestre">${disc.semester}</td>
          <td class="count" data-label="Slides">${disc.slides.length}</td>
          <td class="date" data-label="Último"><time datetime="${disc.lastDate}">${formatDate(disc.lastDate)}</time></td>
        </tr>`
    )
    .join("\n");

  const indexHtml = await render(join(resolvedSrcDir, "index.template.html"), {
    TITLE: "Materiais de Aula — Prof. Victor Brayner",
    DESC: "Slides e materiais de aula do Prof. Victor Brayner — disciplinas, aulas e downloads em PDF.",
    URL: `${SITE_URL}/`,
    ROWS: rows,
    EMPTY: rows ? "" : '    <p class="comment">// nenhum slide publicado ainda</p>',
    META: `// ${allDisciplines.length} disciplinas · ${totalSlides} slides`,
    ROOT: "",
  });
  await writeFile(join(resolvedDistDir, "index.html"), indexHtml);

  // páginas de disciplina
  for (const { uni, disc } of allDisciplines) {
    const outDir = join(resolvedDistDir, disc.path);
    await mkdir(outDir, { recursive: true });

    const slideRows = disc.slides
      .map(
        (slide) => `        <tr>
          <td class="date" data-label="Data"><time datetime="${slide.date}">${formatDate(slide.date)}</time></td>
          <th scope="row" class="name"><a href="./${encodePath(slide.file)}" target="_blank" rel="noopener" title="${esc(slide.title)}">${esc(slide.title)}</a></th>
          <td class="actions">
            <a class="view" href="./${encodePath(slide.file)}" target="_blank" rel="noopener">ver</a>
            <a class="download" href="./${encodePath(slide.file)}" download>baixar</a>
          </td>
        </tr>`
      )
      .join("\n");

    const html = await render(join(resolvedSrcDir, "disciplina.template.html"), {
      TITLE: esc(`${disc.name} — ${uni.name}`),
      DESC: esc(`Slides de ${disc.name} (${uni.name}) — materiais de aula em PDF para download.`),
      URL: `${SITE_URL}/${disc.path}/`,
      DISCIPLINA: esc(disc.name),
      UNIVERSIDADE: esc(uni.name),
      ROWS: slideRows,
      META: `// ${disc.slides.length} slides · ${disc.semester}`,
      ROOT: "../../",
    });
    await writeFile(join(outDir, "index.html"), html);

    // copia os PDFs
    for (const slide of disc.slides) {
      await copyFile(
        join(resolvedSlidesDir, uni.name, disc.name, slide.file),
        join(resolvedDistDir, slide.href)
      );
    }
  }

  // robots.txt e sitemap.xml
  await writeFile(
    join(resolvedDistDir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );

  const sitemapEntries = [
    { loc: `${SITE_URL}/`, lastmod: allDisciplines[0]?.disc.lastDate },
    ...allDisciplines.map(({ disc }) => ({
      loc: `${SITE_URL}/${disc.path}/`,
      lastmod: disc.lastDate,
    })),
  ];
  await writeFile(
    join(resolvedDistDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries
      .map(
        ({ loc, lastmod }) =>
          `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`
      )
      .join("\n")}\n</urlset>\n`
  );

  if (!silent) {
    console.log(
      `✓ ${allDisciplines.length} disciplinas, ${totalSlides} slides → dist/`
    );
  }

  return { universities, allDisciplines, totalSlides };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) {
  build();
}
