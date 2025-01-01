const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349012640680,2349163621557,2349076810086,2348037820665";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348109243618";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_16_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRk5ZV0JnYlB4bXhiNWJtckM1Q2Yza1dOL0NwdDE2Y3QvQUJhdFdXdlMyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA5MjQzNjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMURBRUMyN0M3N0M0QkVDNjFERkZFMEU3Q0JENjZEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NDgyMTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGh5V2luNGxSdUtpT1haUGV2Vm9QUVwiLFxuICBcInBob25lSWRcIjogXCIxMjNhZGNjMi00YTE2LTRmMjUtYTgxMi0yM2IxNzkzMTQ3YzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgODEsXG4gICAgICAyMzksXG4gICAgICAxMDAsXG4gICAgICAyLFxuICAgICAgMTExLFxuICAgICAgODUsXG4gICAgICAyMCxcbiAgICAgIDE3OCxcbiAgICAgIDYzLFxuICAgICAgNDIsXG4gICAgICAxNTcsXG4gICAgICAxMjAsXG4gICAgICAzMSxcbiAgICAgIDk2LFxuICAgICAgMTAwLFxuICAgICAgMTk4LFxuICAgICAgMTk2LFxuICAgICAgMjQ0LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMjIsXG4gICAgICAxMjEsXG4gICAgICAxOCxcbiAgICAgIDgzLFxuICAgICAgMjA0LFxuICAgICAgMjQwLFxuICAgICAgMTc3LFxuICAgICAgMTY3LFxuICAgICAgMjM3LFxuICAgICAgMzEsXG4gICAgICAxMzYsXG4gICAgICA3OSxcbiAgICAgIDIwOSxcbiAgICAgIDE1LFxuICAgICAgMTMwLFxuICAgICAgMTY0LFxuICAgICAgNjYsXG4gICAgICAxMzgsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDc5WU1NR1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDkyNDM2MTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI2ODk4Nzk1NjQ0ODg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRDQrcTBERU8zVTFic0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxQSW12Ylp3c1RPVkJHSXFqanpjSmJ6L1pMNlhiaGlsWkNnS2JWNnNHMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM25NVHZGYU05ak9uWlI2UzNoN0hrMnhrWVZSRVNpdE53bm5USkpCRGV5N1dQTlJ0NUdWWlNQeUdKV3BMQTlkN2RYWS91anN6Q1ZMVllIQ0ZJSkNXQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2wrcitkVlkyZTdDZGpYaUtoYVBwTUU0bFdxRTNaV2V2RjVwMVRPamw3RFE3TVFOUnRObitFTTd2d1NiNWp5dCtUaXpwNGp0ZzlEeTJUWm1ta0dDRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwOTI0MzYxODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTc0ODIwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBGVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEZULmpzb24iOiAie1wia2V5RGF0YVwiOlwidmZYYkQxRGZvVkl6ODg1M1BpYWtQeWtMMW9GUC80WXNqRHZ2Mi9veENFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDE2OTI0NjQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc0ODEyNjAxMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖉 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DAVID",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
