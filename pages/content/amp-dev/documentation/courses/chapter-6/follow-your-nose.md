---
$title@: Follow Your Nose
$order: 6
leveled: false
---

*How can internationalized text be expressed in RDF?*

## Context

When we retrieve some data from a URI, we are unlikely to have obtained all of the relevant data about that resource. Additional statements or useful extra context may be available from both the original source, as well as other third-party sources on the web.

## Solution

Identify additional useful links within the available data, and then de-reference those URIs in turn to find the additional data.

## Example(s)

The BBC Wildlife Finder application exposes data about biological species. By following links within the data we can find additional information about related species or its habitat from within the same dataset. By following links to dbpedia or other sources, we can find additional detail on the biology and distribution of the species.

## Discussion

This pattern is at the core of the Linked Data approach. By giving resources URIs we make them part of the web, allowing a description of them to be retrieved by a simple HTTP GET request. By linking to other resources on the web, we allow applications to find more information by repeatedly following links to crawl the additional sources.

There are two main types of links that could be followed in an RDF graph:

- URIs of other resources -- links to further documents, or URIs of other related resources. Follow these links to find more data.
- URIs of RDF terms -- links to definitions of properties, classes and other terms. Follow these links to find machine-readable descriptions of terms.

An application is unlikely to want to blindly follow all links. For example applications will certainly want to place a limit on how many additional links it will want to fetch, e.g. one or two hops from the original resource. An application may also want to limit the data retrieved, e.g. by only following certain types of relationship or restricting the domains from which data will be retrieved. The former allows a more directed "crawl" to find related information, while the latter allows simple white/black-listing to only obtain data from trusted sources.

An application might also want to limit network traffic by performing [`Resource Caching`](../chapter-6/resource-caching).
[`Parallel Retrieval`](../chapter-6/parallel-retrieval) can also improve performance.

The retrieved data will often be parsed into one RDF graph that can then be queried or manipulated within the application. This "working set" might be cached as well as the original source descriptions, to allow for the fact that the same data may be repeatedly referenced.

Some additional processing may also be carried out on the retrieved data, e.g. to apply `Smushing <smushing.html>` to combine all available data about a resource into a single description.

## Related

- [`Missing Isn't Broken`](../chapter-6/missing-isnt-broken)
- [`See Also`](../chapter-4/see-also)
- [`Smushing`](../chapter-6/smushing)
- [`Resource Caching`](../chapter-6/resource-caching)
- [`Parallel Retrieval`](../chapter-6/parallel-loading)
