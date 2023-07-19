---
title: Image - Responsive and pixel density
state: complete
---

### Set via `x` or `w` descriptors within the `srcset` attribute

> One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:
>
> - A URL to an image
> - Optionally, whitespace followed by one of:
>
>   - A width descriptor (a positive integer directly followed by `w`). The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.
>   - A pixel density descriptor (a positive floating point number directly followed by `x`).
>
> If no descriptor is specified, the source is assigned the default descriptor of `1x`.
>
> It is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with `2x`) are also invalid.
>
> The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example.

Source: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#attr-srcset>

Further information in general regarding Responsive images: <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images>
