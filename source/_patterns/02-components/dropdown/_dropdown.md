---
title: Dropdown (within the header area)
---

This component is mainly meant to get used within the header section. If you're looking for a similar one within the content section, please refer to the `overflow menu` component.

## Variation to display the overflow menu on the opposite side

This component expected to be placed at the end of the header regularly and thatfor opens the overlay to its opposite side (to the right on left-to-right reading direction). If you'd like to change this behaviour e.g. to implement some kind of a collision mechanism (most likely with JavaScript) and flip the overlays orientation to the opposite side, you could use the following attribute to configure this orientation change, compare to the examples below as well:

```html
data-horizontal-position="opposite"
```

## JavaScript polyfill necessary for Microsoft Internet Explorer and Edge (older versions than 79)

In case you would need to support Microsoft Internet Explorer and/or Edge within your project setup, you'll need to polyfill (with e.g. [details-element-polyfill](https://github.com/javan/details-element-polyfill), that is still included in our pages for demo purposes) the `details` and `summary` HTML tags due to [their missing browser setup in those environments](https://caniuse.com/#feat=details).

[inspirational sources for this page]: # "https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element"
[inspirational sources for this page]: # "https://www.uiguideline.com/components/menu-dropdown"
