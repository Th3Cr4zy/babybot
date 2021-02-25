const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
Hello, ${pushname} 👋
Tenha um bom dia, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão meus comandos utilizáveis
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}hartatahta*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}travas(talvez não funcione)*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}neontext*
┃│➸ *${prefix}textlight*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *MEU DONO ${ownerName}* ]----- 🔰`
}
exports.maker = maker