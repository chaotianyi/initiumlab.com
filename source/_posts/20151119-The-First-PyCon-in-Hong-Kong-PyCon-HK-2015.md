title: The First PyCon in Hong Kong - PyCon HK 2015
author:
  - name: Initium Lab
    url: 'http://initiumlab.com'
description: On 7 Nov 2015 and 8 Nov 2015, PyCon (Python Conference) was held at Hong Kong Cyberport. It is the largest annual gathering for the Pythoners community. Python is one our most commonly used languages at Initium Lab so we definitely did not miss the chance. Two Initium Lab members, Pili Hu and Andy Xin, gave talks about scraping on the conference. Following are the quick and short notes we took away from PyConHK 2015. 
thumbnail: put a URL here if you need customized thumbnail; remove this property if you do not
language: en
tags:
  - Python
  - lang-English
date: 2015-11-19 12:08:48
---

On 7 Nov 2015 and 8 Nov 2015, PyCon (Python Conference) was held at Hong Kong Cyberport. It is the largest annual gathering for the Pythoners community. Python is one our most commonly used languages at Initium Lab so we definitely did not miss the chance. Two Initium Lab members, Pili Hu and Andy Xin, gave talks about scraping on the conference. Following are the quick and short notes we took away from PyConHK 2015. 


![MOU PyConHK. Photo Credit: PyConHK Facebook Group](/blog/20151119-The-First-PyCon-in-Hong-Kong-PyCon-HK-2015/pycon-hk-2015.jpg) 

(Photo Credit: [PyConHK Facebook Group](https://www.facebook.com/pyconhk/))

<!-- more -->

## Python and PyCon

For those who do not know Python, it is a programming language that let you work quickly and efficiently. However, PyCon is not only about Python, it is more about the open ecosystem and its supportive community. Therefore, this conference is dedicated to provide enjoyable experience to almost everyone. 

## Topics included 

Because diversity is one of PyCon's enshrined spirits, a broad range of topics were covered by speakers from different fields including search engine, text mining, data science techniques, web development, financial technology, alternative language, just to name a few. For a full list of topics presented on PyCon, you can refer to the conference's official website: [http://2015.pycon.hk/schedule/](http://2015.pycon.hk/schedule/)

Following are some of selected topics that we would like to share with the community.

### Elasticsearch talks and workshop

**Speaker**: Honza Král from Elastic Co.

Elastic Co. is the one of the conference's Gold Sponsors and its speaker was very contributory by giving two talks and one workshop.

**Explore your data with Elasticsearch**
The first topic given by Mr. Honza Král is 'Explore your data with Elasticsearch'. We can outline it into the following parts.
> - He explained Elasticsearch as a document based distributed search engine.
> - Full-text search means you can search unstructured text in or across field. It also allows fuzzy search. 
> - Under the hood, the principle is bible concordance and inverted index. For example, you can think it as an index at the back of the book which tells us which word appears at which pages.
> - When building a index, text are normally split into words. Some words will be chopped to enable fuzzy search. e.g. `encourage` can be chopped into `encourag`, therefore, when you search `encouraging`, `encourage` and `encouragement` can still be included in search result.
> - Merging sorted lists enable distributability and flexibility.
> - Aggregations: count, sum, avg, min, max, etc
> - Most languages are supported. 

**Use all your Logs!**
The second topic is a demonstration of how to utilise logs generated from customer transactions or your servers. For example, you may probably setup a website for people to visit. You may wonder what are those people looking at, or what are they doing there. A simple way to answer those questions is to use `grep` to check your log files. However, this way could fall apart quickly because - as the size of logs growing - you will end up with multiple logs on multiple machines. Of course it is not possible for you to check each individual record. Hence, It is better to have a overview, analysis and visualisation. 

Besides, `grep` have other problems. A typical scenario is that you may want to investigation what happened at a particular time. Unfortunately, different software may generate logs with different time format. This stops you from checking correlated events.  So it is ideal have a central storage for all your logs. You can also enrich the data there. Take IP address for example, those address can be converted into hostname and locations. 

Mr. Král later recommended the follow steps to use ELK for your logs: collect, parse, enrich, store, search, aggregate and visualise. ELK is a collection of open source tools, namely, elasticsearch, logstash and kibana. 
> - Logstash is mainly responsible for data injection pipeline. It has all the necessary utilities to collect, parse and enrich data.
> - Elasticsearch have nice features to store, aggregate and search data.
> - Kibana, the most impressive and technologically the most simple part, which is for visualisation. It communicate with elasticsearch and provide you with gorgeous charts and pictures. 

**Workshop: Don't be afraid to search**
The workshop was to write real Python code using elasticsearch_dsl package to interact with Elasticsearch. Before the workshop, he created a simple website using Django and data from StackExchange dumps ([https://archive.org/details/stackexchange](https://archive.org/details/stackexchange)) 

The task of the workshop:
> Add a solid search implementation to the website.

During the workshop, Mr. Král covered basic steps like syncing the models to a search engine and setting up search views, as well as some more advanced functionality such as:
> - faceted navigation.
> - Tolerance for spelling mistake.
> - Recommandation according to relevancy and popularity.
> - Search with synonyms.    

You can checkout the code of the workshop from - [https://github.com/HonzaKral/es-django-example](https://github.com/HonzaKral/es-django-example)

### What exactly is 'plastics' on Hong Kong Golden Forum? A text mining analysis
**Speaker**: Chung-hong Chan (電鋸)

Mr. Chan is a Phd student from Journalism and Media Studies Centre, The University of Hong Kong. With a combination of different tools in python and perl, he applied a classic topic model analysis to the text in Golden Forum. 

The tools and method he used:
> - Selenium - It is a suite of tools to automate web browsers across many platforms. Selenium was used because Golden Forum did not allow scraping.
> - GNU Parallel - A command line drive utility for Unix-like operating systems to execute scripts in parallel. Mr. Chan used this to run multiple selenium instances.
> - Jieba - Tokenization of forum text.
> - 'Big data is small data'. He said his laptop is old, therefore, he only extract data he thought useful to his analysis. Combination of features to get better features.
> - LDA - The full name is Latent Dirichlet allocation, a model for topic discovery.
> - Small tools that do one thing better is superior than one tool that do everything poorly. 

### Monitoring the performance of Python web applications 
**Speaker**: Graham Dumpleton from Red Hat

He is the author of `mod_wsgi`. In this talk, he told us how the performance of traditional Python web application can be measured in detail. 

The common method in measuring `WSGI` application's response time is to use `print` statements. This is okay for when playing around in a development environment to understand how a WSGI server works, but it is totally inadequate when wanting to monitor traffic against a real website. According to Graham, a better approach would be to implement monitoring in the WSGI server level using event notifications. In this way, the specific code dealing with requests in the WSGI server can simply be enhanced to track information in any existing context where the information is already available.

Various monitoring capabilities have been implemented for `mod_wsgi`, including at the Apache server level, worker/daemon process level. But unfortunately, this no timeline as to when these capabilities will be made available in any official release of `mod_wsgi`. 

For further details, you can read Graham Dumpleton's blog posts at:
- [http://blog.dscpl.com.au/2015/05/performance-monitoring-of-real-wsgi.html](http://blog.dscpl.com.au/2015/05/performance-monitoring-of-real-wsgi.html)
- [http://blog.dscpl.com.au/2015/06/implementing-request-monitoring-within.html](http://blog.dscpl.com.au/2015/06/implementing-request-monitoring-within.html)

### Using Python for data mining projects
**Speaker**: Chris Choy 

Mr. Choy is profession in statistics and data mining. He got his Phd in high dimensional statistic in Oxford and is now a Senior Computational Scientist at ClusterTech. 

In this talk, he demonstrated a simple scenario to use a combination of Python packages, e.g. Jupyter notebook, SQLAlchemy, Pandas, statsmodel, to rapidly workout data mining solutions on flight data. The problem he try to solve is: 
> During all 7 days in a week, in which day is the flights more incline to be delayed. 

How he used those tools:
> - **SQLAlchemy** - Easily reflected database scheme.
> - **Pandas** - Convert sql data into data frame which is useful in representing 2-dimensional labeled data structure.
> - **Statsmodel** - Applied `OLS` (ordinary least squares) regession model to dataframes in one line code.
> - **Patsy** - Design matrix
> - **Matplotlib** - Plot a chart of the regression result.

All the code can be found on his github repository:
[https://github.com/christlc/pycon2015hk](https://github.com/christlc/pycon2015hk)

### My personal take
**Speaker**: Austin Imperial (Niknok), 13 years old

Yea, it is not a typo, a 13-year-old coding machine did spoke in this Conference. He is a Grade 8 student from the Philippines. He studied Python, PHP, Ruby, Javascript, C, C++, SQL, HTML and CSS from MOOC (Massive Open Online Course) on him own.

Two courses that he studied:
> **Computer Science, Harvard University**
> Introduction to the intellectual enterprises of computer science and the art of programming. This course teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, PHP, and JavaScript plus SQL, CSS, and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming. Designed for concentrators and non-concentrators alike, with or without prior programming experience. https://cs50.harvard.edu/
> 
> **An Introduction to Interactive Programming in Python, Rice University**
> This two-part course is designed to help students with very little or no computing background learn the basics of building simple interactive applications. The language of choice, Python, is an easy-to learn, high-level computer language that is used in many of the computational courses offered on Coursera. 

Austin Imperial classified codes into three types: 
> - **Type 1** - Code that is useful to both the society and self.
> - **Type 2** - Code that is useless to the the society, but useful to self because it still enhance the programmer's coding skill.
> - **Type 3** -  Code that neither the society nor self would benefit from and is total waste of time and effort, but still entertaining at the very least especially when you are starting to explore the basics (e.g. print "hello world") of what you have learned. 

He said a Python beginner should focus on doing a project based on 1st and 2nd type of code but try NOT to stay away from 3rd type of code because it may still give you terrific idea of not doing IT the second time around.

Moreover, Austin do have insightful opinions in creating personal projects. He said in order to make a personal project, you need to have the following:
> - **Idea** - come from boredom, another project, techniques that you have learned, daydream, etc
> - **Define the Problem** - could be from daily life, e.g. family members blood pressure records.
> - **Find a Solution** - common sense, consult others, think like a machine, simplifying another existing problem, apply past solutions, sleep on the problem and set aside temporarily.
> - **Inspiration** - needs of your life, other people's projects; 
>  
>  He summarised that personal projects depends on different variables, input of ideas, your interest, even your mood has a great impact on your future code/project. 

His github: [https://github.com/akaNiknok](https://github.com/akaNiknok) 

### Introduction to aiohttp -- asyncio-based web framework
**Speaker**: Andrew Svetlov

This is talk given by the author of the `aiohttp` framework. As Austin Imperial - the speaker of 'My Personal Take' - have mentioned,  inspiration can be a need to solve a problem in your life. `aiohttp` is to solve the common problem that faced by most programmers who write asynchronous web application. If you have experience in Node.js,  it is quite common to encounter non-elegant code with infinite callbacks. The same type of problem also appears in Python. Programmer need to adopt asynchronous programming when a lot of I/O is involved. This is because I/O is slow and the CPU is not needed to handle most of it. So Python's creator mentioned, in PyCon 2013, that he was working on a 'standard framework' to standardize the event loop. The framework is `asyncio` and enable us to run asynchronous computations without callbacks.

Mr Svetlov said that `aiohttp` is a HTTP client/server built on top of asyncio. It allows you to write programmer friendly code like well-known linear one but utilizes the power of nonblocking sockets and supports websockets natively. He divided his talk into several part.
> - Basic introduction of coroutine and future.
> - Debugging is much more easier with explicit loop and `PYTHONASYNCIODEBUG=1`.
> - How to write a asynchronous http client.
> - Write a trivial http server.
> - Use static routing, web-sockets, middlewares and debugtoolbar
> - Make asynchronous request use `aiohttp`'s client library.
> - Flow control in transport / protocol level and streams level.
> - event loop basics.
> - `aiopg`: accessing postgresql database from the `asyncio`.
> - comparison with other asynchronous libraries such twists and tornado.

He also noted that async code forces all your code to be async. That means you should not use sync call which may tale a while for execution.

Please refer to his github for more information: [https://github.com/asvetlov](https://github.com/asvetlov)

Docs: [http://aiohttp.readthedocs.org](http://aiohttp.readthedocs.org)

Source code: [https://github.com/KeepSafe/aiohttp](https://github.com/KeepSafe/aiohttp)

He is happy to accept pull requests.

### Better type at Python
**Speaker**:  Rick Mak from Oursky 

Function annotation is Python 3.5's new feature. It is useful for static type analysis, e.g. type hints in a IDE, discover bugs earlier. 

Here is a simple function whose argument and return type are declared in the annotations:

```python
def greeting(name: str) -> str:
    return 'Hello ' + name
```

Mr Mak is an advocate for using type annotations. Although this feature do not help your code gain performance boost, it provides the following benefits:
> **Type Hints**
> - Type checkers can easily detect that you maybe passing an object with a type that is not expected.  
> - Other person who read your code will know what is expected and how to use it without getting a `TypeError`
> - IDE will suggest appropriate methods when know what type your object is.
> 
> **Static Type Checkers**
> - Find bugs sooner.
> - Help the maintenance of large project less painful. The bigger your application becomes the more control and predictability you require.
> - Large teams are already running static analysis.

Follow Mr. Mak at: [https://twitter.com/rickmak](https://twitter.com/rickmak)

### Workshop: Let's break some stupid CAPTCHAs!
**Speaker**: Chung-hong Chan （電鋸）

Chung-hong Chan demonstrated how to crack stupid CAPTCHAS. Python libraries such as Numpy, Matplotlib, and OpenCV were introduced. The most amazing thing we could learn from this workshop was that so many CAPTCHAS on Hong Kong websites are REALLY weak, for example, some even expose raw answers in HTML page source.
Source code Chung-hong Chan demonstrated could be found on his GitHub repo for PyCon: [https://github.com/chainsawriot/pycon_vm](https://github.com/chainsawriot/pycon_vm).

### Financial technology
**Speaker**: Joseph Wang (joequant) from Bitquant Research Laboratories

Dr. Joseph Wang is chief scientist of Bitquant Research Laboratories, a small Hong Kong-based financial technology company.

According to Dr. Wang, Python is intensively used in investment banking. What’s more, large parts of the Python infrastructure were funded by banks. However, why it isn’t well-known in the Python community? Because banks have no reason to share their algorithm to competitors, and they don’t want regulators and patent trolls knowing what they are doing as well.
Dr. Wang was currently working on his trading bot project. “Trading is 90% psychology,“ Dr. Wang said, “Go to a casino, see what people do, and don’t do that.”
Dr. Wang encouraged audience to “steal my software please!!!” You must be interested to get something on his GitHub at [https://github.com/joequant/bitquant](https://github.com/joequant/bitquant).

### Decoding the language of cereal box Design with Scikit-Learn
**Speaker**: Mart van de Ven (tijptjik)

The talk is about find correlation between the cartoon brands on the cereal boxes and what's inside the cereal boxes. Mart uses a set of data science techniques to explore how marketing departments use colour, layout and character design to communicate what you can expect from a cereal. He in this talk highlighted the use of the PyData stack to generate features from images, cluster cereal types and predict their nutritional values.

Steps he used to define and solve data science problems: 
> - Ask an interesting question, e.g. what is the correlation between the cartoon images and the cereals
> - Get the data, namely, the images of the cartoon on those cereal boxes.
> - Explore the data. Try to check what can be extract by Human and what can be recognised by computer.
> - Model the data. According to the data explored, model your data. For this case, color, brands, etc.
> - Finally communicate and visualise the result. 

Mart's work train. 
- Preparing the data. He used cv2 library to get feature vectors from raw images.

```python
import cv2
cv2.imread('cerealbox.png')
```

- Then clean the feature vectors. e.g. get rid of white colour.

```python
cv2.threshold(img...)
```

- Read values, including dimensions, grayscale histogram, flattened color histogram, resize the picture, RGB to HSV, etc
- Machine learning: Hair features, Haar cascade, Gaze recognition...

If you want to learn more about this talk, you can contact him by email m@droste.hk

### Scraping the web 


Scraping is an important part of data journalism and we perform scraping regularly at Initium Lab.
Two members from Initium Lab shared their experience on scraping at PyConHK.

**Speaker**:

* Andy Shu, News Engineer @ Initium Lab -- Scraping in 5 min
* Pili Hu, Data Scientist @ Initium Lab -- Scrape more with Less codes 

In the lightning talk, Andy introduced his experience on scraping in 5 minutes.
Apparently, one can not learn scraping from zero to one just in 5 minutes, especially starting with non-technical background. Nevertheless, Andy's talk helps one build the concept of scraping and understand common caveats in the process. Interested readers can refer to the slides: [http://slides.com/andyshuxin/s#/](http://slides.com/andyshuxin/s#/).

Pili's talk is devoted to quick scraping with the help of some utility tools and Python libraries.
When doing data journalism, one would iterate between the steps for multiple rounds, from scraping to analysis, to visualisation, and all the way to story-telling. You never want to spend a large chunk of time building a rigorous scraper and ends up in an unpublishable report because of lack of insights, lack of story, lack of evidence from data, ... At the very early proof-of-concept stage, quick scraping skills help one to validate the idea with least cost and that is the focus of the talk. The tools shared in this talk include:

* Human friendly HTTP interface:
   * CLI: `HTTPie`
   * Python REPL: `requests`
* Scale-out:
   * CLI:
      * Single machine: `xargs -P`
      * Multiple machine: `pssh`
   * Python REPL:
      * Better to wrap as individual scripts and do multi process
* Manual parse:
   * CLI: `pQuery`
   * Python REPL:
      * `pyQuery` for FE people
      * `pandas` useful for tabulared data
* Automatic parse, in Python REPL:
   * `PyReadability`: Parse the main body of a page
   * `scraply`: Learn patterns from your labelling
   
Interested readers can refer to the [IPython Notebook of the talk](https://github.com/hupili/workshop-easy-scraping/blob/master/Scrape%20More%20with%20Less%20Codes.ipynb)


### Haxe, a statically-typed language that compiles to Python
**Speaker**: Andy Li

We have mentioned that PyCon is not only for Python, it is a gathering welcomes diversity. So here comes a talk about another programming languages, Haxe. Haxe is an open source high-level multi-platform programming language and compiler that can produce application and source code for 9 platforms. Here is a list of compiler targets:
> - Flash - into byte code
> - Neko - into byte code
> - Javascript - into source code
> - ActionScript 3 - into source code
> - PHP - into source code
> - C++ - into source code
> - Java - into source code
> - C# - into source code
> - Python - into source code

Haxe' features: 
> - Javascript / Java style syntax
> - static typing with type inference
> - Object-Oriented programming paradigm 
> - Functional programming paradigm: list comprehension, option, pattern matching.

Haxe advantages:
> - No need to use new language when trying new things.
> - Code reuse of business logic part.
> - Test all languages with your own app.
> - Static typing catches errors earlier.
> - Type annotation is one kind of documentation.
> - Static typing leads to better code generation and even better performance.

Haxe to Python sample:

**Haxe code**
```
class Untyped {
static function main(): Void {
    var l = untyped list("abc")
        trace(l); // ['a', 'b', 'c']
    }
}
```

**Python code** generated

```
class Untyped:
    __slots__ = ()
    @staticmethod
    def main():
        l = list("abc")
        print(str(l))
```

Future work in relation to Python target:
> - Output type annotations
> - Release Haxe libs to pypi
> - Re-implement python api in Haxe

Find Andy's slides HERE: [http://haxe.io/@andy_li/PyCon%20HK%202015.pdf](http://haxe.io/@andy_li/PyCon%20HK%202015.pdf)

### The changing landscape of Python web application deployment 
**Speaker**: Graham Dumpleton 

Again, this is another talk from Graham, the author of `mod_wsgi`. He is now working for the Red Hat's OpenShift team, a PaaS (Platform-as-a-Server) solution that allows developers to quickly develop, host and scale applications in cloud environment. He said the reason that he become part of the OpenShift team is because Red Hat announced the intention to bring Docker and Kubernetes together and overhaul OpenShift to be fully based around these technologies. 

Subsequently, Graham made a comparison between Containers and Virtual Machines.  Unlike a Virtual Machine, using a Container do not require an virtualisation of physical hardware. So the main benefit that you will gain from Containers based technology is its lower overhead and potentially better performance. Then, he introduced Docker, which is all about making it easier to create, deploy and run applications by using containers.  Accordingly to Graham, Docker can make Python web hosting better. 

There is no slides for this talk, but he did show us several tricks in using Docker. I list two of them here.

**Build a data only container**

```dockerfile
//Dockerfile
FROM busybox
RUN mkdir /data && chown www-data /data
VOLUME data

//Commands
docker build -t data-only-container .
docker run -name data-only data-only-container true
docker ps -a
docker run -rm -it -u 33 --volumes-from data-only busybox sh
cd /data
date > date.txt
cat date.txt
exit
docker run -rm -it -u 33 -volumes-from data-only busybox sh
docker inspect data-only | less
{the physical location} /mnt/ .  Mount: {}..
docker commit live-data live-data-only
docker images
docker run --rm -it live-data-only sh
docker run -it busybox sh
docker run -rm -it manual-created sh
```


**Build a simple python web application**

```dockerfile
//Dockerfile
FROM python:2.7
USER $MOD_WSGI_USER: $MOD_WSGI_GROUP
docker run -rm -p 8000:80 python-app
curl http://{docker-ip}
docker run -rm -p 8000:80 --name ..
docker run -rm -link .. # connect two containers
```


## Closing 

There are more topics that we do not cover in this notes. But we believe it evidenced that the Python community is vast, diverse and open. Actually, PyCon HK 2015 is only the tip of an iceberg. At the closing stage of the conference, we had PyCon organisers from both Taiwan and Korea give us lightening talks. Yep, they are preparing PyCon TW & PyCon APAC 2016. 


