# Tweet markdown renderer

[![npm](https://img.shields.io/npm/v/tweet.md.svg)](https://www.npmjs.com/package/tweet.md)
[![Build](https://img.shields.io/github/workflow/status/silentroach/tweet.md/Test.svg)](https://github.com/silentroach/tweet.md/actions?query=workflow%3ATest)
[![Coveralls](https://img.shields.io/coveralls/silentroach/tweet.md.svg?label=coverage)](https://coveralls.io/r/silentroach/tweet.md)
[![install size](https://packagephobia.now.sh/badge?p=tweet.md)](https://packagephobia.now.sh/result?p=tweet.md)

Render your [tweets](https://dev.twitter.com/overview/api/tweets) with [entities](https://dev.twitter.com/overview/api/entities) to beautiful markdown.

## Installing

You can install the latest package version for [Node.js](https://nodejs.org):

```
$ npm install tweet.md
```

## How to use

Just as you think it should be used:

```js
var render = require("tweet.md");
var output = render(tweetObjectFromAPI);
```

## Examples

<!-- CUT -->

### [01-link.json](examples/01-link.json)

Removing the 140 character limit from Direct Messages [twittercommunity.com/t/removing-the…](https://t.co/h0I2M3P2vm "https://twittercommunity.com/t/removing-the-140-character-limit-from-direct-messages/41348/")

---

### [02-multiline.json](examples/02-multiline.json)

Tweet poems you like  
at [#TwitterPoetryClub](https://twitter.com/search?q=%23TwitterPoetryClub)  
prose, sonnets and more

Via [@bustle](https://twitter.com/bustle "Bustle"), learn how to wax poetic on Twitter: [bustle.com/articles/10068…](http://t.co/vItyyGqX7R "http://www.bustle.com/articles/100683-twitterpoetryclub-members-share-their-love-of-poetry-in-140-characters-or-less")

---

### [03-russian.json](examples/03-russian.json)

Привет! С вами сегодня и всю неделю [@pepelsbey](https://twitter.com/pepelsbey "Вадим Макеев"), он же Вадим Макеев в прямом эфире из Осло, см. глобус Европы [pic.twitter.com/clb7TLnxZS](http://t.co/clb7TLnxZS)

---

### [04-ctags.json](examples/04-ctags.json)

[\$APPL](https://twitter.com/search?q=%23APPL&src=ctag) set to jump this morning. General rebound in the market today. Yesterday was a good time to buy into the panic.

---

### [05-emoji.json](examples/05-emoji.json)

Twitter libraries are a great way to use our API. Did you know:

✨ 100+ libraries support the Twitter API  
✨ In 25+ programming languages 🐍☕️♦️

Explore our curated list of community built libraries 📚

[developer.twitter.com/en/docs/develo…](https://t.co/mgXiWmt9SY "https://developer.twitter.com/en/docs/developer-utilities/twitter-libraries")

---

### [06-quote.json](examples/06-quote.json)

A nice GIF of the Performance Monitor coming to DevTools in Chrome 64 [developers.google.com/web/updates/20…](https://t.co/2xpId3DFro "https://developers.google.com/web/updates/2017/11/devtools-release-notes#perf-monitor")

> Track your site’s performance realtime with [@ChromeDevTools](https://twitter.com/ChromeDevTools "Chrome DevTools") in 3 steps:
>
> 1. CMD+SHIFT+P
> 2. type 'per'
> 3. Select 'Sh… [twitter.com/i/web/status/9…](https://t.co/UVvpIlCkrk "https://twitter.com/i/web/status/936661298603089920")
