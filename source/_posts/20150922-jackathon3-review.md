title: "Jackathon #3 -- Read a data science book in 8 hours"
date: 2015-09-22 11:57:13
author: Initium Lab
language: en
tags:
- Jackathon
- Data-Science
- lang-English
---

<video controls poster='/blog/20150922-jackathon3-review/jackathon3-timelapse-poster.png'>
  <source src='/blog/20150922-jackathon3-review/jackathon3-timelapse.mp4' type='video/mp4' />
  <source src='/blog/20150922-jackathon3-review/jackathon3-timelapse.webm' type='video/webm' />
  Sorry, you browser does not support HTML5 video.
</video>

The video is also available on [YouTube](https://youtu.be/zFeSh2W1_C8) and [Youku](http://v.youku.com/v_show/id_XMTM0MzM1MjEwMA==.html?from=y1.7-2).

## What did we do?

Jackathon is short for “Journalism-Hackathon”. At Initium Lab, we aim to push limits of Journalism with Technology. We hold regular Jackathons to advance our knowledge and skills in using new technology for obtaining data, analysing information, and reporting.

This week, the goal for each participant is to read one the the [60 Data Science books collected by KDnuggets](http://www.kdnuggets.com/2015/09/free-data-science-books.html) within 8 hours. 
Participants could pick one or two books to finish reading in 8 hours and present findings / insights to the others.

<!-- more -->

## What are the books?

![A network of the Data Science books on the recommendation list. A cloud of inter-connected dots](/blog/20150922-jackathon3-review/data-science-books-graph.png)

Fig: Network of 60 books. Blue -- book; Red -- author; Yellow -- key term

We have organised the book list into a structured form and [visualized the network on kumu.io](https://kumu.io/hupili/60-free-data-science-book#60-free-data-science-book). Books are associated with authors and terms. Multiple books may share an author or key terms. In this way, books are connected to each other in one way or the other. With graph visualization, we find several clusters:

* Hard-core machine learning including deep academic results; 
* Practitioner’s guide including several soft introductory books; and
* Those in-between.

Every participant of Jackathon #3 finds a suitable book for themselves. For a complete list, you can download [the CSV file](CSV of 60+ data science books: https://docs.google.com/spreadsheets/d/1U28nb1z9PsXNzNe_YtfPYYUdhH7_YfjEz6L0Z_wpxzM/edit?usp=sharing).
To see how we produces this network visualisation, checkout [this repo](https://github.com/hupili/60-data-science-book-visualisation).

## Introduction to Data Science

Kate, who was from a non-technical background, picked _Introduction to Data Science_. The book is useful to equip one with basic Data Science knowledge. The main take-away for Kate was a better understanding of a Data Scientist’s workflow. It turns out that a Data Scientist is not only responsible for “data analysis” but also works on various positions in the whole pipeline including problem identification, data collection, and data visualisation, etc. It is worth noting that this book uses R (a widely used programming language in the Statistics community) to explain Data Science.
If you intend to learn R, this book may be a good starting point. Otherwise, you can pick a book using another language (say Python), or a book that is not language dependent.

## The Elements of Data Analytic Style

Belinda finds the book _The Elements of Data Analytic Style_ also suitable for beginners. Chapter 3 (on tidying data), are good readings for a Data Scientist’s assistants, while Chapter 9 (on written analysis), teaches useful soft skills. One effective way to read the book is to scan the Table-Of-Content. The ideas are mostly well communicated via section headers. One doesn’t have to read the whole book for the key ideas.

## Think Bayes: Bayesian Statistics Made Simple

From what Carlson summarises, this book is a practitioner’s guide to statistics. The book deprives lengthy and boring mathematical derivations from a usual first book in statistics and shows you examples/ codes directly. The examples picked in this book is counter-intuitive but demonstrates the power of probability/ statistics knowledge very well. Some well known probability “paradox” includes “Monte Hall problem”, “Locomotive problem” and “Price is Right problem”. The book is case driven. A recommended way of reading is to combine thorough introduction from Wikipedia and code samples from this book.

## Think Stats: Exploratory Data Analysis in Python

Frank went through _Think Stats: Exploratory Data Analysis in Python_, written by Allen B. Downey, who also wrote _Think Bayes_. “If you have never studied statistics, I think this book is a good place to start,” the author said, “And if you have taken a traditional statistics class, I hope this book will help repair the damage.”
This book introduces statistical analysis concepts along with Python implementations, including data importing and cleaning, single and multivariable explorations, pair-wise explorations, estimation, and hypothesis testing.
If you want to apply your Python skill in data analysis, this book is a practical handbook for you with no redundant words.

## Introduction to D3

Andy skimmed two books, _D3 Tips and Tricks_ and _Interactive Data Visualization for the Web_, as well as the original paper that launched D3. D3 stands for Data-Driven Documents, which is a popular “language” (more precisely a Javascript library) for modern data visualisation in the browser. Andy recommends one start with the paper _[D3: Data Driven Documents](http://vis.stanford.edu/papers/d3),_  written by the D3 creator. The paper explains the design rationales behind D3 very well.

As for the two books, _[Interactive Data Visualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345/index.html) _ is recommended for beginners because it includes elementary knowledges about HTML all the way to Javascript with a step-by-step guide through the basics of D3. In comparison, _[D3 Tips and Tricks](https://leanpub.com/D3-Tips-and-Tricks),_  more akin to a reference book, is recommended for more experienced users.

As a practice, Andy took two hours to make an incomplete imitation of the default visualization of GapMinder (http://www.gapminder.org) with D3, which illustrated the relationship between wealth and health since 1800. The source code is hosted at <https://github.com/andyshuxin/d3play>.

## Natural Language Processing with Python

Ronald have years of experience with image processing and machine learning. He chooses the book _Natural Language Processing with Python_ in order to get some basic knowledge of Natural Language Processing, which may be useful in his recent projects. The book covers NLP principles and practices by showing examples with a Python library called `nltk`. `nlkt` is regarded as the defacto standard of NLP in Python, from triping HTML to tokenizing/ tagging sentences. It supports 50+ languages including Chinese. This book is a good fit if you want to deal with unstructured texts.

## Social Media Mining: An Introduction

This book is compiled from a series of lecture notes, which makes it self-contained. According to Tiffany, “Reading this book is like finishing a whole semester’s course in one day right before final exam”. Before diving into social media mining, the book paves the way by introducing fundamentals of graph theory. There are several widely discussed problems related with graphs and social networks.

* Network measures. One important concept called “centrality” is used to measure the importance of a node in a network. There are many different metrics that characterise different aspects of importance in a network.
* Network models. More precisely speaking, those are called “network generation models”. Say, whether a new node in the network connects to a uniformly random node or picks the node with higher degree? Graphs generated by different models exhibit different characteristics.
* Community. Community is group of closely knitted nodes. Discovering community leads to many applications. One example is the book network plotted at the beginning of this blog post. You can easily identify similar books in this way.
* Information diffusion. In advertisement scheduling, one can find more effective seed users if the diffusion process is known. There are many models to characterize information diffusion: does the crowd exhibit a herd behaviour? does the adoption probability depend on ratio of existing users (innovation) or not (epidemics)?.. 
* Influence and homophily. This is the graph theoretic characterisation of the “chicken-and-egg” common knowledge: friends become similar; similar people become friends.

## Real-Time Big Data Analytics: Emerging Architecture

Another book read by Belinda is _Real-Time Big Data Analytics: Emerging Architecture_. This book is more like a guide for executives. It discusses why we need real-time analysis, the challenges, current tool chain and proposed one solution stack. The key objective for real-time analysis is to combine batch and streaming processing. An overview of the proposed architecture reveals four layers. The data layer stores raw data, in heterogeneous or even unstructured format. The analytics layer addresses data buffering and environment (development/ production) isolation issues. The integration layer contains a rule engine and other services that connect data scientists with end users. The decision layer involve end users and provide friendly UI.

## References and further readings

- KDnuggets, “60+ Free Books on Big Data, Data Science, Data Mining, Machine Learning, Python, R, and more”, <http://www.kdnuggets.com/2015/09/free-data-science-books.html>
- O'Reilly Atlas Reader, <http://chimera.labs.oreilly.com/books>
