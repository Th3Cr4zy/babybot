const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *MAKER MENU* ]----- π°
Hello, ${pushname} π
Tenha um bom dia, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o meus comandos utilizΓ‘veis
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}hartatahta*
βββΈ *${prefix}ninjalogo*
βββΈ *${prefix}halloweentext*
βββΈ *${prefix}pornhub*
βββΈ *${prefix}glitchtext*
βββΈ *${prefix}travas(talvez nΓ£o funcione)*
βββΈ *${prefix}cloudtext*
βββΈ *${prefix}neontext*
βββΈ *${prefix}textlight*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *MEU DONO ${ownerName}* ]----- π°`
}
exports.maker = maker