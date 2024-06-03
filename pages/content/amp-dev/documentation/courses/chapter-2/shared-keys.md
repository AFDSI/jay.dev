---
$title@: Shared Keys
$order: 8
leveled: false
---

*How do we simplify the inter-linking of datasets?*

## Context

It is common to carry out inter-linking of datasets as a separate activity following the initial modelling and data conversion exercises have been completed. How can the final stage of inter-linking be simplified?

It is also common that within a specific domain there will be a set of non-web identifiers that are standardised across different applications and publishers. How can the inter-linking of those datasets be simplified, encouraging convergence on web identifiers?

## Solution

Create [`Patterned URIs`](../chapter-2/patterned-uris) 
by applying the [`Natural Keys`](../chapter-2/natural-keys) 
pattern, but prefer public, standard identifiers rather than internal system specific codes.

## Example(s)

The BBC have created URIs for artists that are algorithmically related to the MusicBrainz URIs using a common Shared Key. MusicBrainz URIs are [`Patterned URIs`](../chapter-2/patterned-uris) built from a "MusicBrainz ID", e.g. ``a74b1b7f-71a5-4011-9441-d0b5e4122711``. The MusicBrainz and BBC URIs are shown below:

[sourcecode:html]
  https://www.bbc.com/news/topics/c7mj1vvd911t
  http://musicbrainz.org/artist/a74b1b7f-71a5-4011-9441-d0b5e4122711
[/sourcecode]

## Discussion

Predictable URIs structures make it easy for application developers and toolkits to build URIs from simple templates. By using URIs that are constructed from public identifiers, that already have scope outside of the immediate application, it increases the ease with which inter-linking can take place. For example, the pattern may avoid the need to look-up URIs in a SPARQL endpoint, allowing a developer to simplify use a URI template.

The Shared Keys pattern is best suited to situations where the shared identifiers are stable and rarely change.

## Related

- [`Patterned URIs`](../chapter-2/patterned-uris)
- [`Natural Keys`](../chapter-2/natural-keys)
