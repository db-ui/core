---
title: Table
state: inreview
---

## Hiding columns and rows as responsive behaviour

To hide columns and/or rows depending on the viewport size, you could use a SCSS mixin that we provide or even also easily set up some CSS on your own to do so.
We've decided against providing classes that would need to get set onto the HTML elements, as you would have to do this for each and very `td` / `th` element repeatedly, and it would heavily complicate the configuration as well as harm the elementary concepts of dividing style from content.

### Hiding columns

Using the following SCSS mixin, you could hide a specific column (first parameter), depending on a maximum viewport-width (second parameter), e.g. the following would hide the second column in the `thead` and `tbody` section on a viewport up to `1023px` width:

```SCSS
@include cmp-table-hide-col(2, 1023px);
```

In case that you wouldn't want to / can't use SCSS, than you could as well easily develop this on your own in pure CSS:

```CSS
@media screen and (max-width: 1023px) {
	thead th:nth-child(2),
	tbody td:nth-child(2) {
		display: none;
	}
}
```

### Hiding rows

Using the following SCSS mixin, you could hide a specific row (first parameter), depending on a maximum viewport-width (second parameter), e.g. the following would hide the second row in the `tbody` section on a viewport up to `1023px` width:

```SCSS
@include cmp-table-hide-row(2, 1023px);
```

In case that you wouldn't want to / can't use SCSS, than you could as well easily develop this on your own in pure CSS:

```CSS
@media screen and (max-width: 1023px) {
	tbody tr:nth-child(2) {
		display: none;
	}
}
```

[inspirational sources for this page]: # "https://adrianroselli.com/2019/09/table-with-expando-rows.html"
[inspirational sources for this page]: # "https://pencilandpaper.io/articles/user-experience/ux-pattern-analysis-enterprise-data-tables/"
