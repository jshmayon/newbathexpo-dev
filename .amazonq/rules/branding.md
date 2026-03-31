# NewBath Expo — Branding & Code Rules

## Brand Identity
- Company name: **New Bath Expo**
- Tagline: *We Make Bathroom Remodeling Easy and Affordable*
- Location: Carmel-by-the-Sea, CA 93921, USA
- Phone: +1 (831) 293 - 4883
- Email: info@newbathexpo.com
- Social: Facebook, Instagram

---

## Tech Stack
- Angular 21 (standalone components, SSR enabled)
- SCSS for styling
- Vitest for unit tests

---

## Design Tokens (defined in `src/styles.scss` `:root`)

### Accent
```scss
--accent:       rgb(11, 19, 140);   // primary brand color
--accent-light: rgb(37, 48, 184);
--accent-dark:  rgb(7, 13, 98);
--accent-muted: rgba(11, 19, 140, 0.12);
```

### Neutrals
```scss
--color-bg:      #f8fafc;
--color-surface: #ffffff;
--color-border:  #e2e8f0;
--color-text:    #0f172a;
--color-muted:   #64748b;
--color-subtle:  #94a3b8;
--color-dark:    #0f172a;
```

### Font Sizes
```scss
--text-sm:   0.8rem;
--text-base: 1rem;      // default body size
--text-md:   1.25rem;
--text-lg:   1.75rem;
--text-xl:   clamp(2rem, 5vw, 3.5rem);
```

### Layout
```scss
--max-width: 1390px;    // always use for content wrappers
```

---

## Typography
- **Headings** (`h1`–`h6`): `Noto Serif`, serif
- **Body / UI**: `Nunito Sans`, sans-serif
- Google Fonts imported via `<link>` in `index.html`

---

## Project Structure
```
src/app/
  shared/
    header/       # app-wide fixed navbar with scroll effect
    footer/       # app-wide footer with contact + social icons
    services/     # services section component
  pages/
    home/         # route: /
    bookings/     # route: /bookings
```

## Layout Shell (`app.html`)
```html
<app-header />
<router-outlet />
<app-services />
<app-footer />
```

---

## Coding Rules
- Always use design tokens (`var(--accent)`, `var(--text-base)`, etc.) — never hardcode colors or font sizes
- Content wrappers always use `max-width: var(--max-width); margin: 0 auto;`
- Use `Noto Serif` for headings, `Nunito Sans` for everything else
- SSR is enabled — always guard browser-only APIs with `isPlatformBrowser()`
- Components are standalone — always declare imports inside `@Component({ imports: [] })`
- Keep styles scoped to each component's `.scss` file
- Minimal code — no unnecessary comments, no unused imports
