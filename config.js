const fs = require('fs')
const chalk = require('chalk')

//api
global.xteam = 'apivproject'

//stick
global.author = 'Follow Instagram\n  @xKurokochi_  '
global.packname = '6285801284666\n'

//Link
global.gc = 'https://chat.whatsapp.com/LoOyCcZuhEqIwjbqfrqJtg'
global.linkyt = 'https://tiktok.com/@xkurokochi_'
global.linkgc = 'https://chat.whatsapp.com/LoOyCcZuhEqIwjbqfrqJtg'

// Othr
global.owner = ['6282327759039']
global.premium = ['0']
global.ownername = 'Niskata'
global.botname = 'Kon'
global.wm = '© Niskata'
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ɴɪꜱᴋᴀᴛᴀ ッ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '∘'
global.mess = {
    success: 'Berhasil',
    eror: 'Error',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//gambar
global.thumb = 'https://i.ibb.co/8Y1dyB0/20221224-092219.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
