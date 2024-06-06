---
$title@: Schema Annotation
$order: 13
leveled: false
---

*How can application-specific processing rules be externalized?*

## Context

Data driven applications typically end up with built-in processing rules for handling particular types of data, e.g. validation constraints, preferences for specific properties or types, etc. These rules are often encapsulated in procedural code, making them difficult to change. Externalizing these rules as declarative configuration can make an application easier to customize. How can this be achieved with applications that consume Linked Data?

## Solution

Externalize constraints using annotation properties that are used to drive processing rules or constraints by annotating classes and properties in a vocabulary.

## Example(s)

For example a research paper may have multiple keywords. The ordering of these keywords is not important, so using the Dublin Core subject property, we can express this multi-valued relation as:

[sourcecode:html]
ex:RequiredProperty a rdfs:Property;
  rdfs:comment "must be completed on data entry form".

ex:IgnoredProperty a rdfs:Property;
  rdfs:comment "never shown when displaying data".

<http://xmlns.com/foaf/0.1/name>
  a ex:RequiredProperty.

<http://xmlns.com/foaf/0.1/dnaChecksum>
  a ex:IgnoredProperty.
[/sourcecode]

## Discussion

Simple annotations of classes and properties is a simple and easy way to externalize some common types of application configuration. RDF vocabularies are easily extended with additional properties, making them suitable for extension in this way. Using this approach applications can be very easily tailored to work with a range of different vocabularies.

Annotations may encode a wide range of configuration options including: display preferences, validation constraints, identifier assignment rules for classes, and local labeling for classes and properties. Annotation may even be used to tailor inferencing over specific vocabularies to allow for more local customiZation and control over how inferencing is applied; for example a local schema annotation might declare that two classes were equivalent, or that a specific property is an inverse-functional-property, triggering data to be merged.

Schema annotations would typically form part of the overall application configuration and would be applied locally, rather than being published to the open web.

## Related

- [`Annotation`](../chapter-4/annotation)
