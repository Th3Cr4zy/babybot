exports.wait = () => {
	return`*「❗」Perai garai*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「❗」ATIVAR LEVELS*`
}

exports.lvloff = () => {
	return`*「❗」DESATIVAR LEVELS*`
}

exports.lvlnul = () => {
	return`*「❗」Voce ainda é noob :p*`
}

exports.lvlnoon = () => {
	return`*「❗」O NIVEL DO GRUPO NAO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「❗」NAO REGISTRADO*\n*como registrar ${prefix}daftar nome|idade* \n\n*exemplo ${prefix}daftar crazy|18*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, MAS VOCE JA ESTA PROIBIDO YAHAHAHA HAYUUU :V*`
}

exports.premium = () => {
	return`*「❗」Marque o meu dono com ${prefix}premiumeu para virar um usuario premium e poder usar esse comando*`
}

exports.rediregis = () => {
	return`*「 JA REGISTRADO 」*\n\n*voce registrou irmao >_<*`
}

exports.stikga = () => {
	return`*「 FALHOU 」tenta de novo man*`
}

exports.linkga = () => {
	return`*「❗」desculpe mas o link ta invalido*`
}

exports.groupo = () => {
	return`*「❗」SOMENTE USADO EM GRUPO*`
}

exports.ownerb = () => {
	return`*「❗」SOMENTE MEU SENPAI PODE USAR ESSE COMANDO baka!*`
}

exports.ownerg = () => {
	return`*「❗」SOMENTE O DONO DO GRUPO PODE USAR ESSE COMANDO*`
}

exports.admin = () => {
	return`*「❗」ALA O MEMBRO COMUM TENTANDO USAR COMANDO DE ADMINKKKKKKKKKKKKKKKKKK🤡🤡🤡🤡*`
}

exports.badmin = () => {
	return`*「❗」Eu tenho que ser adm né garai*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW🔞 ATIVADO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietario de BOT, relatorios falsos/main2 ocasionará em ban*`
}

exports.wrongf = () => {
	return`*「🤔」Cade o texto porra?*`
}

exports.clears = () => {
	return`*「🚮」Limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「❗」CADASTRO*\n\n para saber se voce se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você nao entendeu a mensagem, significa que voce nao salvou o número na bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 SUCESSO NO REGISTRO 」*\nPara Informacoes De Usuario :\n\n*➸ Nome : ${namaUser}*\n*➸ Numero : wa.me/${sender.split("@")[0]}*\n*➸ Idade : ${umurUser}*\n*➸ Hora Do Registro : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTA : Esta mensagem e muito importante :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 FELIZ 」*
➸ *Nome* : ${pushname}
➸ *Numero* : wa.me/${sender.split("@")[0]}
➸ *Grana* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} O limite de hoje aumentou*\n*O limite e zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE CONTA 」*
sisa limit anda : ${limitCounts}

Melhoria premium meu chefe, biar bebas gunain bot`
}

exports.satukos = () => {
	return`*Parâmetro Adicionar 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
