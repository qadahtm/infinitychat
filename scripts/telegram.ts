// @ts-ignore

import Slimbot from 'slimbot';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { makeChain } from '@/utils/makechain';
import { pinecone } from '@/utils/pinecone-client';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone';


const slimbot = new Slimbot(process.env['TELEGRAM_BOT_TOKEN']);

// Register listeners
slimbot.on('message', (message: any) => {
  handler(message);
});


async function handler(message : any) {
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
  
      console.log('response', response);
      slimbot.sendMessage(message.chat.id, response.text);
    } catch (error: any) {
      console.log('error', error);
      slimbot.sendMessage(message.chat.id, error.message || 'Something went wrong');
    }
  
  }
}

slimbot.on('edited_message', (edited_message: any) => {
  // reply when user edits a message
  slimbot.sendMessage(edited_message.chat.id, 'Message edited');
});

// Call API
slimbot.startPolling();

console.log('polling...');

setTimeout(() => {
  slimbot.stopPolling();
}, 10000);