const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

// Bot Token
const token = process.env.BOT_TOKEN; // Secret থেকে আসবে

// Channel username
const channelUsername = "@xcrypot_67";

const bot = new TelegramBot(token, { polling: false });

async function sendMessage() {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageUrl = `https://source.unsplash.com/featured/?morning`;

  const caption = `Good Morning!
আজকের তারিখ: ${date}`;

  await bot.sendPhoto(channelUsername, imageUrl, {
    caption,
  });
}

sendMessage();
