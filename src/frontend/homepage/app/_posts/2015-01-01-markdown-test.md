---
title: Markdown test
description: Just a test to see how Markdown is rendered.
---

## Markdown basics

### This a h3 heading

#### This a h4 heading

##### This a h5 heading

###### This a h6 heading

This is a "Markdown test" post just to see how [Markdown](https://help.github.com/articles/markdown-basics/) is rendered.

This is a new paragraph, and the following text would be rendered in the same line or, in case of <abbr title="GitHub Flavored Markdown">GFM</abbr>, in a new line: 
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

## GitHub extras

**Task lists**

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
- [x] list syntax is required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task

**GitHub references**

* SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User/Repository@SHA: jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* #Num: #26
* GH-Num: GH-26
* User#Num: jlord#26
* User/Repository#Num: jlord/sheetsee.js#2
