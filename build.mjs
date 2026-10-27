import { readdir, readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
import { join, parse, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const SLIDES_DIR = join(ROOT, "slides");
const SRC_DIR = join(ROOT, "src");
const ASSETS_DIR = join(ROOT, "assets");
const DIST_DIR = join(ROOT, "dist");

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

      slides.sort((a, b) => b.date.localeCompare(a.date));
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

  // assets estáticos
  await mkdir(join(resolvedDistDir, "assets"), { recursive: true });
  await copyFile(
    join(resolvedAssetsDir, "DepartureMono-Regular.woff2"),
    join(resolvedDistDir, "assets", "DepartureMono-Regular.woff2")
  );
  await copyFile(join(resolvedSrcDir, "style.css"), join(resolvedDistDir, "style.css"));
  await copyFile(join(resolvedSrcDir, "theme.js"), join(resolvedDistDir, "theme.js"));

  const allDisciplines = universities.flatMap((uni) =>
    uni.disciplines.map((disc) => ({ uni, disc }))
  );
  allDisciplines.sort((a, b) => b.disc.lastDate.localeCompare(a.disc.lastDate));

  const totalSlides = allDisciplines.reduce((n, { disc }) => n + disc.slides.length, 0);

  // página inicial — painel de disciplinas
  const rows = allDisciplines
    .map(
      ({ uni, disc }) => `      <li class="row">
        <a class="cell board-link" href="/${disc.path}/" aria-label="Abrir ${esc(disc.name)}">●</a>
        <span class="cell name">${esc(disc.name)}</span>
        <span class="cell uni">${esc(uni.name)}</span>
        <span class="cell sem">${disc.semester}</span>
        <span class="cell count">${disc.slides.length}</span>
        <span class="cell date">${formatDate(disc.lastDate)}</span>
      </li>`
    )
    .join("\n");

  const indexHtml = await render(join(resolvedSrcDir, "index.template.html"), {
    TITLE: "Materiais de Aula — Prof. Victor Brayner",
    ROWS: rows || '      <p class="comment">// nenhum slide publicado ainda</p>',
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
        (slide) => `      <li class="row">
        <span class="cell date">${formatDate(slide.date)}</span>
        <span class="cell name">${esc(slide.title)}</span>
        <span class="cell actions">
          <a href="/${slide.href}" target="_blank" rel="noopener">ver</a>
          <a href="/${slide.href}" download>baixar</a>
        </span>
      </li>`
      )
      .join("\n");

    const html = await render(join(resolvedSrcDir, "disciplina.template.html"), {
      TITLE: `${disc.name} — ${uni.name}`,
      DISCIPLINA: esc(disc.name),
      UNIVERSIDADE: esc(uni.name),
      ROWS: slideRows,
      META: `// ${disc.slides.length} slides · ${disc.semester}`,
      ROOT: "/",
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
