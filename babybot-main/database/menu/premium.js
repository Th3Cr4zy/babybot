const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MENU PREMIUM* ]----- 🔰
Hello, ${pushname} 👋
Tenha um bom dia, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Esses são meus comandoa premium
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}premiumlist*
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}bokep*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}nulis1*
┃│➸ *${prefix}nulis2*
┃│➸ *${prefix}play*
┃│➸ *${prefix}mutual*
┃│➸ *${prefix}next*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}tomp3*
┃│➸ *${prefix}slowmo*
┃│➸ *${prefix}ngebass*
┃│➸ *${prefix}gemok*
┃│➸ *${prefix}tupai*
┃│➸ *${prefix}hidetag5*
┃│➸ *${prefix}hidetag10*
┃│➸ *${prefix}moddroid*
┃│➸ *${prefix}happymod*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *MEU DONO ${ownerName}* ]----- 🔰`
}
exports.vip = vip