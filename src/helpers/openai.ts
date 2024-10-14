// import { OPEN_API_PROMPT } from "@/constent";
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPEN_API_KEY,
// });

// import { AxiosError } from "axios";

// export async function openaifn() {
//   try {
//     const chatCompletion = await client.chat.completions.create({
//       messages: [{ role: "user", content: OPEN_API_PROMPT }],
//       model: "gpt-3.5-turbo",
//     });
//     return chatCompletion;
//   } catch (error) {
//     const axiosError = error as AxiosError;

//     if (axiosError.response?.status === 429) {
//       console.error("Quota exceeded: ", axiosError.message);
//       throw new Error("Quota exceeded. Please try again later.");
//     } else {
//       console.error("An error occurred: ", axiosError.message);
//       throw new Error("An error occurred while fetching the message.");
//     }
//   }
// }
