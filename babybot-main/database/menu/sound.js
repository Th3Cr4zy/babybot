const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *MENU DE SOM* ]----- ð°
Hello, ${pushname} ð
Tenha um bom dia, ${sender.split("@")[0]}
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ NOME : ${pushname}
âââ¸ LEVEL : ${getLevelingLevel(sender)}
âââ¸ USER ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
Esses sÃ£o meus comandos de sons
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}iri*
âââ¸ *${prefix}pale*
âââ¸ *${prefix}sound1*
âââ¸ *${prefix}sound2*
âââ¸ *${prefix}sound3*
âââ¸ *${prefix}sound4*
âââ¸ *${prefix}sound5*
âââ¸ *${prefix}sound6*
âââ¸ *${prefix}sound7*
âââ¸ *${prefix}sound8*
âââ¸ *${prefix}sound9*
âââ¸ *${prefix}sound10*
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð° -----[ *MEU DONO ${ownerName}* ]----- ð°`
}
exports.sound = sound