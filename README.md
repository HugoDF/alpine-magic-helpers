# Alpine Magic Helpers
A set of magic helpers to use with AlpineJS

![GitHub file size in bytes](https://img.shields.io/github/size/kevinbatdorf/alpine-magic-helpers/dist/index.js?label=minified&style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/kevinbatdorf/alpine-magic-helpers?label=version&style=flat-square)

## About

This adds three magic properties to use with Alpine JS. ***More to come!***
| Magic Properties | Description |
| --- | --- |
| [`$fetch`](#fetch) | Using Axios, fetch JSON from an external source.  |
| [`$interfal`](#interval) | Run a function every n seconds. Optionally start and stop the timer. |
| [`$truncate`](#truncate) |  Limit a text string to a specific amount of characters or words. |

🚀 If you have ideas for more properties, please open a discussion
##### TODO:
1. Add more useful methods
1. Create better examples with example pages
1. Write tests


## Installation

Include the following `<script>` tag in the `<head>` of your document (before Alpine):

```html
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.x.x/dist/index.js"></script>
```

Or only use the specific methods you need:

```html
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.x.x/dist/fetch.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.x.x/dist/interval.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.x.x/dist/truncate.js"></script>
```

---

### Manual

If you wish to create your own bundle:

```bash
npm install kevinbatdorf/alpine-magic-helpers --save
```

Then add the following to your script:

```javascript
import 'alpine-magic-helpers'
import 'alpinejs'
```


### `$fetch`
**Example:**
```html
<div x-data="{ url: 'https://jsonplaceholder.typicode.com/todos/1' }"
    x-init="$fetch(url).then(data => console.log(data))">
    <!-- After init, data will be logged to the console -->
</div>
```

**Optionally pass in an options**

By default, `$fetch` will return the JSON data object. However, because we are using Axios behind the scenes, you may pass in an object to customize the request [See all options](https://github.com/axios/axios).

**Example:**

```html
<div x-data="{ url: 'https://jsonplaceholder.typicode.com/todos/1' }"
    x-init="$fetch({ url: url, method: 'post' }).then({ data } => console.log(data))">
</div>
```
> Note that this will return the entire response object, whereas by default `$fetch` will only return the data

---

### `$interval`
**Example:**
```html
<div
    x-data="{
        timer: 500,
        funtionToRun: function() {
            console.log('Hello console')
        }
    }"
    x-init="$interval(funtionToRun, timer)">
</div>
```

**Optionally pass in options**

By default, `$interval ` will run your function every `nth` millisecond when browser provides an animation frame (via `requestAnimationFrame`). This means that the function will not run if the browser tab is not visible. Optionally, you may pass in the following options as the second parameter:
| Property | Description |
| --- | --- |
| `timer` | Timer in milliseconds.  |
| `delay` | Delay the first run. N.B. The first run is also relayed by the timer time. |
| `forceInterval` |  Ignore the browser animation request mechinism. Default is false |

> ⚠️ We also add a hidden property `autoIntervalTest` that will play/pause the timer depending on it's "truthyness"

**Example:**

```html
<div
    x-data="{
        timer: 500,
        autoIntervalTest: true, // optional to start/stop the timer
        funtionToRun: function() {
            console.log('Hi again!')
        }
    }"
    x-init="$interval(funtionToRun, { timer: 1000, delay: 5000, forceInterval: true })"
    @click="autoIntervalTest = !autoIntervalTest">
</div>
```

---

### `$truncate`
**Example:**
```html
<div
    x-data="{ characters: 50, string: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}"
    x-text="$truncate(string, characters)"
    @click="characters = undefined">
    <!-- Text will show 'Lorem ipsum dolor sit amet, consectetur adipiscing' and will reveal all when clicked-->
</div>
```

**Optionally pass in options**

By default, `$truncate` will return take characters as a parameter. Instead you can pass in an object and trim by words.

**Example:**

```html
<div
    x-data="{ count: 5, string: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}"
    x-text="$truncate(string, {words: count})"
    @click="count = 10">
    <!-- Will start with 5 words, then increase to 10 when clicked -->
</div>
```
> Behind the scenes, for words, this uses `sentence.split(" ").splice(0, words).join(" ")` which does not define a word in all languages. 

---

## License

Copyright (c) 2020 Kevin Batdorf

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.