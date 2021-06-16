const axios = require("axios")
const fs = require("fs")
const userAgents = require("./tools/user-agents.json")
const saveFile = async(text, lang, file = "./audio-google-tts-js.mp3") => {
  if(!text) throw new Error('Provide the text!')
  if(!lang) throw new Error('Provide language codes! e.g Indonesian = ID, English = EN. This is used for the sound type.')
  if(lang.length > 2) throw new Error('Invalid Language codes (must 2 string length). All Language Codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes')
  if(file.endsWith(".mp3") === false) throw new Error('File must ends with ".mp3" format!')
  const data = await axios(`https://translate.google.com/translate_tts?ie=UTF-8&q=${text.replace(/( )/ig, "%20").replace(/(\n)/ig, "%0A")}&tl=${lang}&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1`, {
    method: "get",
    headers: {"User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]},
    responseType: 'stream'
})
  const write = fs.createWriteStream(file);
            await data.data.pipe(write);

  const res = {
    "success": true,
    "message": `Saved audio in ${file}`
  }
  return res
}

module.exports = saveFile
