---
$title@: Label Everything
$order: 4
leveled: false
---

*How can we ensure that every resource has a basic human-readable name?*

## Context

A dataset may have a number of different entities, some of which are simple, e.g. people or organizations, whereas others are more conceptual or complex, e.g. an observation made at a particular point in time, under specific conditions. It may not always be clear to a developer, or a user exploring a graph in a browser, what a particular resource represents.

## Solution

Ensure that every resource in a dataset has an `rdfs:label` property.

## Example(s)

[sourcecode:html]
ex:Book
  rdfs:label "War and Peace".

ex:WeatherObservation
  rdfs:label "Rainfall measurement from Weather Station 1 recorded by Bob on 17th August 2021";
  ex:rainfall 50;
  ex:date "2021-08-17"  xsd:date
  ex:location ex:WeatherStation1;
  ex:experimenter ex:Bob.
[/sourcecode]

## Discussion

The `rdfs:label` property is a useful generic property for labeling any type of resource. By using this generic property to label any resource we can ensure that applications can easily discover a useful default label for a specific resource using a well-known property. This is particularly useful for supporting browsing of a dataset, as a browser can look for a default label. Developers can also use the label to assist in debugging queries or exploring a dataset.

Client applications may not always wish to use a provided label instead preferring to construct them based on other criteria. The

In some cases both a `rdfs:label` and a `skos:prefLabel` (or other specific labeling property such as `dcterms:title`) might be provided for the same resource. The content of the labels may differ reflecting the slightly different semantics of each property, e.g the `rdfs:label` might be longer or more descriptive than a shorter `skos:prefLabel`. If both label properties are provided with the same content, then this is an example of the

The importance of applying labels to Linked Data, as well as evidence for the poor adoption of this practice, is given in a paper called "Labels in the Web of Data" by Basil Ell, Denny Vrandečić, and Elena Simperl.

## Related

- [`Preferred Label`](../chapter-3/preferred-label)

## Further Reading

- [`Labels in the Web of Data (Paper)`](<#>)
- [`Labels in the Web of Data (Video Lecture + Slides)`](<#>)
