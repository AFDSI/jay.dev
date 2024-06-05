---
$title@: Reified Statement
$order: 13
leveled: false
---

*How can we make statements about statements?*

## Context

The foundation of the RDF model is the triple. This simple structure can be combined to create complex descriptions that can support any kind of data model. But in some circumstances there may be a need to annotate an individual triple, e.g. to indicate when the statement was made, or who by. How can this be achieved?

## Solution

Use a technique known as reification and model the triple as a resource, with properties referring to its subject, predicate and object.

## Example(s)

For example a research paper may have multiple keywords. The ordering of these keywords is not important, so using the Dublin Core subject property, we can express this multi-valued relation as:

[sourcecode:html]
_:ex rdf:type rdf:Statement;
  rdf:subject <http://www.example.com/book/1>;
  rdf:predicate <http://xmlns.com/foaf/0/1/maker>;
  rdf:object <http://www.example.com/author/joe>;
    dc:created "2022-02-13".
[/sourcecode]

## Discussion

Repeating properties is the simplest approach to handling multi-valued relations. The alternatives all have their downsides. One alternative would be to use a structured value for the literal, e.g:

[sourcecode:html]
_:doc dc:subject "RDF, Semantic Web".
[/sourcecode]

Reification is a much maligned technique but has its role to play in RDF modeling. Understanding its limitations allows it to be used where appropriate and avoided when other techniques like [`Named Graphs`](../chapter-5/named-graphs) are a better fit.

RDF triples cannot be directly annotated. Reification is a modeling approach to dealing with this that involves changing the structure of the model. Each triple that needs to be annotated is instead modelled as a resource in its own right; an instance of the `rdf:Statement` class. The statement resource then has subject, predicate, and object properties that describe the original triple; additional properties can then be added to annotate the statement.

The obvious limitation of this approach is that the data model no longer contains a simple set of triples, instead it contains *descriptions of triples*. The triples themselves have not been explicitly asserted. This makes a reified model harder to query, more difficult to manipulate, and at least three or four times larger in terms of number of triples.

In contrast to reification the [`Named Graphs`](../chapter-5/named-graphs) pattern offers a data management approach to annotating triples or sets of triples, by associating them with a URI which can itself be the subject of additional assertions.

So where is reification best used? Current practice seems to suggest that reified statements are best used as a technique for describing changes to the structure of a graph, e.g. statements that have been added or removed, along with additional properties to indicate the time of the change, etc. In other circumstances it is best used with a reasoner or rule engine that can support surfacing the original triples, thereby simplifying querying. But this still comes with a cost of increased storage as well as potentially performance issues.

There are several downsides to using Containers and Collections. First they can be difficult to use as they can be hard to query. Second, when combining data from different sources the Containers and Collections won't be merged together to create a single structure; the lists will remain separate.

On the whole, the simplest way to express multi-valued relations is to use a simple Repeated Property. Collections and Containers are best used only when ordering is significant.

## Related

- [`Named Graphs`](../chapter-5/named-graphs)
