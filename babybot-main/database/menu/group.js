const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUP MENU* ]----- 🔰
Hello, ${pushname} 👋
Tenha um bom dia, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão meus comandos pro grupo
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}welcome* 「1/0」
┃│➸ *${prefix}leveling* 「1/0」
┃│➸ *${prefix}simih* 「1/0」
┃│➸ *${prefix}nsfw* 「1/0」
┃│➸ *${prefix}antilinkgrup* 「1/0」
┃│➸ *${prefix}grup* 「buka/tutup」
┃│➸ *${prefix}add*
┃│➸ *${prefix}kick*
┃│➸ *${prefix}headshot*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}fitnah*
┃│➸ *${prefix}hidetag*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *MEU DONO ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm