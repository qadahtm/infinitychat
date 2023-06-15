import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { LLMChain, loadQAChain, ChatVectorDBQAChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`بالنظر إلى المحادثة التالية وسؤال المتابعة ، أعد صياغة سؤال المتابعة ليكون سؤالاً مستقلاً.

  تاريخ الدردشة:
{chat_history}
متابعة المدخلات: {question}
سؤال مستقل:`);

const QA_PROMPT =
  PromptTemplate.fromTemplate(`أنت مساعد AI مفيد. استخدم أجزاء السياق التالية للإجابة على السؤال في النهاية.
  إذا كنت لا تعرف الإجابة ، قل فقط أنك لا تعرف. لا تحاول اختلاق إجابة.
  إذا لم يكن السؤال متعلقًا بالسياق ، فأجب بأدب أنك مضبوط للإجابة فقط على الأسئلة المتعلقة بالسياق.

{context}

السؤال: {question}
إجابة مفيدة:`);

export const makeChain = (vectorstore: PineconeStore) => {
  const questionGenerator = new LLMChain({
    llm: new OpenAI({ temperature: 0.2 }),
    prompt: CONDENSE_PROMPT,
  });

  const docChain = loadQAChain(
    //change modelName to gpt-4 if you have access to it
    new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' }),
    {
      prompt: QA_PROMPT,
    },
  );

  return new ChatVectorDBQAChain({
    vectorstore,
    combineDocumentsChain: docChain,
    questionGeneratorChain: questionGenerator,
    returnSourceDocuments: true,
    k: 2, //number of source documents to return. Change this figure as required.
  });
};
