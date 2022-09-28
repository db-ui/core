---
title: Illustrative Icons
---

#### Usage

You could reference the multicolor icons directly via the `<use>` HTML tag within the `<svg>` HTML tag, compare to the source code provided with this pattern, like e.g.:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  aria-hidden="true"
>
  <use href="/icons/illustrative/action/db_ic_il_alarm_clock.svg#icon"></use>
</svg>
```

#### Adapt icons colors

You could easily change the line-colors of both the pulse and the icon itself by defining different color values for both CSS variables:

- `--db-icon-color`
- `--db-icon-pulse-color`

The fallback for a non-defined `--db-icon-color` is the `font-color` defined around or for the `<svg>` itself, and `--db-icon-pulse-color` would fall back to `#EC0016`, which is the general pulse color defined by brand.

#### Accessibility

We're adding the attribute `aria-hidden="true"` to the `<svg>` HTML tag so that the icon is hidden from assistive tools like not being read out by screen readers.
