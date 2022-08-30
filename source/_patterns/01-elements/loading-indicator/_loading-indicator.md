---
title: loading
state: inevaluation
---

Progress spinners (loading indicators) show the user that a longer-lasting action is being carried out.  
Progress/Loading Indicators are used when the application executes a server request or processes data in the frontend. The component is used as soon as the execution and the resulting delay are noticeable to the user. This keeps the user aware that his or her action is being executed.

## Accessibility

SVGs are often conveyed inconsistently to assistive technologies. The component’s accessibility is also highly contextual.
For optimal user experience, use the aria-description prop to let assistive technology users know the purpose of the loading spinner.

## Recommendations

### Do

If the application is waiting for a process, it makes sense to display an indicator in a central location.

### Don‘t

An indicator should not be used to visualize the application waiting for user input.
