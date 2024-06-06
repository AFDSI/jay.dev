---
$title@: Why A Pattern Catalog?
$order: 2
leveled: false
---

Design patterns have a number of benefits:

* Patterns have a well-defined structure that encourages focus on the essential knowledge being communicated. This makes them accessible and easy to consume.
* Patterns encourage discussion of related and complementary approaches. Design decisions are rarely clear cut. A focus on specifics is useful for understanding trade-offs
* Patterns provide a name for a particular design decision or solution. Collectively they build a lexicon that encourages clearer communication between practitioners

The authors have successfully applied design patterns in their software development activities. The approach seemed well suited to teasing out some of the experiences and lessons they have learnt through working with Semantic Web technologies; the rigor of a pattern approach also helped the authoring.

## What's Not Covered?

This book isn't a primer on RDF or OWL. There are already plenty of good sources of introductory material on the technologies discussed here. The book makes the assumptions that you have some basic understanding of RDF, RDF Schema and possibly OWL. The examples are given in Turtle syntax, so you should be familiar with that syntax too.

If you're looking for a deeper introduction to modeling with RDF Schema and OWL then you should read [`Semantic Web for the Working Ontologist`](http://workingontologist.org/) It's a great book that will give you a thorough understanding of how to apply the technologies. We're hoping that this work is in some sense a companion piece.

## How the Catalog Is Organized

The catalog has been broken down into a number of separate chapters. Each chapter collects together patterns that have a common theme.

- Chapter 2, Identifier Patterns
- Chapter 3, Modeling Patterns
- Chapter 4, Publishing Patterns
- Chapter 5, Data Management Patterns
- Chapter 6, Application Patterns

The catalog also includes a few patterns that arguably aren't patterns at all, they're similar features of the RDF model; [`Typed Literal`](../chapter-3/typed-literal) for example. We decided to include these for the sake of helping to document best practices. There are plenty of examples and material on some of these basic features but they're often overlooked by both experienced and new practitioners. So we've opted to document these as patterns to help draw attention to them.

## Example(s)

[sourcecode:html]
@prefix ex: <http://www.example.org/>
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

[/sourcecode]

In `chapter 5`, a number of the examples use the [`TRiG (Wikipedia)`](https://en.wikipedia.org/wiki/TriG_(syntax)) syntax, which is an extension of Turtle that supports Named Graphs.
