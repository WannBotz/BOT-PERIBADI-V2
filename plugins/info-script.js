import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let cap = `*https://Instagram.com/wannzx_133*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode oleh owner?
Script bot ini gratis jika kalian ingin,silahkan klik link dibawah ini!!

https://wa.me/message/6TYVKZNILFJYL1
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/52342b658ee620d6a4c06.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'Huuu','buttonText':{'displayText':'ᴛʜᴀɴᴋ ʏᴏᴜ'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
