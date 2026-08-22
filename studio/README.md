# Valeria Velasco Photography — Studio

The content editor for wedding stories, built with [Sanity](https://www.sanity.io).
This is a separate app from the main site (own `package.json`, own React
version) — it's the admin tool, not something that ships to visitors.

> **Requires Node.js 22.12 or newer** to run any `sanity` CLI command
> (`login`, `init`, `dev`, `build`, `deploy`) — the Sanity CLI itself
> enforces this. This is independent from the main site, which still only
> needs Node 20 — only run `studio/` commands on a machine (or CI step)
> with Node 22+. Check with `node -v`; install a newer version via
> [nodejs.org](https://nodejs.org) or a version manager (nvm/fnm) if
> needed.

## One-time setup

1. **Create a free Sanity account and project.** You need to be logged in
   interactively for this step (it opens a browser), so run it yourself,
   not through an AI assistant:

   ```bash
   cd studio
   npx sanity login
   npx sanity init
   ```

   When `sanity init` asks:
   - "Create new project" → yes, name it anything (e.g. "Valeria Velasco Photography")
   - "Use the default dataset configuration?" → yes (`production`)
   - "Project output path" → just press enter, keep the current folder
   - "Select project template" → choose **Clean project with no predefined schema types** (this repo already has the schema)

   This prints a **Project ID** — copy it.

2. **Configure the Studio** — copy `.env.example` to `.env` and fill in the
   project ID from step 1:

   ```bash
   cp .env.example .env
   ```
   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```

3. **Configure the main app** — at the repo root (not inside `studio/`),
   copy `.env.example` to `.env` and set the same project ID:

   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

4. **Allow the site to read from Sanity (CORS)** — go to
   [sanity.io/manage](https://www.sanity.io/manage), open the project → API
   → CORS Origins → **Add CORS origin**, and add:
   - `http://localhost:5173` (for local development)
   - your production domain once it's deployed (e.g. `https://www.valeriavelasco.com`)

   No credentials needed on these — the site only ever *reads* published
   stories publicly; only someone logged into the Studio can write.

5. **Install and run the Studio locally:**

   ```bash
   npm install
   npm run dev
   ```

   Opens at `http://localhost:3333`.

## Publishing the Studio online

So the photographer can edit stories from any browser without running
anything locally:

```bash
npm run deploy
```

This hosts it for free at `https://<your-project-name>.sanity.studio` — log
in there with the same Sanity account.

## Schema

`schemaTypes/story.ts` defines the "Wedding Story" document type — see the
field descriptions in the Studio itself (each field has a help text). One
document per real wedding; its fields map directly onto the story detail
page's fixed layout (intro → hero photo → two detail photos → mid photo →
first note → three moment photos → second note → closing photo). Any photo
left empty shows a "photo coming soon" placeholder on the live site instead
of breaking the layout, so a story can be published with just text first.

Content isn't translated per-language on purpose — see the top-level
README's "Content strategy" note.
