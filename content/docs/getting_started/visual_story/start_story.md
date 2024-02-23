---
$title: Starting our story
$order: 2
---

An entire story is represented by the `amp-story` component, which serves as a container for all the pages in a story.  The `amp-story` component is also responsible for creating the UI shell, including handling gestures and navigation.

The `amp-story` component is a custom AMP component, and like all custom components, you must add the associated script for the component to the AMP document.

**Open** the `pets.html` file in your text editor, and in the `<head>` section, **add** the following script:

```html hl_lines="2 3"
<head>
<script async custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
</head>
```

**Add** the `<amp-story>` element to the `<body>` of your document, and specify the mandatory `standalone` attribute, like so:

```html hl_lines="2 3"
<body>
  <amp-story standalone>
  </amp-story>
</body>
```

It's important to note that to have a valid AMP story, the `<body>` element must have only one child&mdash;the `<amp-story>` component; all other elements are contained in the `<amp-story>`.

## Providing meta information

For stories to be discovered in the AMP stories ecosystem, certain metadata is required to provide mini details of the story, like:

* The title of the story, represented by the `title` attribute (e.g., "Joy of Pets").
* The name of the publisher, represented by the `publisher` attribute (e.g., "AMP tutorials").
* The publisher's logo, represented by the `publisher-logo-src` attribute.  This is a URL for a logo image, in square format with a 1x1 aspect ratio.
* A poster image of the story, represented by the `poster-portrait-src` attribute. This is a URL for the poster, and the image must be in portrait format with a 3x4 aspect ratio.

Let's add these attributes to our `<amp-story>` tag:

```html hl_lines="2 3 4 5"
<amp-story standalone
    title="Joy of Pets"
    publisher="AMP tutorials"
    publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
    poster-portrait-src="assets/cover.jpg">
```

In addition to these required attributes, there are other attributes you can apply. To learn more, see the [attributes](/docs/reference/components/amp-story.html#attributes) section of the amp-story reference documentation.

Note: These metadata attributes supplement and do not replace any Structured Data (e.g. JSON-LD) on the page. To ensure your AMP pages are discovered across all platforms, you should add [Structured Data](/docs/fundamentals/discovery.html#integrate-with-third-party-platforms-through-additional-metadata) to all your AMP pages, including AMP stories.

At this point, we have a shell of a story without any content. Let's create that page.

<div class="prev-next-buttons">
  <a class="button prev-button" href="{{g.doc('/content/docs/getting_started/visual_story/parts_of_story.md', locale=doc.locale).url.path}}"><span class="arrow-prev">Prev</span></a>
  <a class="button next-button" href="{{g.doc('/content/docs/getting_started/visual_story/create_cover_page.md', locale=doc.locale).url.path}}"><span class="arrow-next">Next</span></a>
</div>
