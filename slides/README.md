# slides/

Solte os PDFs aqui para publicá-los no site.

## Estrutura

```
slides/<Universidade>/<Disciplina>/AAAA-MM-DD--titulo-do-slide.pdf
```

- **Pasta nova = aparece no site sozinha.** Para criar uma disciplina nova,
  basta criar a pasta e soltar o primeiro PDF.
- O nome da pasta é exibido como está: use acentos e espaços normalmente
  (`Universidade X/Cálculo I`).

## Nome do arquivo

```
2026-03-15--aula-03-derivadas.pdf
^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^
data    separador  título
```

- Data no início, formato `AAAA-MM-DD`, separada do título por `--` (dois hífens).
- Título em minúsculas, **sem acentos**, espaços viram `-`.
- Arquivos fora desse padrão são ignorados (o build avisa no log).
- O semestre é derivado da data: jan–jul → `.1`, ago–dez → `.2`.

## Títulos com acentos/maiúsculas (opcional)

Se o título automático ficar feio, crie `_titulos.json` na pasta da disciplina:

```json
{
  "2026-03-15--aula-03-derivadas.pdf": "Aula 03 — Derivadas: definição e regras"
}
```

## Publicar

```
git add slides/
git commit -m "adiciona slides de <disciplina>"
git push
```

O Netlify rebuilda e publica automaticamente.
