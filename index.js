import OpenAI from 'openai';

// open api key is set though env variables
const openai = new OpenAI();

const main = async () => {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'What is the capital of UK'
      }
    ]
  });

  console.log(chatCompletion.choices);
};

main();
