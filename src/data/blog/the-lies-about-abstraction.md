
The Lies About Abstraction
==========================

Below is an excerpt from [Street Coder](http://streetcoder.org), where [Sedat Kapanoglu](https://medium.com/u/cfcbc8090ec?source=post_page-----5d7a85e2c9f7--------------------------------) talks about benefits of layering in software.

> A business layer doesn’t know anything about databases or storage techniques. It calls on the database layer for that. The database layer encapsulates the database functionality in a DB-agnostic fashion. This kind of separation of concerns can make the testability of business logic easier because we can easily plug a mocked implementation of the storage layer into the business layer. **More importantly, that architecture allows us to change a DB behind the scenes without changing a single line of code in the business layer, or in the web layer, for that matter.**

Although the sentiment is nice in theory, I think the reality does not conform to the sentiment. This article is a response to the idea that layering allows for seamlessly changing a layer without any consequences for the rest of the system. I argue that all abstractions come with leakage, meaning that they have **untested/unspecified** characteristics that might surface after such changes.

So, what is a layer?
--------------------

Abstraction is commonplace in software engineering. Layering is a type of abstraction where a software module is concerned with implementing a specific set of functionality for some data type, agreeing on a set of **contracts specifying the preconditions and postconditions of the module.**

Layers are useful constructs that allow for building software, especially as teams and projects get larger. Below is a common architecture depicting 4 layers of a Web Application, taken from Street Coder.

Although one does not need these layers to create a web application, their existence makes software development process more manageable by reducing the mental load of the developers, allowing them to think more locally.

Well, what is a contract?
-------------------------

A contract is the expectations(preconditions) and guarantees (postconditions) of a layer. Contracts can have different levels of formality depending on the language. The most common contract you have seen is **types**. In a statically typed language, the type system proves that the function will receive an input and provide an output of a specific type, as opposed to dynamically typed languages where input to the layer might have any type, and the layer might produce an output of any type. Unlike types, most contracts are far from proven if you are not in a research programming language focused on [formal verification](https://en.wikipedia.org/wiki/Formal_verification#:~:text=Formal%20verification%20of%20software%20programs,systems%2C%20and%20lightweight%20formal%20methods.). I will call such unproven contracts **“soft contracts”** for the rest of this article, as they can be broken unlike the **“hard contracts”** that are proven. Examples of soft contracts include **validation, sanitization, null pointer checks, tests, and beliefs about the inner workings of software** in general.

A typical example of sanitization in a web application is [input sanitization against SQL Injections attacks](https://en.wikipedia.org/wiki/SQL_injection). When writing a web application, we usually ask for inputs from the user. If the input is not properly processed before constructing an SQL query, a malicious user may be able to extract private information from the database. **The belief that the input to the database is sanitized is a soft contract because of 2 reasons.**

Imagine we have a function `sanitize(dangerous_query_string: str) -> SanitizedQuery` that produces a **SanitizedQuery** datatype given a string taken from the user. The first problem is that **we can only believe that SanitizedQuery is actually sanitized**, we cannot actually **know** it. We can **test** it, we can **code review,** we can **pray to God,** but as history of software engineering has shown us, our beliefs are very prone to be false. The second problem is that having such separate types are not feasible in many cases, because doing so leads to almost every single function having its own output type, leading to an unreadable codebase very very fast. This leads to the fact that function signature is usually `sanitize(dangerous_query_string: str) -> str` in practice, which means we lose the information tracking capabilities of the type system.

What happens when a soft contract is invalid? Well, anything might happen. As layers down path will assume that contract is valid, they will naively execute such input, leading to potentially catastrophic results.

Where is the lie here?
----------------------

So far, I talked about layers, and contracts between layers that allow for composing different layers with each other. The composition relies on the expectations of the consuming module and the guarantees of the producer. For example, if the producer guarantees to output sanitized strings, the consumer will not try to sanitize such inputs again, enabling better scaling by providing separation of concerns between different modules.

The problem here is that a soft contract is as good as it is observable. If you cannot test/verify the validity of a contract condition, then you cannot trust that the consumer will correctly handle inputs provided by the producer. Going back to the example at the beginning, your assumption must be that changing **your database layer will only guarantee you correctness on your tested behaviors, and nothing more.**

With behavior such as input-output that is frequently and easily tested, we might actually achieve seamless transfer as we alternate a layer. So, it might be possible to switch your entire DB by keeping the input layer of the database layer intact. **The problem is now you need to think about the unobservables?** **All behaviors of your previous implementation that affects the users is now part of your contract.** Your new implementation may have the exact IO as the old one, but what about performance? Depending on the DB implementation, different query types will have different performance characteristics. Such differences are subtle and hard to catch, especially as the notion of correctness is built on IO for today’s software systems, so we don’t have the adequate tools to understand such **bugs**.

Let’s close up
--------------

The blanket sentence that layering allows for seamless switching of an intermediate layer by keeping its public interface intact is a nice one, but it is false. Public interface only tells us what functions exist, and what their types are. Tests and code review provide extra guarantees, but they are incomplete tools for describing the total contract of a function, which leads to the fact that it is very hard to judge the results of a switch. Thank you for reading up to here!
