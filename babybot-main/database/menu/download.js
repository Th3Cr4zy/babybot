const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *DOWNLOAD MENU* ]----- π°
Hello, ${pushname} π
Tenha um bom dia ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os comandos de download
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}ytmp3*
βββΈ *${prefix}yutubdl*
βββΈ *${prefix}tiktod*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *MEU DONO ${ownerName}* ]----- π°`
}
exports.download = download