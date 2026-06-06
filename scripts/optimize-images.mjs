import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve("src/data");
const outputRoot = path.join(sourceRoot, "optimized");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxEdge = 1920;
const quality = 78;

async function walk(directory) {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (
      entry.isDirectory() &&
      path.resolve(absolutePath) === outputRoot
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (supportedExtensions.has(extension)) {
      files.push(absolutePath);
    }
  }

  return files;
}

async function isFresh(inputPath, outputPath) {
  try {
    const [inputStats, outputStats] = await Promise.all([
      stat(inputPath),
      stat(outputPath),
    ]);
    return outputStats.mtimeMs >= inputStats.mtimeMs;
  } catch {
    return false;
  }
}

async function optimize(inputPath) {
  const relativePath = path.relative(sourceRoot, inputPath);
  const parsed = path.parse(relativePath);
  const outputPath = path.join(
    outputRoot,
    parsed.dir,
    `${parsed.name}.webp`,
  );

  if (await isFresh(inputPath, outputPath)) {
    return { inputPath, outputPath, skipped: true };
  }

  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({
      width: maxEdge,
      height: maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: 5,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return { inputPath, outputPath, skipped: false };
}

const files = await walk(sourceRoot);
const results = await Promise.all(files.map(optimize));
const optimized = results.filter((result) => !result.skipped);

console.log(
  `Optimized ${optimized.length} image${
    optimized.length === 1 ? "" : "s"
  }; ${results.length - optimized.length} already up to date.`,
);
