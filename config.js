require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['923255156992']
global.ownMain = '923255156992'
global.NamaOwner = '𝐊𝐀𝐒𝐇𝐌𝐈𝐑𝐈>' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = '𝐊𝐀𝐒𝐇𝐌𝐈𝐑𝐈>' //
global.packname = '𝐊𝐀𝐒𝐇𝐌𝐈𝐑𝐈' //
global.url1 = 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b' //
global.url2 = 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b' //
global.linkgc = 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
