import { GoogleGenAI } from "@google/genai";

export const getGeminiClient = () => {
  return new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });
};
