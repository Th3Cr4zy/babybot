const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ * BRINCADEIRAS * ]----- π°
Hello, ${pushname} π
Tenha um bom dia mano ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os comandos de brincadeiras
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}advinhar(temporizador?)*
βββΈ *${prefix}vocepode*
ββexemplo: !vocepode falar comigo?
βββΈ *${prefix}quando(faΓ§a uma pergunta)*
ββexemplo: quando vou namorar?
βββΈ *${prefix}hobby*
βββΈ *${prefix}nota*
ββexemplo: !nota de quanto sou bonito
βββΈ *${prefix}cekbapak*
βββΈ *${prefix}medirviadagemdo*
βββΈ *${prefix}verdade*
βββΈ *${prefix}desafio*
βββΈ *${prefix}tebakin*
βββΈ *${prefix}timer*
βββΈ *${prefix}simi*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *MEU DONO ${ownerName}* ]----- π°`
}
exports.gabut = gabut
