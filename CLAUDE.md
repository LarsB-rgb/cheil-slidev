# Cheil Slidev

A bun workspace monorepo for creating Slidev presentations with optional Cheil branding.

## Quick Start

```bash
# Install dependencies
bun install

# Create your first presentation
bun run new "My First Presentation"           # Generic (apple-basic theme)
bun run new "My First Presentation" --cheil   # With Cheil branding

# Start working on it
cd presentations/my-first-presentation && bun run dev
```

Open the URL shown in the terminal. The dev server hot-reloads as you edit `slides.md`.

## Project Structure

This is a bun workspace monorepo. Each presentation is a self-contained workspace package under `presentations/`.

```
cheil-slidev/
├── package.json              # Root workspace config + dependency catalog
├── scripts/
│   ├── create.mjs            # Creates new presentations from template
│   └── template/             # Template files used by create.mjs
├── themes/
│   └── cheil/                # @keynotes/slidev-addon-cheil
│       ├── fonts/            # Cheil Roman TTF (5 weights: 300-800)
│       ├── styles/           # @font-face + CSS variable overrides
│       ├── global-bottom.vue # Footer with Cheil logo (inlined SVG)
│       └── uno.config.ts     # UnoCSS font config
├── presentations/            # Your presentations live here
│   └── <name>/
│       ├── package.json      # Workspace package
│       ├── slides.md         # Slide content (Markdown + Vue)
│       ├── public/           # Static assets (images, etc.)
│       └── style.css         # Presentation-specific styles (non-Cheil only)
└── .claude/
    └── skills/
        └── pdf-to-pptx/      # Skill: convert any presentation to editable .pptx
```

**Naming convention:** Use lowercase, hyphen-separated folder names derived from the presentation title.

## Commands

### Creating presentations

```bash
bun run new "Title Here"           # apple-basic theme, custom styles
bun run new "Title Here" --cheil   # apple-basic + Cheil addon (font, logo, colors)
```

### Working on a presentation

Always `cd` into the presentation directory first:

```bash
cd presentations/<name>
bun run dev       # Start dev server with hot reload
bun run build     # Build static site
bun run export    # Export to PDF
```

## Working Directory

**When working on a specific keynote, change your working directory to that presentation's folder.** This keeps paths simple and ensures all commands run in the correct context.

Use the presentation folder as your base for all file operations, dev server commands, and asset references.

## Writing Slides

Slides are written in Markdown with YAML frontmatter. Slidev extends Markdown with layouts, Vue components, and UnoCSS utility classes.

### Basic structure of slides.md

```markdown
---
theme: apple-basic
title: My Presentation
layout: center
class: text-center
transition: slide-left
mdc: true
---

# First Slide Title

Content here. Use **bold**, *italic*, and UnoCSS classes.

---

# Second Slide

- Bullet points work naturally
- Add images: ![alt](/image-in-public-folder.png)

---
layout: center
class: text-center
---

# Thank You
```

### Key concepts

- `---` separates slides
- Per-slide YAML frontmatter goes between `---` markers before content
- `layout:` controls slide layout (center, two-cols, image-right, etc.)
- Put images in the `public/` folder and reference them with `/filename.png`
- Vue components and UnoCSS utility classes work inline
- See https://sli.dev for full documentation

## Cheil Branding Addon

Cheil-branded presentations use `@keynotes/slidev-addon-cheil` (lives in `themes/cheil/`). This is a Slidev addon, not a theme: it layers Cheil branding on top of the apple-basic theme.

**What the addon provides:**
- Cheil Roman font family (5 weights: 300-800) via @font-face
- CSS variable overrides for Slidev's font system
- UnoCSS font family config
- Global footer component with the Cheil logo (inlined SVG)

**Using it in a presentation:** The `--cheil` flag on `bun run new` handles this automatically. If you need to add it manually, two changes are needed:

```yaml
# slides.md frontmatter
addons:
  - '@keynotes/slidev-addon-cheil'
```
```json
// package.json dependencies
"@keynotes/slidev-addon-cheil": "workspace:*"
```

When using `--cheil`, `style.css` and `uno.config.ts` are removed because the addon handles styling.

**Presentations without Cheil branding** don't reference the addon at all. They use apple-basic directly with their own styles.

## Slidev Dev Server

Slidev reads stdin for keyboard shortcuts (r=restart, o=open, e=edit, q=quit). When stdin closes or reaches EOF, the server exits immediately.

**Symptoms:** Dev server prints startup info then quits instantly.

**Solution:** The workspace `dev` script pipes `yes ''` to keep stdin open. This is already handled in the template. For manual CLI usage:
```bash
yes '' 2>/dev/null | slidev slides.md --port $PORT
```

Each presentation has a dev script that starts Slidev on a deterministic port and writes it to `.claude/.dev-port` for Claude Code statusline visibility.

## PPTX Export (Claude Code Skill)

This project includes a Claude Code skill at `.claude/skills/pdf-to-pptx/` that converts presentations to editable PowerPoint files. Instead of a build script, this uses Claude Code's AI-driven approach: it reads the source (PDF, Slidev markdown, screenshots), then programmatically constructs slides using PptxGenJS.

To use it, ask Claude Code to export a presentation to PPTX, or invoke it with `/pdf-to-pptx`.

## MUST: Avoid AI Writing Patterns

This is the most important rule for all written output: notes, comments, slide text, documentation.

**Banned patterns:**
- No em-dashes: use colons or separate sentences instead
- No "delve", "leverage", "utilize", "streamline", "robust", "seamless"
- No excessive hedging ("It's worth noting...", "Interestingly...")
- No punchy one-liners ("And that's the point.", "Simple as that.")
- No sentence fragments for effect ("The result? Faster builds.")

**Instead:** Write plainly and directly.

## Visual Verification

**Always use browser tools to verify visual changes.** Don't assume CSS/styling changes work. Open the browser, inspect elements, and verify visually. Check:
- Layout isn't broken
- Colors render correctly
- Fonts are actually loading
- Elements are positioned as expected

## Running Dev Server in Claude Code

```
Use Bash tool with:
- command: "cd presentations/<name> && bun run dev"
- run_in_background: true
```

This creates a tracked background task. User can monitor it with `Ctrl+T` or `/tasks`.
