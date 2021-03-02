const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ * BRINCADEIRAS * ]----- 🔰
Hello, ${pushname} 👋
Tenha um bom dia mano ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os comandos de brincadeiras
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}advinhar(temporizador?)*
┃│➸ *${prefix}vocepode*
┃│exemplo: !vocepode falar comigo?
┃│➸ *${prefix}quando(faça uma pergunta)*
┃│exemplo: quando vou namorar?
┃│➸ *${prefix}hobby*
┃│➸ *${prefix}nota*
┃│exemplo: !nota de quanto sou bonito
┃│➸ *${prefix}cekbapak*
┃│➸ *${prefix}medirviadagemdo*
┃│➸ *${prefix}verdade*
┃│➸ *${prefix}desafio*
┃│➸ *${prefix}tebakin*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}simi*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *MEU DONO ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
