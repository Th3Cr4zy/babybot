const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *RANDOM MENU* ]----- ð°
Hello, ${pushname} ð
Tenha um bom dia, ${sender.split("@")[0]}
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ NOME : ${pushname}
âââ¸ LEVEL : ${getLevelingLevel(sender)}
âââ¸ USER ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
Esses sÃ£o meus comandos randons
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}nekonime*
âââ¸ *${prefix}wibu*
âââ¸ *${prefix}neko*
âââ¸ *${prefix}husbu*
âââ¸ *${prefix}destrava(talvez nÃ£o funcione)*
âââ¸ *${prefix}anjing*
âââ¸ *${prefix}pokemon*
âââ¸ *${prefix}bokep*
âââ¸ *${prefix}darkjokes*
âââ¸ *${prefix}meme*
âââ¸ *${prefix}nsfwneko*
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð° -----[ *MEU DONO ${ownerName}* ]----- ð°`
}
exports.random = random