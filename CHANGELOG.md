<!-- markdownlint-configure-file { "MD024": false, "MD013": false } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
And the commit guidelines from [Conventional Commits](https://conventionalcommits.org) are being used.

Regarding BREAKING CHANGES in between, please have a look into [the migration guide](docs/migrationGuide.adoc).

And we're still hosting the `CHANGELOG` for any changes up until version 2.0.0 within our internal Git: <https://db.de/lwfv2o> (you need to be logged in to our Deutsche Bahn VPN for these informations)

## [Unreleased]

### Added

- Support for providing starterkits
- Dark-mode styling
- Ongoing: prefers-reduced-motion related modifications
- Annotations for the most relevant parts of the patterns
- Print styles

### Changed

- Ongoing updates regarding [DB Design System UX Guide + Standards](https://marketingportal.extranet.deutschebahn.com/de/ui-komponenten)
- Ongoing: Evaluating on accessibility and adding necessary declarations as well as semantics
- style(icons): further optimized the icon styling (regarding bold styling and size)

<!-- ## [2.0.0] - 2022-XX-XX

This part includes all of the changes from `@db-ui/db-ui-core@1.x` to `@db-ui/core@2.0.0` – this summarizes the changes out of the previous prereleases, and is especially only including the relevant aspects for consumers of our package (so we've left out the DB UI Core contributors relevant aspects).

All of the breaking changes and relevant changes are listed in [the migration guide](docs/migrationGuide.adoc).

### Added

- Checkbox: `indeterminate` state
- Select: Variants, adapted from the new input variants
- Tables: Possibility to define `densities`, the header to stay "sticky", borders around the cells, the content alignment within the cells, and control the font-size with a CSS variable (`--table---fontSize`).
- DB Screen Head webfont
- Cards: Added first variant type `banner`
- Possibility to differentiate on which fonts to reference locally
- Enabled full width display of content on load within the pattern lab UI
- Enabled all patterns to build as CSS partials via `sass`
- SCSS mixin wrappers for the SCSS placeholders `%a11y-visually-hidden` and `%clearfix`, mainly for being able to both provide CSS partials as well as the concenated files
- Possibility to provide an icons path as a CSS variable for selected SVG references
- Textarea and input: variants (`semitransparent`, `white`, `solid` and `outline`)
- Tags: Added the possibility to set `size` and `variant` via `data-`attributes

### Changed

In general we've introduced the possibility to control variants and configurations on elements and components with HTML `data`-attributes, that we're previously only available via SCSS `mixins` or `@extends`.

- **BREAKING CHANGE:** All remaining brand colors have been removed from DB UI Core and will be used from the consumed [DB UI Base product](https://github.com/db-ui/base). This mainly means a breaking change to you if you've imported the colors `SCSS` files directly in your codebase.
- **BREAKING CHANGE:** Removed the two older colors SCSS variables `$red-500` and `$DBred`
- **BREAKING CHANGE**: Removed odd / "in-between" colors, as those have been removed from the guidelines (and that for from DB UI Base as well)
  - `$color-secondary-red-380`
  - `$color-secondary-cool-gray-133`
  - `$color-secondary-cool-gray-166`
  - `$color-secondary-cool-gray-250`
  - `$color-secondary-cool-gray-350`
  - `$color-secondary-cool-gray-450`
  - `$color-secondary-cool-gray-550`
- **BREAKING CHANGE:** `to-rem` and `to-em` helper SCSS functions parameter expect values by type number
- **BREAKING CHANGE:** Some sizes and variants of the button element have changed or been removed
- **BREAKING CHANGE:** The two alternative colors of the radio element have been removed
- **BREAKING CHANGE:** The seven alternative colors of the checkbox element have been removed
- **BREAKING CHANGE:** The two alternative colors of the toggle element have been removed
- **BREAKING CHANGE:** The thiner height of the progress element has been removed this element has now two variants
- **BREAKING CHANGE:** Some variants values of the notification element have changed or been removed and changed from class to `data`-attributes
- **BREAKING CHANGE:** The two classes on button elements within the dialog component should be migrated to the new `data-variant` attribute for buttons
- **BREAKING CHANGE:** The cards components HTML code has changed
- **BREAKING CHANGE:** We've switched from the deprecated [`node-sass`](https://www.npmjs.com/package/node-sass) dependency to [`sass`](https://www.npmjs.com/package/sass), which is officially its successor. We suggest that if you're still using `node-sass` in your projects to even also do the move, which should be in general quite easy, compare to e.g. the instructions by the stackblitz team: <https://developer.stackblitz.com/docs/platform/turbo/#how-do-i-migrate-to-dart-sass>
  Please keep in mind, that you would need to provide your `node_modules` folder as a load path or include path (e.g. ` --load-path=node_modules` on the `sass` CLI usage), see [the migration guide](docs/migrationGuide.adoc)
  Your builds should most likely still work with `node-sass` (at least if you're resolving the load path of `node_modules` by yourself, e.g. with `--include-path=node_modules` when using the CLI), but the support might break the sooner the later.
- **BREAKING CHANGE:** The colors CSS variables will get provided by [`DB UI Base`](https://github.com/db-ui/base) directly, so there's nothing we could deliver by our product for this. If you were referencing those files previously, please consume them from `DB UI Base` from now on.
- **BREAKING CHANGE:** Removed the already deprecated enterprise specific as well as the seperate transporation icon set. These have been integrated into the general DBUX iconset.
- **BREAKING CHANGE**: All Design Tokens are now being rendered with a `db-` prefix. (see [the migration guide](docs/migrationGuide.adoc))
- **BREAKING CHANGE**: All `primary`, `secondary`, `feedback`, `poi` and `transportation` colors got this category (`primary`, `secondary` and `transportation`) removed from their name, so e.g. `$color-secondary-red-500` became `$db-color-red-500`. (see [the migration guide](docs/migrationGuide.adoc))
- **BREAKING CHANGE** (Fonts): `--font-family-sans-serif` CSS variable has been moved to DB UI Base and is now called `--db-font-family-base`
- **BREAKING CHANGE** (Icons, see [the migration guide](docs/migrationGuide.adoc)):
  - Moved all icon assets from `dist/images/icons` to `dist/icons` and even a better subfolder structure in there, and as well retrieving those by [DB UI Base](https://db-ui.github.io/base/?p=viewall-icons-all) package, path `node_modules/@db-ui/base/build/assets/icons/`.
  - And in case you're referencing those directly as SVG files, you need to change the select from the icon specific name to the id `#icon`.
  - As well as change the CSS variable names to control the line and pulse color within the icons from `--iconColor` to `--db-icon-color` and from `--iconPulseColor` to `--db-icon-pulse-color`.
- **BREAKING CHANGE:** `source/_patterns/01-elements/link/link.scss` has been renamed to `source/_patterns/01-elements/link/_links.scss` - you most likely haven't included this file directly, but the file within the `enterprise` subdirectory, so this shouldn't be relevant for most of you
- **BREAKING CHANGE:** The stateful `tag` types (`a.elm-tag` and `input.elm-tag`) have been moved to a new pattern, as defined within the DB Design System UX Guides + Standards specification: `chips` (see [the migration guide](docs/migrationGuide.adoc))
- Introduced SCSS variable `$icons-path` in addition to `$images-path` and `$fonts-path`, as we might need to differentiate here
- `DB UI Base` to be an optional config, as it wouldn't get installed and people might want to use the SASS source files for compilation
- A lot of elements and components got their new styling: buttons, checkbox, headlines, input, links, progress, radio, select, textarea, toggle switch, breadcrumb, cards, dialog, dropdown, links, notification, overflow menu, pagination, table
- **BREAKING CHANGE** Expander: This component got renamed to "Accordion" and could include one or more content elements
- The DB Webfonts files have been updated -->
