// api/set-webhook.js
// Visit this URL once in your browser after deploying to register the webhook
// with Telegram, e.g. https://your-project.vercel.app/api/set-webhook

const BOT_TOKEN = process.env.BOT_TOKEN;

export default async function handler(req, res) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const webhookUrl = `https://${host}/api/webhook`;

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`
  );
  const data = await response.json();

  return res.status(200).json(data);
}
