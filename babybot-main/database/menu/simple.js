const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *MENU SIMPLES* ]----- ð°
Hello, ${pushname} ð
Tenha um bom dia, ${sender.split("@")[0]}
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ NOME : ${pushname}
âââ¸ LEVEL : ${getLevelingLevel(sender)}
âââ¸ USER ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
Esses sÃ£o meus comandos simples
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}sticker*
âââ¸ *${prefix}ttp*
âââ¸ *${prefix}tts*
âââ¸ *${prefix}nulis*
âââ¸ *${prefix}toimg*
âââ¸ *${prefix}stalkig*
âââ¸ *${prefix}quotes*
âââ¸ *${prefix}bikinquote*
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð° -----[ *MEU DONO ${ownerName}* ]----- ð°`
}
exports.simple = simple