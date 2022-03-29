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
nocache('./akira.js', module => console.log(color(`'${module}' 𝐓𝐞𝐥𝐚𝐡 𝐃𝐢 𝐔𝐛𝐚𝐡`)))

var starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  Akira.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
                  
                  fs.existsSync(`./kirbotz.json`) && Akira.loadAuthInfo(`./kirbotz.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 ]', 'white'), color('𝖫𝗈𝖺𝖽𝗂𝗇𝗀 𝖡𝖺𝗇𝗀 𝖲𝖺𝖻𝖺𝗋 𝖸𝖺𝗁𝗁.......', 'magenta'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ 𝗦𝗨𝗖𝗖𝗘𝗦 ]', 'white'), color('𝖡𝗈𝗍 𝖮𝗇𝗅𝗂𝗇𝖾 𝖪𝖺𝗄 𝖲𝗎𝖻𝗋𝖾𝗄 𝖸𝖳 : 𝐊𝐢𝐫𝐁𝐨𝐭𝐳×', 'magenta'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./kirbotz.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
start('2',colors.bold.gray('\n✇ 𝐊𝐢𝐫𝐁𝐨𝐭𝐳'));
        Akira.on('group-participants-update', async (anu) => {
        await welcome(Akira, anu)
        })
        Akira.on('chat-update', async (message) => {
        require('./akira.js')(Akira, message)
        })
        }
        
function nocache(module, cb = () => { }) {
console.log(color(`Mᴏᴅᴜʟᴇ ${module} Aᴋɪʀᴀ Sᴇʟᴀʟᴜ Mᴇɴɢᴀᴡᴀsɪ`))
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