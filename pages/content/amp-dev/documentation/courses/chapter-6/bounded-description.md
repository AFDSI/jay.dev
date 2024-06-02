---
$title: Bounded Description
$order: 4
leveled: false
---

*How can we generate a useful default description of a resource without having to enumerate all the properties or relations that are of interest?*

## Context

Application using semi-structured data sources should be tolerant of discovering unexpected data or missing properties of resources. For applications to be able to achieve this, there needs to be an approach to generating useful default descriptions of resources that don't require enumerating every property of interest. This behavior is particularly useful for Linked Data browsers or similar applications that can have little or no expectation as to with which datasets they may be interacting.

## Solution

Extract a sub-graph, or "bounded description", from a dataset that contains all of relevant properties and relationships associated with a resource.

## Discussion

Bounded Descriptions take advantage of the graph structure of RDF in order to define simple graph operations that can be applied to any node in the graph. The operations yield a useful sub-set of the properties associated with the resource based on how they relate to the resource, rather than the specific RDF predicates that have been used.

There are a number of different types of bounded description that are in common use:

- *Datatype Property Description* -- retrieve all properties of a resource whose values are literals
- *Object Property Description* -- retrieve all properties of a resource whose values are resources, typically eliminatingblank nodes
- *Concise Bounded Description* -- effectively the above two descriptions, but recursively include all properties of any blank nodes present in object properties
- *Symmetric Concise Bounded Description* -- as above but include statements where the resource being described is the object, rather than the subject

Many different variations of these basic descriptions are possible, especially when additional filtering is done to include, for example, properties that are useful for labeling (in a user interface).

In practice many common web application use cases can easily be fulfilled with one or more bounded description queries. The ability to use general purpose queries to build a user interface or otherwise drive application behavior increases cacheability of the results: an application may end up using a small number of relatively general purpose queries that apply to a number of use cases.

Bounded descriptions can be implemented using SPARQL ``CONSTRUCT`` queries. SPARQL ``DESCRIBE`` queries are implemented using a Bounded Description that is built-in to the specific SPARQL processor being used. The most common approach is to use a Concise Bounded Description.

## Further Reading

- `Bounded Descriptions in RDF <http://n2.talis.com/wiki/Bounded_Descriptions_in_RDF>`
- `Concise Bounded Description <http://www.w3.org/Submission/CBD/>`

