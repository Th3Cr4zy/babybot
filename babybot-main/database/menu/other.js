const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *OUTROS - MENU* ]----- π°
Hello, ${pushname} π
Tenha um bom dia, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o meus outros comandos
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}brainly*
βββΈ *${prefix}wiki*
βββΈ *${prefix}pinterest*
βββΈ *${prefix}resepmakanan*
βββΈ *${prefix}noticiasfalsas*
βββΈ *${prefix}timer*
βββΈ *${prefix}nulis1*
βββΈ *${prefix}nulis2*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *MEU DONO ${ownerName}* ]----- π°`
}
exports.other = other