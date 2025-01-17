---
$title@: Proxy URIs
$order: 6
leveled: false
---

*How do we deal with lack of standard identifiers for third-party resources?*

## Context

While it is a goal to reuse identifiers across datasets wherever possible, this is often difficult to achieve in practice. An authority for some specific data, e.g. ISO, may not have assigned unique URIs to resources in their dataset. Datasets also appear online at different times, making reuse difficult until more authoritative data appears and convergence happens on common identifiers. In these circumstances, how should identifiers be created for these third-party resources.

## Solution

Treat third-party resources identically to those in your own data and assign them URIs within your domain.

## Example(s)

There is still no agreed standard way of generating URIs for Internet Media Types. IANA have adopted RDF for publishing descriptions of registered media types. A data set containing descriptions of images may therefore use locally minted URIs for those media types:

[sourcecode:html]
ex:anImage a foaf:Image;
  dc:format <http://www.example.org/media-types/image/jpeg>
[/sourcecode]

## Discussion

A publisher should focus on their immediate goal of opening up their data, ensuring that the published data is internally consistent and has identifiers for all key concepts. If existing identifiers exist then these should be reused. Where they don't then new locally minted URIs should be created from [`Shared Keys`](../chapter-2/shared-keys) .

Once the data has been published, some alignment can take place within a community to achieve agreement on standard URIs for shared identifiers. One approach for achieving this alignment is to publish [`Equivalence Links`](../chapter-4/equivalence-links) .

## Related

- [`Shared Keys`](../chapter-2/shared-keys)
- [`Equivalence Links`](../chapter-4/equivalence-links)
