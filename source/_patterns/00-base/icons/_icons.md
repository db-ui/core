---
title: Icon-Library Enterprise
---

## New iconset

The included iconset has been developed in cooperation with the Center of Excellence @ Personenverkehr and replaces the previous enterprise only icons. More information: <https://marketingportal.extranet.deutschebahn.com/marketingportal/Basiselemente/Icons/Funktionale-Icons-Architektur-und-Fahrzeuge>

## Usage

You could use the icons either within your SCSS code as described below, which is the recommended approach.
Alternatively you could also use the attribute based configuration.

And we're additionally providing the icons as the sources (SVG) files as well.

### Icon font

#### Different glyphs

All of the available glyphs variables are shown on this page right next to the icon, with the SCSS and attribute based variables/values shown next to them.

#### SCSS (recommended)

##### Icon for element

Use the following SCSS mixin for setting an icon:

```scss
// schema
@mixin icon(
  $glyph: "",
  $size: $icon-size,
  $style: $icon-style,
  $position: "before"
);

// example
span.with-an-icon {
  @include icon(glyph(account), 20, "outline");
}
```

As both `$icon-size` and `$icon-style` are available to get configured with default values, and `$position` is only a variant (explained in the next paragraph) only the first one is really mandatory.

###### Displaying the icon after text

If you'd like to include the icon after the text, set the last parameter to `after`.

###### Hiding the text next to an icon

In case of the need to display only the icon and hide the text next to it, use the following mixin:

```scss
@include is-icon-text-replace();
```

#### Attribute based configuration

##### Icon for element

Use the `data-icon` and `data-icon-variant` HTML attributes for setting an icon:

```html
<a href="#" data-icon="alarm" data-icon-variant="24-outline">Alarm</a>
```

The `data-icon-variant` is an optional attribute, that you don't need to declare in case that you'd like to use the default icon size and style, that are defined by the `$icon-size` and `$icon-style` SCSS variables (size: `24` and style: `outline` as defaults), that could obviously get overwritten by individual SCSS declarations; so you'll end up with a very simply definition when relying on the defaults:

```html
<a href="#" data-icon="alarm">Alarm</a>
```

Of course this icons definition does as well have an equivalent for icons after the content: `data-icon-variant-after`

###### Displaying the icon after text

If you'd like to include the icon after the content/text, use the HTML attribute `data-icon-after` instead of `data-icon`, example:

```html
<a
  href="#"
  data-icon-after="alarm"
  data-icon-variant-after="24-outline"
  class="elm-link"
  >Alarm</a
>
```

###### Hiding the text next to an icon

In case of the need to display only the icon and hide the text next to it, use the following class:

```html
.is-icon-text-replace
```

### SVG files

As mentioned above we're even also providing all of the icon sources (`svg` files) within this package in the folder `node_modules/@db-ui/core/dist/icons/`.

And we're enabling to change the colors for the [illustrative icons](https://db-ui.github.io/base/?p=viewall-icons-illustrative) ("pulse" and icon itself) as well as the [functional icons](https://db-ui.github.io/base/?p=viewall-icons-functional) (only the single-color icon), through the two following CSS variables / CSS custom properties, with their included default (second value):

```css
var(--db-icon-color, currentColor)
var(--db-icon-pulse-color, #EC0016)
```

## Accessibility

Regarding accessibility icons are providing cognitive complementary visual support for sighted people (e.g. people with reading difficulties), as well as quick recognition of specific functionality and UX patterns like e.g. the bin/waste paper basket symbol for a delete action.

On the other hand icons shouldn't get recognized and output by assistive technologies like screenreaders, as those glyphs or signs being used in case of an icon webfont don't necessarly provide a meaning - and on the other hand each icon being used on the page should always as well get included in conjunction with some textual description both as a fallback as well as providing some meaning even and especially if the icon itself doesn't provide a unique meaning on it's own (to all users idependently from their skill level/experience, culture, etc.).

Additionally this pattern has been tested and approved regarding accessibility.

## Inspirational external sources for this pattern

- <https://spectrum.adobe.com/page/icons/> & <https://spectrum.adobe.com/page/iconography/>
