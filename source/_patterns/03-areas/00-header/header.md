---
title: Header
state: inprogress
---

## Breakpoint for the header

If you'd like to control the breakpoint that we've set for the `header` parts especially to transform from a regular navigation to a burger navigation, you could overwrite the `SCSS` variable `$db-narrower-screen-max-width` with a new value that should get used within the CSS code for that breakpoint, like e.g. `1280px`.

If you're using CSS only without SCSS, you could set the CSS Custom Property / CSS Variable via a `@media query` yourself:

```css
@media screen and (max-width: 1280px) {
  :root {
    --db-narrower-screen: true;
  }
}
```

Please keep in mind that the CSS Variable solution doesn't work in Mozilla Firefox at the time of writing, please have a look at <https://bugzilla.mozilla.org/show_bug.cgi?id=1795622> for upcoming support.

## Fixed positioned header

You could set the header area to fixed positioning by adding the class `has-fixed-header` to the `body` HTML tag.

[inspirational sources for this page]: # "https://twitter.com/click2carney/status/1170728170342907904?s=11"
