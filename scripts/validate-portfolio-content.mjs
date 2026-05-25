import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const locales = ["es", "en"];

const read = (path) => readFileSync(join(root, path), "utf8");

const extractStringArray = (source, name) => {
  const match = source.match(new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]`));
  if (!match) throw new Error(`No se encontro el arreglo ${name}`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
};

const extractObjectBlocks = (source) => {
  const start = source.indexOf("export default [");
  if (start === -1) throw new Error("No se encontro export default []");

  const blocks = [];
  let depth = 0;
  let blockStart = -1;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) blockStart = index;
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0 && blockStart !== -1) {
        blocks.push(source.slice(blockStart, index + 1));
        blockStart = -1;
      }
    }
  }

  return blocks;
};

const extractProp = (block, prop) => {
  const match = block.match(new RegExp(`${prop}:\\s*"([^"]+)"`));
  return match?.[1] ?? null;
};

const extractFilters = (block) => {
  const match = block.match(/filters:\s*\[([\s\S]*?)\]/);
  return match ? [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]) : [];
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const projectIds = extractStringArray(read("src/content/projects/index.ts"), "projectIds");
const filterIds = extractStringArray(read("src/features/projects/utils/projectFilters.ts"), "projectFilterIds");
const allowedFilters = new Set(filterIds.filter((filter) => filter !== "all"));
const sitemap = read("public/sitemap.xml");
const esMessages = JSON.parse(read("src/i18n/messages/namespaces/common/es.json"));
const enMessages = JSON.parse(read("src/i18n/messages/namespaces/common/en.json"));

assert(
  JSON.stringify(Object.keys(esMessages).sort()) === JSON.stringify(Object.keys(enMessages).sort()),
  "Las claves i18n comunes de es/en no estan sincronizadas.",
);

for (const projectId of projectIds) {
  assert(sitemap.includes(`/project/${projectId}`), `Sitemap sin ruta /project/${projectId}`);
}

for (const locale of locales) {
  const previewsSource = read(`src/content/projects/previews/${locale}.ts`);
  const previews = extractObjectBlocks(previewsSource).map((block) => ({
    slug: extractProp(block, "slug"),
    status: extractProp(block, "status"),
    filters: extractFilters(block),
    confidential: /confidential:\s*true/.test(block),
  }));

  assert(
    JSON.stringify(previews.map((preview) => preview.slug)) === JSON.stringify(projectIds),
    `Los previews ${locale} no coinciden con projectIds o perdieron el orden.`,
  );

  for (const preview of previews) {
    assert(preview.status, `Preview ${locale}/${preview.slug} sin estado visible.`);
    assert(preview.confidential, `Preview ${locale}/${preview.slug} debe marcar confidencialidad.`);
    for (const filter of preview.filters) {
      assert(allowedFilters.has(filter), `Filtro desconocido "${filter}" en ${locale}/${preview.slug}`);
    }
  }

  for (const projectId of projectIds) {
    const file = `src/content/projects/${locale}/${projectId}.ts`;
    assert(existsSync(join(root, file)), `Falta detalle ${file}`);

    const source = read(file);
    assert(/summary:\s*"/.test(source), `Detalle ${locale}/${projectId} sin summary.`);
    assert(/stack:\s*\[/.test(source), `Detalle ${locale}/${projectId} sin stack.`);
    assert(/results:\s*\[/.test(source), `Detalle ${locale}/${projectId} sin results.`);
    assert(/components:\s*\[/.test(source), `Detalle ${locale}/${projectId} sin componentes.`);
    assert(/confidential:\s*true/.test(source), `Detalle ${locale}/${projectId} debe marcar confidential.`);
    assert(/demo:\s*"private"/.test(source), `Detalle ${locale}/${projectId} debe tener demo privada.`);
    assert(/code:\s*"private"/.test(source), `Detalle ${locale}/${projectId} debe tener codigo privado.`);
    assert(!/\n\s*live:\s*"/.test(source), `Detalle confidencial ${locale}/${projectId} no debe exponer live.`);
    assert(!/\n\s*source:\s*"/.test(source), `Detalle confidencial ${locale}/${projectId} no debe exponer source.`);
  }
}

const portfolio = read("src/content/portfolio.ts");
const seo = read("src/content/seo.ts");
assert(portfolio.includes("Jun 2024 - May 2026"), "La experiencia Milan debe cerrar en May 2026.");
assert(portfolio.includes("Inglés A2") && portfolio.includes("English A2"), "El idioma visible debe usar A2 en es/en.");
assert(!portfolio.includes("B1"), "No debe quedar B1 si la hoja de vida usa A2.");
assert(seo.includes("ERP/e-commerce") && seo.includes("QA") && seo.includes("applied AI"), "SEO incompleto para el posicionamiento actual.");

console.log(`Validacion de contenido OK: ${projectIds.length} proyectos, ${filterIds.length} filtros, ${locales.length} idiomas.`);
