var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var qrcode = require('qrcode-terminal')
var figlet = require('figlet')
var fs = require('fs')
var colors = require('colors')
var welcome = require('./KIR5/group')

var { color, bgcolor, biocolor, KirLog } = require("./KIR1/color");
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require("./KIR1/functions")

require('./akira.js')
nocache('./akira.js', module => console.log(color(`'${module}' ððð¥ðð¡ ðð¢ ðððð¡`)))

var starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  Akira.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
                  
                  fs.existsSync(`./kirbotz.json`) && Akira.loadAuthInfo(`./kirbotz.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ ðð¢ðððð¡ð ]', 'white'), color('ð«ððºð½ððð ð¡ðºðð ð²ðºð»ðºð ð¸ðºðð.......', 'magenta'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ ð¦ð¨ðððð¦ ]', 'white'), color('ð¡ðð ð®ððððð¾ ðªðºð ð²ðð»ðð¾ð ð¸ð³ : ðð¢ð«ðð¨ð­ð³Ã', 'magenta'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./kirbotz.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
start('2',colors.bold.gray('\nâ ðð¢ð«ðð¨ð­ð³'));
        Akira.on('group-participants-update', async (anu) => {
        await welcome(Akira, anu)
        })
        Akira.on('chat-update', async (message) => {
        require('./akira.js')(Akira, message)
        })
        }
        
function nocache(module, cb = () => { }) {
console.log(color(`Má´á´á´Êá´ ${module} Aá´ÉªÊá´ Sá´Êá´Êá´ Má´É´É¢á´á´¡á´sÉª`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()