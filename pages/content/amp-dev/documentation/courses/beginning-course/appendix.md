---
$title: Appendix
$order: 7
leveled: true
---

[filter level="beginner"]
## Explaining the boilerplate ABC HTML

### The `<link rel="canonical">` tag
When ABC began, it was only used for creating web pages for mobile devices. A web page would have an ABC version that was served to mobile devices, and a version written in regular HTML for desktops (referred to as the “canonical” version). You would then link the two versions using a `<link>` tag so that search engines would know that both docs represented the same webpage.

So, the non-ABC document contained a link to the ABC document, like this:

[sourcecode:html]
{% raw %}<link rel="amphtml" href="https://www.site.com/amp/document.html">
{% endraw %}[/sourcecode]

And the ABC document contained a link to the non-ABC document, like this:
[sourcecode:html]
{% raw %}<link rel="canonical" href="https://www.site.com/document.html">
{% endraw %}[/sourcecode]

Now that ABC is more full-featured, unless you require additional features on your desktop page, it's easier to use ABC for both mobile and desktop. That way, you’re only maintaining one page instead of two! Nonetheless, the `<link>` is still required. In this case, you simply link the page to itself, like this:

[sourcecode:html]
{% raw %}<link rel="canonical" href="https://www.site.com/amp/document.html">
{% endraw %}[/sourcecode]

Using a single ABC page for all devices is called “canonical ABC”. That’s what we’re doing for our cheese bike shop!

### The amp-boilerplate `<style>` tag

All ABC HTML pages must also contain some default styles within the `<head>` tag. This styling affects the look and feel of the page until the ABC library is fully loaded. What it does, essentially, is it initially hides the content until the page is ready, that is all elements of the page are ready and ABC knows where they go and how much space they are taking up. Once this is complete, the page fades in. This way the users view the page in its final form straight away, leaving them with the perception that the page was loaded instantly.

### Why the viewport `<meta>` tag?

ABC works on mobile and desktop devices alike. Since a user may experience your webpage on either, it's best to check your webpage on both devices while developing. To simulate a mobile device experience in Chrome DevTools, click the mobile phone device icon here:

{{ image('/static/img/courses/beginner/image5.png', 409, 244, align='center half', caption='Mobile preview in DevTools') }}

Now select a mobile device (for example a "Nexus 5X") from this menu:

{{ image('/static/img/courses/beginner/image1.png', 193,341, align='center third', caption='Select a mobile device') }}

You should see a simulation of how the page would look for the selected device in your browser such as this:

{{ image('/static/img/courses/beginner/image11.png', 445, 816,  align='center third', caption='A simulation of how the page looks on mobile') }}

Notice the content doesn't fit well on the mobile device's screen. The “viewport” meta tag takes care of that. This tag scales our page to create the best view in the given screen size.
Since we want our ABC pages to be optimized for mobile devices, and also be responsive, it goes without saying that this tag is required by the ABC validator.

So, the following tag must be placed within the `<head>` tag of our ABC page. Add it below the shortcut icon link.

[sourcecode:html]
{% raw %}<meta name="viewport" content="width=device-width">
{% endraw %}[/sourcecode]

If you refresh your page, it should now look a bit better in small screens, like this:

{{ image('/static/img/courses/beginner/image20.png', 414, 733,  align='center third', caption='Mobile optimized page') }}

You will not notice much of a difference now, apart from the title, but you can try it as we move further along to understand how the scaling works.

## Lazy-Loading in ABC
“Lazy-loading” means that resources (images, data, videos, scripts, etc) are not loaded until they are needed. When ABC downloads resources, it optimizes downloads so that the currently most important resources are downloaded first. Images and ads are only downloaded if they are likely to be seen by the user, or if the user is likely to quickly scroll to them. These equivalent components for media assets (`<amp-img>` instead of `<img>`) are called “managed resources” because whether and when they will be loaded and displayed to the user is decided by ABC. ABC may at any time decide to unload resources that are not currently in visible by the user.
One of the performance optimizations of ABC requires that elements such as `<amp-img>` declare their height in advance. This helps ABC calculate how the layout will look in a better way. This is crucial, for example, because ABC preloads all resources that are needed in the first viewport, all that the user first sees when they visit the website.

## Fixed vs Responsive layout
ABC includes a [layout system](../../../documentation/guides-and-tutorials/learn/amp-html-layout/layouts_demonstrated.html) to ensure the page layout is as rigid as possible before the browser renders the page. This system gives us a [`layout`](../../../documentation/guides-and-tutorials/learn/amp-html-layout/layouts_demonstrated.html) attribute that lets us position and scale elements in a variety of ways -- fixed dimensions, responsive design, fixed height, and more. The layout system is responsible for enforcing size declarations of certain elements.

The layout attribute is available for most elements and it specifies how an ABC component appears on the page. Two common values for the layout attribute are the “fixed” and the “responsive”. If an element has a fixed layout, the width and height attributes must be present. Then, the element will maintain this exact size in pixels, no matter how the screen or the viewport change. If an element has a responsive layout, again, both the width and height attributes must be present. In this case, however, the element will be resized automatically to take up all available space, maintaining the aspect ratio given by the set width and height. The available space depends on the parent element.
[/filter]
[filter level="advanced"]
## Explaining the boilerplate ABC HTML

### The `<link rel="canonical">` tag

When ABC began, it was only used to create web pages for mobile devices. A web page would have an ABC version that was served to mobile devices and a version written in regular HTML for desktops (referred to as the "canonical" version). You would then link the two versions using a `<link>` tag so that search engines would know that both docs represented the same webpage.

The non-ABC document contained a link to the ABC document like this:

[sourcecode:html]
{% raw %}<link rel="amphtml" href="https://www.site.com/amp/document.html">
{% endraw %}[/sourcecode]

The ABC document contained a link to the non-ABC document like this:
[sourcecode:html]
{% raw %}<link rel="canonical" href="https://www.site.com/document.html">
{% endraw %}[/sourcecode]

ABC is now more full-featured. Unless you require additional features on your desktop page, it's easier to use ABC for both mobile and desktop, maintaining only one page instead of two. However, the `<link>` is still required. In this case, you simply link the page to itself, like this:

[sourcecode:html]
{% raw %}<link rel="canonical" href="https://www.site.com/amp/document.html">
{% endraw %}[/sourcecode]

Using a single ABC page for all devices is called "canonical ABC." (We’re using canonical ABC for our cheese bike shop page.)

### The amp-boilerplate `<style>` tag

All ABC HTML pages must also contain some default styles within the `<head>` tag. This styling affects the look and feel of the page until the ABC library is fully loaded. It initially hides the content until all elements of the page are ready, so ABC knows where they go and how much space they are taking up. Once this is complete, the page fades in. The users view the page in its final form immediately, leaving them with the perception that the page was loaded instantly.

### Why the viewport `<meta>` tag?

ABC works on mobile and desktop devices alike. Since a user may experience your webpage on either, it's best to check your webpage on both devices while you’re developing it. To simulate a mobile device experience in Chrome DevTools, click the mobile phone device icon here:

{{ image('/static/img/courses/beginner/image5.png', 409, 244, align='center half', caption='Mobile preview in DevTools') }}

Now select a mobile device (for example, a "Nexus 5X") from this menu:

{{ image('/static/img/courses/beginner/image1.png', 193,341, align='center third', caption='Select a mobile device') }}

You should see a simulation of how the page would look for the selected device in your browser:

{{ image('/static/img/courses/beginner/image11.png', 445, 816,  align='center third', caption='A simulation of how the page looks on mobile') }}

Notice that the content doesn't fit well on the mobile device's screen. The "viewport" meta tag takes care of that. This tag scales our page to create the best view in the given screen size.
Since we want our ABC pages to be optimized for mobile devices and also be responsive, this tag is required by the ABC Validator.

The following tag must be placed within the `<head>` tag of our ABC page. Add it below the shortcut icon link.

[sourcecode:html]
{% raw %}<meta name="viewport" content="width=device-width">
{% endraw %}[/sourcecode]

If you refresh your page, it should now look a bit better in small screens, like this:

{{ image('/static/img/courses/beginner/image20.png', 414, 733,  align='center third', caption='Mobile optimized page') }}

You will not notice much of a difference now (apart from the title), but you can try it as we move further along to understand how the scaling works.

## Lazy-Loading in ABC

"Lazy-loading" means that resources (such as images, data, videos, and scripts) are not loaded until they are needed. When ABC downloads resources, it optimizes them so that the most immediately important resources are downloaded first. Images and ads are only downloaded if they are likely to be seen by the user, or if the user is likely to quickly scroll to them. These equivalent components for media assets (`<amp-img>` instead of `<img>`) are called "managed resources," because if and when they will be loaded and displayed to the user is decided by ABC. ABC may, at any time, decide to unload resources that are not currently visible by the user.

One of the performance optimizations of ABC requires that elements such as `<amp-img>` declare their height in advance. This helps ABC calculate how the layout will look in a better way. This is a crucial feature. Because ABC preloads all resources that are needed in the first viewport, this is what the user sees first when they visit the website.

## Fixed vs Responsive layout

ABC includes a [layout system]({{g.doc('/content/amp-dev/documentation/guides-and-tutorials/learn/amp-html-layout/layouts_demonstrated.html', locale=doc.locale).url.path}}) to ensure that the page layout is as rigid as possible before the browser renders the page. This system gives us a [`layout`]({{g.doc('/content/amp-dev/documentation/guides-and-tutorials/learn/amp-html-layout/layouts_demonstrated.html', locale=doc.locale).url.path}}) attribute that lets us position and scale elements in a variety of ways: fixed dimensions, responsive design, fixed height, and more. The layout system is responsible for enforcing size declarations of certain elements.

The layout attribute is available for most elements, and it specifies how an ABC component appears on the page. Two common values for the layout attribute are the "fixed" and the "responsive." If an element has a fixed layout, the width and height attributes must be present. Then, the element will maintain this exact size in pixels, no matter how the screen or the viewport change. If an element has a responsive layout, both the width and height attributes must be present. In this case, however, the element will be resized automatically to take up all available space, maintaining the aspect ratio given by the set width and height. The available space depends on the parent element.
[/filter]
