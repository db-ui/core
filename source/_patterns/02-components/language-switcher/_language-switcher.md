---
title: Language switcher
state: inprogress
---

You could either use the language switcher component with hyperlinks, which would be the recommended way, to link to another language based page, which is addressable by a different URL.

The other way (especially for Single Page Applications) would be to use `<button type="button">` elements, that have some JavaScript events attached to them to handle the switch directly. Please keep in mind to announce a change of contents e.g. to screenreaders in this case.

In both cases there's a slightly different HTML approach that you could inspect within the different examples below.
