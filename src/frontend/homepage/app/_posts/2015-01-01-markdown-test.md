---
title: Markdown test
description: Just a test to see how Markdown is rendered.
---

## Markdown basics

## This is a h2 heading

### This is a h3 heading

#### This is a h4 heading

##### This is a h5 heading

###### This is a h6 heading

This is a "Markdown test" post just to see how [Markdown](https://help.github.com/articles/markdown-basics/) is rendered.

This is a new paragraph, and the following text would be rendered in a new line:  
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores magnam, dolorum excepturi nostrum vero asperiores hic error, odit dolorem architecto minus reprehenderit minima dignissimos omnis ratione illo ullam. Rem, voluptas.

_italic_ and __bold__, or *italic* and **bold**.

> This is a blockquote.

Code example:

    function test() {
      console.log("notice the blank line before this function?");
    }

Unordered list:

- one
- two
- three

Another unordered list:

* one
* two
* three

Ordered list:

1. one
2. two
3. three

Nested lists:

1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3

Horizontal rule:

---

Another horizontal rule:

___

Another horizontal rule:

***

## GitHub Flavored Markdown

The following Markdown is [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/), however it's currently widely supported.

This text would be
rendered in two lines.

http://example.com

do_this_and_do_that_and_another_thing.

~~Mistaken text.~~

```
function test() {
  console.log("notice the blank line before this function?");
}
```

```js
function test() {
  console.log("notice the blank line before this function?");
}
```

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |


| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |


| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

## Media and embed elements

![Markdown cheatsheet](/images/blog/2015/markdown-cheatsheet.png)

<video controls>
  <source src="/images/blog/2015/big_buck_bunny.webm" type="video/webm">
  <source src="/images/blog/2015/big_buck_bunny.mp4" type="video/mp4">
  This browser does not support the video element.
</video>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vpg9yizPP_g" frameborder="0" allowfullscreen></iframe>

<iframe src="//www.slideshare.net/slideshow/embed_code/37585243" width="477" height="510" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/omerida/alchemy-markdownpandoc" title="Publishing alchemy with markdown and pandoc" target="_blank">Publishing alchemy with markdown and pandoc</a> </strong> from <strong><a href="//www.slideshare.net/omerida" target="_blank">Oscar Merida</a></strong> </div>
