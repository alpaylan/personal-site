
Hurdles of Designing A Layout Model
===================================

For the past 2 weeks, I have been working on designing my own layout model for the [document generator I’ve been working on](http://github.com/alpaylan/cvdl). I have successfully failed to come up with a sound modal that’s expressive enough for all my use cases. I decided to document my pains for (1) clearing my vision, (2) maybe helping out anyone who ever tries to go in similar routes, (3) finding people to help me design better as the best way to get answers to your questions on the internet is to provide wrong answers. So, let’s talk about some really wrong layout models.

What is the problem I am trying to solve?
=========================================

Before going into the details of the design, it is important to talk about what I am trying to solve here. What is the document this layout model is supposed to represent?

I am working on [CVDL(CV Description Language),](http://github.com/alpaylan/cvdl) which is a misleading name at this point, because the project is really about designing an extensible structured layout generator. The layout generator mainly depends on **data** and **layout schemas.**

Data Schema
-----------

A data schema defines a set of fields and their types. Below, you see an example data schema for a work experience section of a CV.

```json
{
    "wtf": "is",
    "happening": []
}
```

```
{  
    "schema-name": "Work-Experience",  
    "header-schema": \[  
        { "name": "Title", "type": "String" }  
    \],  
    "item-schema": \[  
        { "name": "Company", "type": "String" },  
        { "name": "Position", "type": "String" },  
        { "name": "Skills", "type": "List<String>" },  
        { "name": "Date-Started", "type": "Date" },  
        { "name": "Date-Finished", "type": "Date | String" },  
        { "name": "Location", "type": "String" },  
        { "name": "Text", "type": "MarkdownString" }  
    \]  
},
```

Layout Schema
-------------

A layout schema defines a mapping of the variables in the data schema into the document. Below, you can see both the visual representation and the JSON version of a layout schema for a work experience section.

An Item Layout Schema for “Work-Experience” section
```
\[  
    {  
        "schema-name": "Work-Experience",  
        "header-layout-schema": {  
            "Ref": {  
                "item": "Title",  
                "width": 70  
            }  
        },  
        "item-layout-schema": {  
            "Stack": {  
                "elements": \[  
                    {  
                        "FrozenRow": {  
                            "elements": \[  
                                {  
                                    "Ref": {  
                                        "item": "Company"  
                                    }  
                                },  
                                {  
                                    "FrozenRow": {  
                                        "elements": \[  
                                            {  
                                                "Ref": {  
                                                    "item": "Date-Started"  
                                                }  
                                            },  
                                            {  
                                                "Text": {  
                                                    "item": "-"  
                                                }  
                                            },  
                                            {  
                                                "Ref": {  
                                                    "item": "Date-Finished"  
                                                }  
                                            }  
                                        \],  
                                        "width": 30  
                                    }  
                                }  
                            \]  
                        }  
                    },  
                    {  
                        "Ref": {  
                            "item": "Position",  
                            "width": 70  
                        }  
                    },  
                    {  
                        "Ref": {  
                            "item": "Text",  
                            "width": 70  
                        }  
                    },  
                    {  
                        "Ref": {  
                            "item": "Skills",  
                            "width": 70  
                        }  
                    }  
                \]  
            }  
        }  
    }  
\]
```

What is the problem I am actually dealing with?
===============================================

So, if I have both of these schemas working with each other, what’s the problem? **What’s the hurdle?**

The hurdle is the fact that I will not always receive such well constructed layouts.

I need sane default behaviors for people to use this system. What should I do if I receive a specification as above? There are various options.

1.  **Just throw an error:** This is a bad idea in general. You don’t see your Microsoft Word throwing errors when you try to do monstrous stuff, it finds a way to squeeze it in.
2.  **Wrap using some predefines strategy:** When you start thinking about potential solutions, you can come up with two main ones. The red strategy on the left is simpler. It implements wrapping on the outmost layer by pushing any item that doesn’t fit to the next line. You could also have some strategy like the blue on the right though, where you check assume boxes have their own columns and they continue to grow there.

3\. **Allow User to Configure:** This requires me to define ways of giving user control over the row wrapping they want to apply.

In some sense, what I end up doing is a combination of all three. There are always some implicit logic that defines some part of the strategies, but I also try to provide a set of high level constructs for the strategies. The main two I have right now are `FrozenRow` and `FlexRow` , where `FrozenRow` requires elements two stay in the same line and fails if it cannot sustain this requirements; and `FlexRow` continues to put elements in the next line.

What did it take to come to this solution?
==========================================

The first design I had did not account for overflows.I quickly realized that wouldn’t end well for me.

When I started thinking about possible solutions, I realized three possible solutions.

The first(red) solution tries to equally distribute each box into the next line. The second(blue) solution tries to equalize the width of each box on the first line. The third(green) solution requires me to throw boxes into newlines until the remaining ones with. I quickly decided to go with option 3 as others did not compose/cascade well and I wasn’t sure how useful they were out of some contrived examples.

**The second point I had trouble was is the flexible width components.** If a component did not specify its width, how do you decide it? The solution here came from the realization that you can always decide the width of a component by using its parent and children. There is no such thing as an empty stack or row, they must eventually reach to some text element. That text element defines their minimum width. Also, the root element has the width of the document that defines the maximum width. By bounding each element from both sides and wrapping if minimum width exceeds maximum width, we can calculate exact sizes for all elements.

Conclusion
==========

Writing this article actually made me realize some problems I thought were problems are not, so it’s been pretty helpful for me :D I really hope it was also a fun read to some of you out there.
