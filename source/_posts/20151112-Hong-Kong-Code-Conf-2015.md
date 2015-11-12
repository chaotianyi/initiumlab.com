title: Hong Kong Code Conf 2015
author:
  - name: Andy Shu Xin
    url: 'http://shux.in'
description: Summary of the Talks in Hong Kong Code Conf 2015
language: en
tags:
  - lang-English
  - hkcodeconf
date: 2015-11-12 23:41:46
---

[Hong Kong Code Conf 2015](http://hongkong.codeconf.io/) was held on 24 October 2015. I (Andy Shu) participated in most sections and here is my notes.

Death by Bad API Design
-----------------------
By Matthew Rudy Jacobs from Go Go Van

Matthew stresses that for compatiblity reasons, APIs don't die; hence, good API design is important.ce

His solution is to design API first, rather than as an afterthought.

The design workflow is as follows
- Write API docs
- Pull-request API docs
- Implement

He also gave advices:
- Anticipate changes
- Don't add spelling mistakes
- Don't add API depending on the implementation quirks

He mentioned a few pointers:
- <https://apiary.io/blueprint>
- <http://swagger.io/>
- <http://jsonapi.org/>
- <http://www.amazon.com/RESTful-Web-APIs-Leonard-Richardson/dp/1449358063>

The Path to Continuous Delivery
-------------------------------
By Pedro Pimentel

### Core practices

#### BDD

Start with User story
- As an ____
- I want to ____
- So that ____

#### TDD
- Define the API
- Write code
- Write just enough to pass the test
- Read tests to learn about someone else's code

- Assert first
- One assertion per test
- Faking/Stubbing/Mocking

Pair Programming
- Pair rotation (so that any two programmers have chance to cooperate)

Some pointers:
- <http://manifesto.softwarecraftsmanship.org/>
- <https://cucumber.io/>
- Continuous Delivery by Jez Humble
- The Phoenix Project

Scraping
--------

Vincent Lau and Elaine Chan talked about their experiences scraping the web.

Slides are available here:
<https://docs.google.com/presentation/d/1gmDWYHYRcG1u8iR5suNqEw8iBtYxQNG18ssqVhclk3I/edit#slide=id.p>

The slides are noticably better than my notes.

Mentions
- Casandra
- Frontera
- <https://www.evernote.com/shard/s4/sh/74125b92-70d7-497d-8013-68f17f996e22/96be3fb18f2bbc20>

Your Front End Performance Sucks
--------------------------------
By Holger Bartel

Performance is Design
Design is Performance
Design directs performance

The Images - The Big Evil
- ImageOptim

Optimise the Critical Rendering === Get stuff on the screen fast
- Minimise the number of critical resources
- minimise the number of critical bytes
- minitise the critical path

Pay special attention to critical resources, i.e. the blocking resrouces

Performance tools:
- <http://httparchive.org/>
- <http://webpagetest.org>
- <http://tools.pingdom.com/fpt>
- [Google Pagespeed](https://developers.google.com/speed/pagespeed/insights/)
- <http://developer.yahoo.com/yslow>
- <http://perf-tooling.today>

Learning about performance:
- [Perf.rocks](http://perf.rocks)
- [PerfSchool](http://github.com/bevacqua/perfschool)

Decoding the Language of Cereal Box Design with Scikit-Learn
-------------
By Mart van de Ven

The project aims to establish relations between the packages of cereal and their nutrition values. 
The majority of the content here would be repeated in PyCON Hong Kong 2015, with important additions.

The Data Science Process
- Ask
- Get the data
- Explore the data
- Model the data
- Communicate and Visualize

Words of Suuport
----------------
By Donal Ellis, Enterprise Support Engineer with GitHub, talked about support, focusing on writing.

The slides is available here:
<https://github.com/donal/hkcodeconf/blob/master/words_of_support.pdf>

Write Well
- Rewrite at least once
- Don't use big words, technical jargons, cliche, et cetera.
- Read it aloud
- Don't use emoji.
- Don't apologize unless we mean it.
- If English is your second language, write straightforward. Don't overwrite.