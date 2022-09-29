---
title: loading
state: inprogress
---

Progress spinners (loading indicators) show the user that a longer-lasting action is being carried out.  
Progress/Loading Indicators are used when the application executes a server request or processes data in the frontend. The component is used as soon as the execution and the resulting delay are noticeable to the user. This keeps the user aware that his or her action is being executed.

## Accessibility

SVGs are often conveyed inconsistently to assistive technologies. The component’s accessibility is also highly contextual.
For optimal user experience, use the aria-description prop to let assistive technology users know the purpose of the loading spinner.

### `aria-live` and dynamic creation of html content

Using JavaScript (e.g. in context of frameworks like Angular, VueJS or React), it is possible to dynamically change parts of a page without requiring the entire page to reload — for instance, to update a list of search results on the fly, or to display a discreet alert or notification which does not require user interaction. While these changes are usually visually apparent to users who can see the page, they may not be obvious to users of assistive technologies. ARIA live regions fill this gap and provide a way to programmatically expose dynamic content changes in a way that can be announced by assistive technologies.

`aria-live` triggers screen readers when an element with aria-live (or text within an element with aria-live) is added or removed from the DOM. In contrast, when you unhide a hidden element, neither elements nor text are added or removed from the DOM, so the element's aria-live property doesn’t come into play.

Note that the live region needs to be present in the markup before the notification is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

You also need to adapt the `role` and `aria-live` level depending on the content. Further information can be found here [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Recommendations

### Do

If the application is waiting for a process, it makes sense to display an indicator in a central location.

### Don‘t

An indicator should not be used to visualize the application waiting for user input.
