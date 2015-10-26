title: React in One Hour
author:
- name: Initium Lab
date: 2015-09-25 17:02:13
description: 'Andy Shu, news engineer with Initium Lab, gave a brief tutorial about ReactJS, the Web UI library from Facebook, in Chinese University of Hong Kong (CUHK) on 18 September 2015. The event was organized by the Open Innovation Lab of CUHK.'
thumbnail: /blog/20150925-react-in-1-hour-cuhk/react1h-thumbnail.png
tags:
- JavaScript
- React
- lang-English
---
Andy Shu, news engineer with Initium Lab, gave a brief tutorial about ReactJS, the Web UI library from Facebook,
in Chinese University of Hong Kong (CUHK) on 18 September 2015. The event was organized by the [Open Innovation Lab](https://www.facebook.com/cuhkoil) of CUHK.

Andy introduced the basics of React and demonstrated making a simple quiz app from the ground up with React.

Here is the video recoding of the tutorial:

<div class='video-container'>
    <iframe id="player" type="text/html" width="640" height="390"
      src="https://youtube.com/embed/_fqf7tGWBvE?html5=1"
      frameborder="0">
    </iframe>
</div>
    

The video is also available on [Youku](http://v.youku.com/v_show/id_XMTM0NDg0Mzg5Mg==.html).

<!-- more -->

Key time points
---------------
00:00 - Introduction to Initium Lab and the Speaker
05:02 - What is React
16:21 - Necessary packages and tools
25:07 - Coding

After the tutorial, a Q&A session was held (not recorded due to technical issues). Afterwards, a few participants stayed for further discussion.

Supporting Materials
--------------------
Please visit [tryreact.initiumlab.com](http://tryreact.initiumlab.com/) for supporting materials used in the tutorial, such as the `quiz.html`, from which you can follow Andy step by step. Intermediate coding samples are also available.

How to pick up JavaScript
-------------------------
When asked about how he learnt JavaScript in a short period of time, Andy recommended the [JavaScript track of Codecademy](https://www.codecademy.com/tracks/javascript) for absolute beginners, _[JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)_ for a deeper look into the language, and _[Professional JavaScript for Web Developers](http://shop.oreilly.com/product/9781118026694.do)_ for more comprehensive understanding. He also said frequent practice was crucial to learning. 

Errata
------
Under JavaScript strict mode, `this` in functions should be `undefined`, not `null`.
One might have the impression that in the source code, elements like `<h1>` are just native HTML elements. That is inaccurate. In fact, they are Virtual DOM elements, implemented by React.