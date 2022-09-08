---
title: Accordion
state: inreview
---

## Variations/configurability

### Size

#### SCSS (recommended)

Extend one of the size placeholders in case that you don't want the default (regular): `%size-Small` or `%size-Large`

#### HTML attribute

You could set the different button sizes via the `data-size` attribute, the default is "regular" and in that case is optional.

### Emphasis

The regular sized accordion could even also get enhanced to a higher emphasis.

#### SCSS (recommended)

Extend the related placeholder: `%emphasis-High`

#### HTML attribute

You could set the high emphasis via the `data-emphasis` attribute.

## JavaScript polyfill necessary for Microsoft Internet Explorer and Edge (older versions than 79)

In case you would need to support Microsoft Internet Explorer and/or Edge within your project setup, you'll need to polyfill (with e.g. [details-element-polyfill](https://github.com/javan/details-element-polyfill), that is still included in our pages for demo purposes) the `details` and `summary` HTML tags due to [their missing browser setup in those environments](https://caniuse.com/#feat=details).

[inspirational sources for this page]: # "https://db.de/epghyr#4114286-4114286"
[inspirational sources for this page]: # "https://getbootstrap.com/docs/4.3/components/collapse/"
[inspirational sources for this page]: # "https://karriere.deutschebahn.com/karriere-de/pflichtfooter/datenschutzpersonal-2653678"
[inspirational sources for this page]: # "https://karriere.deutschebahn.com/karriere-de/jobs/Hilfe-und-Kontakt-2654994"
[inspirational sources for this page]: # "https://www.bahn.de/service/individuelle-reise/barrierefrei/programm_der_db"
[inspirational sources for this page]: # "https://www.viget.com/articles/testing-accordion-menu-designs-iconography/"
