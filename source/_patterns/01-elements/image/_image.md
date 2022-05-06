---
title: Image
state: complete
---

## Responsive images: width, height and intrinsicsize

There has been some development the latest on the new proposed `intrinsicsize` attribute for images, that ended with the existing and well known attributes `width` and `height` will get used to compute that `intrinsicsize` directly via UA-stylesheets - so the responsive images and aspect-ratio comes without any costs and leads to that it even makes more sense than ever to fill out those attributes with the basic size of your image in the first place.

For more information have a look at those articles and the standard/proposal:

- <https://css-tricks.com/what-if-we-got-aspect-ratio-sized-images-by-doing-almost-nothing/>
- <https://css-tricks.com/do-this-to-improve-image-loading-on-your-website/> (with video)
- <https://github.com/WICG/intrinsicsize-attribute/issues/16>
- <https://github.com/web-platform-tests/wpt/pull/18945>
- <https://github.com/WICG/intrinsicsize-attribute/issues/4>
- <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images> (in general regarding Responsive images)

## Image formats

### JPEG (AVIF and WebP as progressive enhancement) for photographs etc.

> Photographs typically fare well with lossy compression (depending on the encoder's configuration). This makes `JPEG` and `WebP` good choices for photographs, with `JPEG` being more compatible but `WebP` perhaps offering better compression. To maximize quality and minimize download time, consider providing both using a fallback with `WebP` as the first choice and `JPEG` as the second. Otherwise, `JPEG` is the safe choice for compatibility.

Source: <https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#Photographs>

Next to WebP you could experiment a little bit with the new [image format `AVIF` that promises even lower file sizes than WebP](https://twitter.com/addyosmani/status/1297463776879550464?s=11) and [increases in browser support](https://caniuse.com/avif).

Additionally have a look at Googles product "Guetzli", that provides great `JPEG` compression rates as well: <https://github.com/google/guetzli/>

And another tool even also resulted in fine compression rates - the main difference in between the both of them is that JPEGMini isn't available for free anymore: <https://www.jpegmini.com>

Attention: `PNG` is even also often used for pictures, even though that the special capabilities of this format like partial transparency aren't being used. This leads to much huger filesizes in most cases, as the `JPEG` format is capable of much better compression rates than `PNG` in general, so you would have to check on this aspect individually and carefully.

### Partialy transparent images

Regarding images that need to have some kind of full or partial transparency, you could use either `GIF` (full) or `PNG` (most likely `PNG-24` for partial) transparency.

Or use SVG masks, as this beautiful concept shows: https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/#serving-the-perfect-image

### Diagrams, drawings, and charts

> For any image that can be represented using vector graphics, `SVG` is the best choice. Otherwise, you should use a lossless format like `PNG`. If you do choose a lossy format, such as `JPEG` or lossy `WebP`, carefully weigh the compression level to avoid causing text or other shapes to become fuzzy or unclear.

Source: <https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#Diagrams_drawings_and_charts>

## Further image compressions

On top of the possibilities mentioned above regarding image optimizations (Google Guetzli & JPEGMini) you could as well have a look at both [ImageAlpha (for PNG)](https://pngmini.com) and [ImageOptim (for all)](https://imageoptim.com/), both available for Mac and the first [both both other GUI and command-line variants](https://pngquant.org) and the latter as well as a webservice. Another great online tool that works entirely in the browser and doesn't even need to process your data on their servers (due to WebAssembly and some other cool stuff) is <https://squoosh.app>. Nowadays they additionally provide a CLI version of their software and new cool image formats, check out their version 2: https://web.dev/squoosh-v2/

Some further information on this topic are provided on this page: <https://dev.to/prototyp/optimizing-images-for-the-web-an-in-depth-guide-4j7d>

## Accessibility

## Always provide a link text

> All links should have text that uniquely identifies the link target.

Source: <https://www.deque.com/blog/accessibility-strategies-for-your-content-team/#:~:text=Link%20Text>

## Alt text should communicate the main point

> The key is to describe what you want your audience to get out of the image rather than a simple description of what the image is.

Source: <https://www.deque.com/blog/accessibility-strategies-for-your-content-team/#:~:text=Images>

### Using captions

For using captions it's recommended to use the `<figure>` and `<figcaption>` HTML tags - but please be aware that you [additionally need to enrich those via `aria-labelledby` or `aria-describedby` attributes to ensure that assistive technologies are recognizing the linkage of those tags on Windows](https://www.hassellinclusion.com/blog/figure-figcaption-extended-alternate-text-screen-readers/). It's mainly important to decide whether the `figcaption` HTML tags content is meant as a description or a label to choose one of those `aria-*` attributes correctly.

> When using the down arrow, NVDA announced all the `<img>` elements in turn except for the ones with empty or missing `alt` attributes. These were just completely ignored by the screen reader. Using `aria-labelledby` overrode any alternate text, and using `aria-describedby` added the ‘description’ into the alternate text. It’s interesting to note that using `aria-labelledby` also brought images with missing or empty alternate text to the attention of NVDA.

Source: <https://www.hassellinclusion.com/blog/figure-figcaption-extended-alternate-text-screen-readers/>

[inspirational sources for this page]: # "https://www.hassellinclusion.com/blog/figure-figcaption-extended-alternate-text-screen-readers/"
[inspirational sources for this page]: # "https://material.io/design/usability/accessibility.html#writing"
