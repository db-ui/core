---
title: Linear loader
state: inreview
---

Indicate the progress completion of a task, e.g. a file download.

The circual progress is implemented via progressive enhancement - as the underlaying conic-gradient CSS feature isn't available [in Firefox](https://caniuse.com/#feat=css-conic-gradients), it will get displayed as a "regular" progress instead.

## JavaScript polyfill necessary for Microsoft Internet Explorer 11 and Edge version 12 till 14

If you want to use the conic variant of this pattern and would need to support IE11 as well, you'll need a polyfill like [ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties), as we're using CSS variables functionality for that variant.

[inspirational sources for this page]: # "https://www.uiguideline.com/components/progress"
