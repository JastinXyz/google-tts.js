const GoogleTts = require("../index.js") // '../index.js' change to 'google-tts.js'

/*
GoogleTts.saveFile("text", "language codes", "the location that will be filled by the result mp3. (optional)")
*/
GoogleTts.saveFile("abc", "id", "./src/audio.mp3").then(console.log)

// => response

/* console log:
{ success: true, message: 'Saved audio in ./src/audio.mp3' }
*/

/* and
add the resulting file to the location you wrote earlier.
*/











// test? run this file with command 'node example/saveAudio.test.js' in console log
