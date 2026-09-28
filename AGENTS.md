<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio content layer
- All displayed portfolio content (personal details, skills, projects, experience, education, certifications, achievements, nav items) lives in `src/data/portfolio.ts`; components render from it so content updates never require layout changes.
- Page sections live in `src/components/sections/` and are composed only in `src/routes/index.tsx`, keeping the single-page order explicit in one place.
- The hero background visual is a 2D canvas (`src/components/TechCanvas.tsx`) rather than WebGL/three.js, to keep the page fast and avoid a WebGL fallback path.
