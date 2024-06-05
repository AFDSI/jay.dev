---
$title@: Ordering Relation
$order: 8
leveled: false
---

*How can we specify an ordering relationship between two or more resources?*

## Context

Ordering is important in many data models. Often that ordering can be implicit in the properties of resources, e.g. publication dates of Articles. In some cases the ordering needs to be more explicit, describing a fixed ordering relationship between the resources, e.g. a sequence of events, or stops on a delivery route.

## Solution

Create ordering properties, e.g. "previous" and "next", for specifying the relationship between the ordered resources.

## Example(s)

The following example describes the bus route, consisting of a number of bus stops. A stop may be preceded by a previous stop and may be followed by another stop. Custom relations have been defined to identify the previous and next relationships between the bus stops.

[sourcecode:html]
ex:bus10 a ex:Bus;
  ex:route ex:stop1.

ex:stop1 a ex:BusStop;
  ex:number 1;
  ex:nextStop ex:stop2.

ex:stop2 a ex:BusStop;
  ex:number 2;
  ex:previousStop ex:stop1;
  ex:nextStop ex:stop2.

ex:stop3 a ex:BusStop;
  ex:number 3;
  ex:previousStop ex:stop2.
[/sourcecode]

## Discussion

Another, more explicit way to define order is by using an RDF collection to create an

[sourcecode:html]
ex:bus10 a ex:Bus;
  ex:route ex:stop1.
[/sourcecode]

Lists are useful when there is no explicit relationship between the resources in the ordered collection. The above example has lost the fact that Bus Stop 2 is preceded by Bus Stop 1, other than their arrangement in a list. An application could still discover this relation using a query, but this can be difficult, and is certainly less explicit than the original example.

An ordering relation provides an explicit relationship between the ordered resources; in effect the ordering relations define a linked list that connects the resources together. Ordering relations are also simple to query and manipulate. For example, it would be very simple to adjust the ordered relation approach to modeling a bus route to add an extra stop, whereas the list based approach is more difficult as the entire list needs to be re-built requiring more changes to the graph.

The trade-offs between using an Ordering Relation versus an Ordered List depends on the specific data model. Continuing the above example, if the ordering of stops is generally fixed, then it is appropriate to using an Ordering Relation. However, if new bus routes are constructed by selecting from the available bus stops then an Ordered List may be more appropriate as there is no longer a fixed relationship between the stops.

## Related

- [`Ordered List`](../chapter-3/ordered-list)

## Further Reading

- [`Defining N-ary Relations on the Semantic Web`](https://www.w3.org/TR/swbp-n-aryRelations/#pattern2)
