import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let cap = `${global.wm}

┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Ovo:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
❏────`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - ᴅᴏɴᴀsɪ - - - - -',
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
'thumbnail':await(await fetch('https://telegra.ph/file/52342b658ee620d6a4c06.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.sewa','buttonText':{'displayText':'sᴇᴡᴀ ʙᴏᴛ'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command =  /^(donasi)$/i

export default handler
