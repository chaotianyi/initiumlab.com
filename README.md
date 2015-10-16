initiumlab.com
==============
The website of Initium Lab, the exploratory arm of Initium Media

Preparation for Development
---------------------------
### Assumption
You should have installed `grunt`, `Node.js`, and `npm`.
If not and you don't know how, please ask around.

### Prepare the Repo

```
git clone --recursive git@github.com:initiumlab/initiumlab.com.git
```

This will recursively clone all submodules.

### Initial Setting

Note, we use [Git LFS](https://github.com/github/git-lfs) in this project.
Please install Git-LFS first (e.g. `brew install git-lfs`)

You can choose to contribute in your local environment or in the Vagrant virtual environment.
The local environment is faster and more convenient.

#### Option 1: Use local enviroment

Install hexo command line tools and dependencies:
```
npm install -g hexo-cli
npm install
```

#### Option 2: Use Virtual Environment
Install the virtualisation suite:

- VirtualBox
- Vagrant

Launch virtual machine:

```
vagrant up
```

Login the virtual machine and run server:

```
vagrant ssh
cd /vagrant
grunt serve
```

Then visit
<http://localhost:9000/>

### Development
Launch development server and view live version
```
grunt serve
```
And go to <localhost:9000> to view the live version.
It cannot live-reload yet. Please manually refresh after each modification.

Deploy to staging:
```
grunt build
grunt deploy:staging
```

Deploy to production:
```
grunt build
grunt deploy:prod
```

Scan all `alt` of images
```
grunt scan:alt
```

(Need to run `pip install --user httpie pquery` to get deps first)

Please use grunt for deployment and be very careful using hexo's built-in generate and deploy commands,
which might lead to conflicts and un-intended results.

### Writing
Create a new article:
```
hexo new "title"
```

Edit **source/_posts/title.md** for text, and put images under **source/_posts/title/**.

If you are creating a "special page" that should bypass markdown rendering, create a DATE-title.html under source/_posts/,
and start the file with:
```
title: article title
layout: false
---
<!DOCTYPE html>
<html>
...
```
Put all relevant assets under `source/_posts/title`, if you are working on `title.md`.

The less preferable alternative is put it under `static/title`. This should only be used if the previous approach
won't work. (For example, Hexo has a bug where JavaScript and CSS source files sitting in the source/_posts/ directory
would be interpreted as Markdown and generate gibberish HTML.)

#### Summary
Always include a `<!-- more -->` mark in the post Markdown file. The section before it would serve as the excerpt on the
front page and blog list, unless you specify `description` (see below).

#### Meta information
If you include `description` in the meta information section of a post, it would serve as the excerpt on the front page
but not in the blog list. The blog list would display the summary.

