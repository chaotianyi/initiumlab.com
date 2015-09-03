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
Install hexo command line tools and dependencies:
```
npm install hexo-cli -g
npm install
```

### Development
View live version:
```
grunt serve
```
And go to <localhost:9000> to view the live version.
It cannot live-reload yet. Please manually refresh after each modification.

Deploy:
```
grunt deploy
```

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



