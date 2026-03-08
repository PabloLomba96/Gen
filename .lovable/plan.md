

# Plan: Add Dynamic SEO Component to All Remaining Pages

## Pages to Update

Each page gets `<SEO>` with localized `title`, `description`, `lang`, and `canonical`. The old `useEffect` for `document.title` is removed where present.

### 1. SobreMi.tsx
- Import `SEO` and add with title/description from translations or hardcoded ES/EN strings
- Add `lang` and `canonical` based on current language

### 2. Contacto.tsx
- Import `SEO`, add above `JsonLd`
- Localized title: "Contacto" / "Contact"

### 3. BlogPage.tsx
- Import `SEO`, add with blog listing meta
- Localized title: "Blog — Psicología Infantil y Adultos" / "Blog — Child & Adult Psychology"

### 4. BlogArticle.tsx
- Import `SEO`, use article's `metaTitle` and `metaDescription` dynamically per article
- Canonical uses the article slug

### 5. Tienda.tsx
- Import `SEO`, add shop-specific meta

### 6. AvisoLegal.tsx
- Import `SEO`, remove `useEffect` for `document.title`

### 7. Privacidad.tsx
- Import `SEO`, remove `useEffect` for `document.title`

### 8. Cookies.tsx
- Import `SEO`, remove `useEffect` for `document.title`

### 9. ServicioDetalle.tsx
- Import `SEO`, use service's title/description dynamically

### 10. Hola.tsx & Recursos.tsx
- Add basic SEO tags

## Implementation Details

- All pages use `useLanguage()` to get `lang` for the `lang` prop
- Canonical URLs follow pattern: `https://genpsicologia.com{path}` for ES, `https://genpsicologia.com/en{path}` for EN
- Legal pages keep Spanish descriptions (regulatory) but set correct `lang`
- Blog article page uses each article's `metaTitle`/`metaDescription` for per-page SEO

