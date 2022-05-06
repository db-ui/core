---
title: Table - alignment
---

You could set the positioning of the cells content on several different levels and on both axis, by setting the either using SCSS placeholders or setting `data-align` and `data-vertical-align` HTML attributes on the surrounding `thead` or `tbody`, each grouping `tr` element or the individual cells `th` and `td` elements to either one of these values:

## Horizontal alignment

### SCSS (recommended)

Extend one of the variant placeholders: `%align-left`, `%align-center` or `%align-right`

### HTML attribute

You could set the different button variants via the `data-align` attribute:

- `data-align="left"` (default)
- `data-align="center"`
- `data-align="right"`

## Vertical alignment

### SCSS (recommended)

Extend one of the variant placeholders: `%vertical-align-top`, `%vertical-align-middle` or `%vertical-align-bottom`

### HTML attribute

You could set the different button variants via the `data-vertical-align` attribute:

- `data-vertical-align="top"` (default)
- `data-vertical-align="middle"`
- `data-vertical-align="bottom"`
