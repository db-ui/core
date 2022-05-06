---
title: Overflow menu
---

## Variation to display the overflow menu on the opposite side

If you're either using this component at the very end of a main content part that will most likely always get displayed at the opposite viewport border or you'd like to implement some kind of a collision mechanism (most likely with JavaScript) and flip the overlays orientation to the opposite side (from regularly left to right positioned on left-to-right reading direction), you could use the following attribute to configure this orientation change, compare to the examples below as well:

```html
data-horizontal-position="opposite"
```

## JavaScript polyfill necessary for Microsoft Internet Explorer and Edge (older versions than 79)

In case you would need to support Microsoft Internet Explorer and/or Edge within your project setup, you'll need to polyfill (with e.g. [details-element-polyfill](https://github.com/javan/details-element-polyfill), that is still included in our pages for demo purposes) the `details` and `summary` HTML tags due to [their missing browser setup in those environments](https://caniuse.com/#feat=details).

[inspirational sources for this page]: # "https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element"
[inspirational sources for this page]: # "https://www.uiguideline.com/components/menu-dropdown"
