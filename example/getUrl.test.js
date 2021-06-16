const GoogleTts = require("../index.js") // '../index.js' change to 'google-tts.js'

/*
GoogleTts.getUrl("text", "language codes")
*/
GoogleTts.getUrl("abc", "id").then(console.log)

// => response 
/*
{
  success: true,
  url: 'https://translate.google.com/translate_tts?ie=UTF-8&q=abc&tl=id&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1'
}
*/









// test? run this file with command 'node example/saveAudio.test.js' in console log
