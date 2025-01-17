---
$title@: Progressive Enrichment
$order: 12
leveled: false
---

*How can the quality of data or a data model be improved over time?*

## Context

At the time when a dataset is first published the initial data may be incomplete, e.g. because data from additional systems has not yet been published, or the initial dataset is a place-holder that is to be later annotated with additional data. Data models are also likely to evolve over time, e.g. to refine a model following usage experience or to converge on standard terms.

## Solution

As the need arises, update a dataset to include additional

## Discussion

A key benefit of the semi-structured nature of RDF is the ability to easily merge new statements into an existing dataset. The new statements may be about entirely new resources or include additional facts about existing resources. There is no need to fully define a schema, or even fully populate a data model, up front. Data can be published and then refined and improved over time.

Progressive Enhancement is essentially a variant of the [`Annotation`](../chapter-4/annotation) pattern within a single dataset. Whereas the Annotation pattern describes an approach to distributed publishing of data about a set of resources, Progressive Enhancement confines this to a particular dataset allowing the depth of detail or quality of the modeling to improve over time.

A common use of this pattern in Linked Data publishing is to update a dataset with additional [`Equivalence Links`](../chapter-4/equivalence-links).

Progressive Enrichment is a key aspect of the [`Equivalence Links`](../chapter-4/equivalence-links) application pattern.

## Related

- [`Annotation`](../chapter-4/annotation)
- [`Equivalence Links`](../chapter-4/equivalence-links)
