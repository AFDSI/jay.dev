---
$title@: Link Not Label
$order: 5
leveled: false
---

*How do we model a dataset to maximize benefits of a graph based model?*

## Context

Most datasets are centered around a few core resources types that are central to that dataset. For example a social network dataset would be centered on people, groups and organizations, whereas a publishing dataset would be centered on authors, publications and publishers.

However every dataset typically has some additional resource types that are less "central". E.g areas or topics of interest, spoken or print languages, publication formats, etc. Often these resources are overlooked during modeling and are often only represented as simple literal values. This can make it less efficient to query a dataset, e.g. to group resources based on shared characteristics (e.g. everyone with same interests, all hardback books). It can also limit the [`annotate`](../chapter-4/annotation) 
these aspects of a dataset, e.g. in order to add [`equivalence links`](../chapter-4/equivalence-links) 

Many common modeling approaches or industry standard models often reinforce a less expressive modeling approach. For example many publishing and library standards, while encouraging use of controlled terms and authority files, focus largely on publications as the only important entity in a data model, leaving subject categories and authors as little more than labels associated with a work.

## Solution

Ensure that all resources in a dataset are modeled as resources rather than simple literal values. Relate resources together to create a richer graph model. Use the literal values as the labels of the new resources.

A good approach is to look for any controlled vocabularies, keywords, tags, or annotations and dimensions in a dataset and model them as resources. Even structured literal values like dates might be more usefully modeled as resources.

## Example(s)

Example of potential resources that might get overlooked:

- Languages
- Country codes
- Tags, categories, or subject headings
- Gender
- Genres
- Formats

A simple example:

[sourcecode:html]
<!-- Rather than this: -->

  dc:format "Hardback";
  dc:lang "en"
  dc:subject "RDF", "SPARQL".

<!-- Use a richer model: -->
<http://www.example.org/book/1>ex:experimenter ex:Bob.
  dcterms:format <http://example.org/formats/hardback>;
  dcterms:lang <http://www.lingvoj.org/lingvo/en>;
  dcterms:subject <http://example.org/category/rdf>;
  dcterms:subject <http://example.org/category/sparql>.

<http://example.org/formats/hardback>
  rdfs:label "Hardback".

<http://example.org/category/rdf>
  rdfs:label "RDF".

<http://example.org/category/sparql>
  rdfs:label "SPARQL".
<!-- Categories could later be related to other sources -->
<http://example.org/category/rdf>
  owl:sameAs <http://id.loc.gov/authorities/sh2003010124#concept>;
  owl:sameAs <http://rdf.freebase.com/ns/authority.us.gov.loc.sh.sh2003010124>.
[/sourcecode]


## Discussion

Creating a rich graph of relationships within a dataset will yield more flexibility and value from adopting Linked Data.

For example, as RDF triple stores are optimized for storing and querying relationships and graph patterns, creating resources for common dimensions in a dataset will allow for faster and more flexible querying. By representing these dimensions as resources in their own right, then they can be more easily annotated, e.g. to qualify them with additional data, or relate them to external sources.

In many cases existing resources in publicly available datasets can be used instead of creating new URIs. By using resources, and reusing identifiers, it becomes easier to correlate and traverse different datasets. For example it becomes possible to draw in external data to enrich an existing application, e.g. an author profile or related works in another collection.

## Related

- [`annotate`](../chapter-4/annotation)
- [`equivalence links`](../chapter-4/equivalence-links)

## Further Reading

- [`Why Resources in Linked Data are Good`](<#>)
