import {
  GoogleGenAI,
} from '@google/genai';

const APIKEY = import.meta.env.VITE_GEMINI_API_KEY;

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: APIKEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.0-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

export default main;
