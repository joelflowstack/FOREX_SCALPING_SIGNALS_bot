# FOREX SCALPING SIGNALS — Telegram Ad Bot

Simple, no-frills bot: anyone who messages it gets a welcome note with a button
straight to the channel. No tracking, no database — Telegram Ads is the tracker.

## Deploy (GitHub → Vercel, no CLI)

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import that repo.
3. In Vercel project Settings → Environment Variables, add:
   - `BOT_TOKEN` = your token from @BotFather
4. Deploy.
5. Visit `https://<your-project>.vercel.app/api/set-webhook` once in a browser
   to register the webhook. You should see `{"ok":true,...}`.
6. Message your bot `/start` on Telegram to confirm the welcome message fires.

That's it — two files, no dependencies.

## Real channel details (for the bot's Telegram description / about)

Pulled directly from the live channel (t.me/forexscalpingsignls0) so the bot's
wording matches what's actually there:

- **Channel name:** FOREX SCALPING SIGNALS
- **Subscribers:** ~1,434 (at time of writing — will keep growing)
- **Channel's own description:** "Stay on our free channel if you're
  interested in getting amazing signals daily with up to 96% accuracy for
  free. Contact me to subscribe or invest. This is the dream channel and i
  hope we help make all your financial dreams come true."
- **Channel contact:** @SadiqDtrader

Note: the "96% accuracy" figure is the channel's own marketing claim, not a
verified statistic — use it if you want to match their voice, but you may
want to soften it in the bot's about text to avoid overpromising on Joel's
behalf.

Suggested short bot **description** (Telegram's search-result blurb):
> Get free daily forex scalping signals — tap Start to join the channel.

Suggested bot **about** (shown on the bot's profile):
> Official signal-alert bot for FOREX SCALPING SIGNALS. Message /start to get
> the join link. Contact: @SadiqDtrader
