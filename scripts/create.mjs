#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const slidesDir = join(rootDir, 'presentations');
const templateDir = join(__dirname, 'template');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function main() {
  const args = process.argv.slice(2);
  const useCheil = args.includes('--cheil');
  const titleWords = args.filter(a => a !== '--cheil');
  const title = titleWords.join(' ').trim();

  if (!title) {
    console.error('Usage: bun run new "Presentation Title" [--cheil]');
    process.exit(1);
  }

  const slug = slugify(title);
  const presentationDir = join(slidesDir, slug);

  if (existsSync(presentationDir)) {
    console.error(`Presentation "${slug}" already exists at presentations/${slug}/`);
    process.exit(1);
  }

  // Create directories
  mkdirSync(presentationDir, { recursive: true });
  mkdirSync(join(presentationDir, 'public'), { recursive: true });

  // Copy and fill template files
  const templateFiles = ['slides.md', 'style.css', 'uno.config.ts', 'package.json'];
  for (const file of templateFiles) {
    const src = join(templateDir, file);
    if (!existsSync(src)) continue;

    let content = readFileSync(src, 'utf-8');
    content = content.replace(/\{\{TITLE\}\}/g, title);
    content = content.replace(/\{\{NAME\}\}/g, slug);
    writeFileSync(join(presentationDir, file), content);
  }

  // If --cheil, add addon dependency and frontmatter
  if (useCheil) {
    // Patch package.json to add addon dependency
    const pkgPath = join(presentationDir, 'package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    pkg.dependencies['@keynotes/slidev-addon-cheil'] = 'workspace:*';
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

    // Patch slides.md frontmatter to add addons
    const slidesPath = join(presentationDir, 'slides.md');
    let slides = readFileSync(slidesPath, 'utf-8');
    slides = slides.replace(
      'theme: apple-basic\n',
      "theme: apple-basic\naddons:\n  - '@keynotes/slidev-addon-cheil'\n"
    );
    writeFileSync(slidesPath, slides);

    // Remove style.css and uno.config.ts (addon provides them)
    const stylePath = join(presentationDir, 'style.css');
    const unoPath = join(presentationDir, 'uno.config.ts');
    if (existsSync(stylePath)) unlinkSync(stylePath);
    if (existsSync(unoPath)) unlinkSync(unoPath);
  }

  // Register the new workspace
  console.log(`Created presentations/${slug}/${useCheil ? ' (with Cheil branding)' : ''}`);
  console.log('Running bun install to register workspace...');
  execSync('bun install', { cwd: rootDir, stdio: 'inherit' });

  console.log(`\nDone. Next steps:`);
  console.log(`  cd presentations/${slug} && bun run dev`);
}

main();
