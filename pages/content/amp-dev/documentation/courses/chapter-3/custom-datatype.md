---
$title@: Custom Datatype
$order: 2
leveled: false
---

*A data model contains structured values that don't correspond to one of the pre-existing XML Schema datatypes*

## Context

Some applications may have pre-defined custom datatypes for describing the structure of literal values. It is useful to preserve this type information when publishing it as RDF in order to allow applications to handle them correctly.

## Solution

Create a URI to identify the custom datatype and use that URI when creating [`Typed Literals`](../chapter-3/typed-literal).

## Example(s)

[sourcecode:html]
<!-- Define a URI for different forms of shipping codes -->
<http:www.example.org/datatype/FedexShippingCode>
  rdfs:label "Fedex Shipping Code".
<http:www.example.org/datatype/UPSShippingCode>
  rdfs:label "UPS Shipping Code".

<!-- Indicate the form of shipping code with a Typed Literal -->
_:delivery1
  ex:shippingCode "1234-568"  <http:www.example.org/datatype/FedexShippingCode>.
_:delivery1
  ex:shippingCode "abcd/zx"  <http:www.example.org/datatype/UPSShippingCode>.
[/sourcecode]

## Discussion

RDF does not place any limits on what datatypes might be associated with a literal. The model recommends using a standard type library, like XML Schema, wherever possible but the only real constraint is that datatypes should be identified by a URI. Creating a new URI for an application or domain specific datatype allows the type system to be easily extended. The datatype URI can be annotated with additional RDF statements, e.g. a label or description, to describe its usage. With sufficient detail on the data type, reasoners may be better equipped to draw new knowledge from a data model or highlight inconsistencies.

The key limitation to custom datatypes is that SPARQL query engines will not understand how to compare values of that type. Some SPARQL query processors may provide support for understanding the range of types it understands.

Note that a typed literal with a custom datatype can also be modelled as a sub-property. Continuing the above example, instead of defining a new type for each shipping code, the model could have instead been structured as:

[sourcecode:html]
<http:www.example.org/def/post/fedexShippingCode>
  a rdfs:Property;
  rdfs:subPropertyOf <http:www.example.org/def/post/shippingCode>
  rdfs:label "Fedex Shipping Code".

<!-- Use the derived property: -->
_:delivery1
  ex:fedexShippingCode "1234-568".
[/sourcecode]

The advantages of this alternate approaches are:

- Simpler querying of data by allowing the use of triple patterns, rather than FILTERs for extracting data of a common type
- More explicit, fine-grained semantics

But there are several disadvantages to this approach:

- Increases the number of very similar properties, requiring redundancy of data or reasoning to allow applications to treat them generically
- Doesn't address the core requirement to indicate the lexical form of a structured value

With this in mind the general recommendation is to:

- Use a custom datatype to label particular types of structured value that share a common lexical form. These values may be associated with a broad range of different properties. Processing applications may want to implement a common set type conversions or display options for the values
- Use a sub-property in all other cases

Note that these options aren't always mutually exclusive. It might be useful in some scenarios to have an explicit property for associating a general class of code, identifier, or other

## Related

- [`Typed Literals`](../chapter-3/typed-literal)
- [`Literal Key`](../chapter-2/literal-keys)
