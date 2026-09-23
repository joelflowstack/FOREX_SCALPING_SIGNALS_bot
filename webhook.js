// api/webhook.js
// Telegram webhook handler for the FOREX SCALPING SIGNALS ad bot.
// Every user interaction gets a welcome message with a direct link to the channel.
// No click tracking, no database, no extra dependencies — plain fetch to the Telegram Bot API.

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHANNEL_URL = "https://t.me/forexscalpingsignls0";
const CHANNEL_NAME = "FOREX SCALPING SIGNALS";

const WELCOME_TEXT =
  `📈 *Welcome to ${CHANNEL_NAME}*\n\n` +
  `Free daily forex scalping signals for traders who want fast, high-probability setups.\n\n` +
  `Tap below to join the channel and start receiving signals.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("Bot is running.");
  }

  try {
    const update = req.body;
    const chatId = update?.message?.chat?.id;

    if (chatId) {
      await sendWelcome(chatId);
    }

    return res.status(200).send("ok");
  } catch (err) {
    console.error("Webhook error:", err);
    // Always return 200 so Telegram doesn't retry-storm on a transient error
    return res.status(200).send("ok");
  }
}

async function sendWelcome(chatId) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: WELCOME_TEXT,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📊 Join FOREX SCALPING SIGNALS", url: CHANNEL_URL }],
        ],
      },
    }),
  });
}
