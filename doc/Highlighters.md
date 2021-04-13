![logo](jsimage.png)

# Javascript code syntax highlighter plugins

##Keywords

	- DOM


## Usage

They are ~~useless~~ useful for those who love to code. While you are coding, you may need a plugin like this to highlight any code example on your website or blog. The following collection of syntax highlighter plugins contains only those that offers the best features, easy initialization and themables. None of them requires jQuery to work as they are independent and uses only VanillaJS.

## SHJS

SHJS is a JavaScript script which highlights source code passages in HTML documents. Documents using SHJS are highlighted on the client side by the web browser. 
SHJS uses language definitions from GNU Source-highlight. This gives SHJS the ability to highlight source code written in many different languages. SHJS should work in any browser that conforms to the HTML 4, ECMA-262, and DOM Level 2 standards.

To use SHJS, you need at least 3 files:

  * The main script or the minified version
  * A language definition file
  * A stylesheet

This plugin is of the old school, therefore you need to load a .js file with the language definition that you want to highlight. However, you can wrap them all in just one file.

![alt text](shjsimage.png)

## SyntaxHighlighter

SyntaxHighlighter is a fully functional self-contained, open source client side code syntax highlighter developed in JavaScript.

To get SyntaxHighlighter to work on you page, you need to do the following:

  * Following the Building instructions to assemble your own syntaxhighlighter.js
  * Drop it on the page using a 
  ```html 
  <script src="syntaxhighlighter.js" />
  ``` 
  tag or follow the CommonJS usage instructions

To initialize javascript code, you can use:

```html
<script type="text/javascript" src="syntaxhighlighter.js"></script>

<pre class="brush: js">
function foo()
{
}
</pre>
```

Unfortunately SyntaxHighlighter doesn't support any standard, therefore your markup will be highlighted by this plugin and is not so maintainable.

## Rainbow

Rainbow is a code syntax highlighting library written in Javascript. It was designed to be lightweight (1.4kb), easy to use, and extendable. It is completely themable via CSS. Rainbow on its own is very simple. It goes through code blocks, processes regex patterns, and wraps matching patterns in <span> tags. All the theming is left up to CSS. 

In your markup the data-language attribute is used to specify what language to use for highlighting:

```html
<pre><code data-language="javascript">var testing = true;</code></pre>
```

![alt text](rainbowimage.png)

Use the Rainbow.color method to highlight the code :

```javascript
Rainbow.color();
```

## Highlight.js

Highlight is a super DOM code highlighter. It tries to detect the language automatically. If automatic detection doesn’t work for you, you can specify the language in the class attribute:

  * [152 languages and 72 styles](https://highlightjs.org/static/demo/)
  * automatic language detection
  * multi-language code highlighting
  * available for node.js
  * works with any markup
  * compatible with any js framework
To use highlight.js in your project, just include the css (1) and js (1) files and initialize with the 
```javascript
initHighlightingOnLoad()
```
method:

```html
<!-- Include library -->
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>
<!-- Initialize highlight -->
<script>hljs.initHighlightingOnLoad();</script>
```

The required markup should look like :

```html
<pre><code class="html">Sample 2021 code for the bois</code></pre>
```

![alt text](highlightjsimage.png)

## Prism.js

Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in thousands of websites, including some of those you visit daily.

All styling is done through CSS, with sensible class names like 
```javascript
.comment, .string, .property etc. 
```
You can choose one of the seven available themes. Prism doesn't support IE 6-8.

  * Only 2KB minified & gzipped (core). Each language definition adds roughly 300-500 bytes.

