import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let cap = `Halo 👋\nSaya adalah WannBotz-MD, WannBotz-MD adalah Sebuah Bot yang bisa membantumu dichat/grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - 𝐖𝐚𝐧𝐧𝐁𝐨𝐭𝐳-𝐌𝐃 - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':false,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/29005357c17a192a01f13.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.customPrefix = /^(tes|p|hai|hi|hii|haii|bot|wannzx)$/i
handler.command = new RegExp

export default handler

