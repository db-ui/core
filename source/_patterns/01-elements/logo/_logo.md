---
title: Deutsche Bahn Logo
---

Please find a lot of more information regarding our logo and how to use it within the Marketingportal: <https://marketingportal.extranet.deutschebahn.com/de/logo-3>

## Adapt logos colors (background and fill)

You could easily change the line-colors of the logo as well as the background color by defining different color values for both CSS variables:

- `--db-logo-color`
- `--db-logo-backgroundColor`

The fallback for an undefined `--db-logo-color` is our DB Red (`#f01414`), and `--db-logo-backgroundColor` would fall back to `transparent`, which is the general background defined by brand.

## Size

### SCSS (recommended)

Extend one of the size SCSS placeholders in case that you don't want the default (xl, 58px width, 40px height): `%logo-size-xs`, `%logo-size-s`, `%logo-size-m`, `%logo-size-l` or `%logo-size-xl`

### HTML attribute

You could set the different button sizes via the `data-size` attribute, the default is `xl` and in that case is optional.
