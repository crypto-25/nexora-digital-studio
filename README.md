# NEXORA DIGITAL STUDIO

A first-version responsive website for the fictional NEXORA Digital Studio concept.

## Tech stack
- Next.js 15
- React 19
- TypeScript
- CSS design tokens and component styles
- Lucide React icons

## Quick start

1. Install Node.js (LTS).
2. Extract this folder.
3. Open the folder in VS Code.
4. Open the integrated terminal and run:

```bash
npm install
npm run dev
```

5. Visit http://localhost:3000

To create a production build:

```bash
npm run build
npm run start
```

## Easy editing guide

### 1. Change most website text and content
Open:

`src/content/site.ts`

This is the main content file. Edit:
- Brand name and tagline
- Navigation labels
- Hero heading and description
- Services and their tags
- Portfolio concept cards
- About principles
- Process steps
- FAQ questions and answers
- Contact email and CTA labels

The page components read from this file, so you usually do not need to edit JSX to change text.

### 2. Change colors, fonts, and visual styling
Open:

`src/app/globals.css`

At the top, edit the CSS variables under `:root`:
- `--bg`
- `--surface`
- `--text`
- `--muted`
- `--accent`
- `--max`

The rest of the file contains section and responsive styles.

### 3. Change a section's layout or behavior
Open the matching component in:

`src/components/`

Examples:
- `hero.tsx` — hero layout and artwork
- `site-header.tsx` — navigation and mobile menu
- `services.tsx` — service cards
- `work.tsx` — portfolio concept visuals
- `faq.tsx` — interactive accordion
- `contact.tsx` — contact CTA

## Important content notes
- Portfolio items are explicitly labeled as fictional concept projects.
- `hello@nexora.studio` is a placeholder contact address. Replace it with an email address you control before publishing.
- The EN/ID switch is a visual placeholder in this first version; Indonesian localization is not wired yet.
- Contact currently uses a `mailto:` link. There is no backend contact form or message storage.
- No analytics, CMS, database, or deployment integration is configured.

## Project structure

```text
nexora-digital-studio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── faq.tsx
│   │   ├── hero.tsx
│   │   ├── intro.tsx
│   │   ├── process.tsx
│   │   ├── services.tsx
│   │   ├── site-footer.tsx
│   │   ├── site-header.tsx
│   │   └── work.tsx
│   └── content/
│       └── site.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```
