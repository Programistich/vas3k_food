require('dotenv').config();
import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

const keyboard = Markup.inlineKeyboard([
  Markup.button.url('Хочу кушац ❤️', 'https://vas3k.club/'),
  Markup.button.callback('Не хочу', 'delete'),
]);

bot.start((ctx) => ctx.reply('Хотите покушац?', keyboard));

bot.action('delete', (ctx) => ctx.deleteMessage());
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
