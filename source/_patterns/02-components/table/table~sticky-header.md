---
title: Table - sticky header
---

You could set the header cells to appear sticky on scrolling, which is especially useful on longer tables with a lot of rows, by setting the `data-sticky="header"` attribute on the table.

To control the top position which should be taken into account at which the table components header starts to get displayed sticky, you could set the CSS variable `--db-table-top-safe-space`. Elsewhere we take `--db-has-fixed-header-height` to accomplish possible sticky headers being defined for a page. If even also this one isn't set, the default `-1` value would get taken for the calculation.
