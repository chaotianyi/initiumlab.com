initiumlab.com
==============
The website of Initum Lab, the exploratory arm of Initium Media

Notes for Initium Lab Co-workers
--------------------------------
### Assumption
You should have installed grunt, Node.js, and npm.
If not and you don't know how, please ask your co-workers.

### Prepare the Repo

```
git clone --recursive git@github.com:initiumlab/initiumlab.com.git
```

This will recursively clone all submodules.

### Initial Setting
#### Option 1

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
View live version:
```
grunt serve
```
And go to <localhost:9000> to view the live version.
It cannot live-reload yet. Please manually refresh after each modification.

Deploy to production:
```
grunt build
grunt deploy:prod
```

Deploy to staging:
```
grunt build
grunt deploy:staging
```

Scan all alt of images
```
grunt scan:alt
```

(Need to run `pip install --user httpie pquery` to get deps first)

Please use grunt for deployment and be very careful using hexo's built-in generate and deploy commands,
which might lead to conflicts and un-intended results.


### Homepage
The home page of the website is editable at **source/index.html**.

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
Put all relevant assets under static/data-title. During deployment, they'll be copied into the same folder as the HTML file.



