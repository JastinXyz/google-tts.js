<div align="center">

# google-tts.js

A wrapper for the Google Text To Speech API with various features.

<a href="https://github.com/JastinXyz/google-tts.js" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<br>
<a href="https://discord.gg/HmtmS8Hqyb" target="_blank">
<img src=https://img.shields.io/discord/815400211663945769?label=discord&logo=discord&logoColor=white&style=for-the-badge alt=github style="margin-bottom: 5px;" />
</a>

[![NPM](https://img.shields.io/npm/dt/google-tts.js)](https://npmjs.com/package/google-tts.js)
#
# Installation
</div>
You can download this package from <a href="https://npmjs.com/package/google-tts.js">npmjs</a>. With command:

```cli
npm i google-tts.js
```
<div align="center">

# Example
</div>

## getUrl
```js
const GoogleTts = require("google-tts.js") 

/*
GoogleTts.getUrl("text", "language codes")
*/
GoogleTts.getUrl("abc", "id").then(console.log)
```

## Response
```
{
  success: true,
  url: 'https://translate.google.com/translate_tts?ie=UTF-8&q=abc&tl=id&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1'
}
```

## saveFile
```js
const GoogleTts = require("google-tts.js")

/*
GoogleTts.saveFile("text", "language codes", "the location that will be filled by the result mp3. (optional)")
*/
GoogleTts.saveFile("abc", "id", "./src/audio.mp3").then(console.log)



/* console log:
{ success: true, message: 'Saved audio in ./src/audio.mp3' }
*/

/* and
add the resulting file to the location you wrote earlier.
*/
```

## Response
```
 console log:
{ success: true, message: 'Saved audio in ./src/audio.mp3' }


 and add the resulting file to the location you wrote earlier.
```

<div align="center">

# Events
</div>

## Saved with .mp3 Result 
```js
GoogleTts.saveFile("text", "language codes", "the location that will be filled by the result mp3. (optional)")
```

## Get the result url
```js
GoogleTts.getUrl("text", "language codes")
```
