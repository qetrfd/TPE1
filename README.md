# BMW Group Careers — Drive the Future

A premium one-page recruitment presentation built for a networking event class project. The experience uses a dark automotive visual system, BMW and M-inspired blue, red, white and black accents, responsive editorial layouts and multiple integrated vehicle visuals.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Deploy to GitHub Pages

This project includes a deployment workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` again, or run the workflow manually from the **Actions** tab.
5. When the workflow finishes, the site URL appears in the deployment summary.

The Vite config uses a relative asset base (`./`), so the build works from a GitHub Pages project subdirectory without changing the repository name in configuration.

## Project structure

```text
src/
├── components/
│   ├── BenefitCard.tsx
│   ├── CTA.tsx
│   ├── Hero.tsx
│   ├── InnovationCard.tsx
│   ├── MStripes.tsx
│   ├── Navbar.tsx
│   ├── Reveal.tsx
│   ├── SectionTitle.tsx
│   ├── TalentProfile.tsx
│   ├── TimelineItem.tsx
│   └── ValueCard.tsx
├── App.tsx
├── index.css
└── main.tsx
public/
└── assets/
    ├── bmw-heritage-sedan.png
    ├── bmw-i8-black.png
    ├── bmw-logo.png
    ├── bmw-m2-front.png
    ├── bmw-m4-grey.png
    ├── bmw-sedan-grey-side.png
    ├── bmw-sedan-white.png
    └── bmw-touring-green.png
```

## Notes

This is an independent academic concept and is not an official BMW Group website. BMW brand imagery is included only for the class presentation provided by the project owner.
