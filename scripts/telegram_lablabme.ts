// @ts-ignore

import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { makeChain } from '@/utils/makechain';
import { pinecone } from '@/utils/pinecone-client';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone';
import { Bot } from "grammy";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env['TELEGRAM_BOT_TOKEN_LLME'] || ""); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
// bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => handler(ctx.message, ctx));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();

async function handler(message : any, ctx : any) {
  const history = "";
  const question = message.text;
  // console.log(JSON.stringify(message));
  // reply when user sends a message
  var rmsg = "";
  if (!question) {
    rmsg = "empty question";    
  }
  else{
    const sanitizedQuestion = question.trim().replaceAll('\n', ' ');
    try {
      const index = pinecone.Index(PINECONE_INDEX_NAME);
  
      /* create vectorstore*/
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({}),
        {
          pineconeIndex: index,
          textKey: 'text',
          namespace: PINECONE_NAME_SPACE, //namespace comes from your config folder
        },
      );
  
      //create chain
      const chain = makeChain(vectorStore);
      //Ask a question using chat history
      const response = await chain.call({
        question: sanitizedQuestion,
        chat_history: history || [],
      });
  
      // console.log('response', response);
      ctx.reply(response.text);
    } catch (error: any) {
      console.log('error', error);
      ctx.reply(error.message || 'Something went wrong');
    }
  
  }
}
