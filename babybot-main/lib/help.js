const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `π° -----[ *MENU ${botName}* ]----- π°
Hallo, ${pushname} π
Tenha um bom dia, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ GRANA : Rp:${uangku}
βββΈ XP : ${reqXp}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os meus comandosβ¨
ββββββββββββββββββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}info*
βββΈ *${prefix}ping*
βββΈ *${prefix}donasi*
βββΈ *${prefix}owner*
βββββββββββββββββββββ
βββΈ *${prefix}simplemenu*
βββΈ *${prefix}makermenu*
βββΈ *${prefix}gabutmenu*
βββΈ *${prefix}downloadmenu*
βββΈ *${prefix}randommenu*
βββΈ *${prefix}dompetmenu*
βββΈ *${prefix}othermenu*
βββΈ *${prefix}groupmenu*
βββΈ *${prefix}soundmenu*
βββΈ *${prefix}premiummenu*
βββΈ *${prefix}ownermenu*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *MEU DONO ${ownerName}* ]----- π°`
}
exports.help = help
