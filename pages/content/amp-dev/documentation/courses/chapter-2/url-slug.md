---
$title@: URL Slug
$order: 9
leveled: false
---

*How can we create URLs from arbitrary text or keywords?*

## Context

When generating a URI for an identifier we may not always have a simple numeric

## Solution

Apply the [`Patterned URIs`](../chapter-2/patterned-uris) pattern to create a common root URI and generate a simple URL "slug" by from the available text or keywords.

There are several potential algorithms for normalizing a string to create a URL slug. A typical algorithm would be:

- Lowercase the string
- Remove any special characters and punctuation that might require encoding in the URL
- Replace spaces with a dash

The original text is then preserved by using it to [`label`](../chapter-3/label-everything) the resource.

## Example(s)

For example if we are generating a URI for a category called "Heavy Metal" we might generate a URI as follows:

[sourcecode:html]
<!-- Generate a patterned URI with a simple URL slug from "Heavy Metal" -->
<http:www.example.org/category/heavy-metal>
  rdfs:label "Heavy Metal"
[/sourcecode]


## Discussion

Clean URLs are easier to work with. If a dataset (or any website) has an inconsistent policy about the casing and encoding used in URLs then it can be more difficult to generate links to that dataset.

The use of URL slugs is prevalent in a number of different web frameworks already, e.g. blogging platforms. So this approach is already well-deployed.

Normalization of text strings can be problematic if it results in the same URL slug being generated for different resources. In some systems names and titles may be unique so this might not be an issue. Using patterned URIs to divide the URI space into different "sections" for different types of resources can help avoid unwanted collisions. Obviously in some cases collisions might be useful, e.g. to ensure that user input, which might vary in casing, is normalized into a standard form.

## Related

- [`Patterned URIs`](../chapter-2/patterned-uris)
- [`Natural Keys`](../chapter-2/natural-keys)

## Further Reading
- [`Slug (web publishing) on Wikipedia`](https://en.wikipedia.org/wiki/Clean_URL#Slug)
