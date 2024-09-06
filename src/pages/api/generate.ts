import { GenerateContentCandidate, GoogleGenerativeAI } from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from "next";

// Definizione dell'interfaccia per il body della richiesta
interface BodyI {
  prompt: string;
  action: "generateStory" | "analyzeStory"; // Aggiunto per distinguere tra generazione e analisi
}

// Funzione principale per gestire le richieste API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method === "POST") {
    const { prompt, action } = req.body as BodyI;

    // Controllo se il prompt è presente
    if (!prompt) {
      return res.status(400).json("Body mancante");
    }

    // Controllo se la chiave API di Gemini è presente
    if (!process.env.NEXT_PUBLIC_GEMINI_KEY) {
      return res.status(400).json({ ok: false, message: "Chiave API di Gemini mancante" });
    }

    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Distinzione tra generazione del racconto e analisi del racconto
      let result;

      if (action === "generateStory") {
        // Genera il racconto
        result = await model.generateContent(prompt);
      } else if (action === "analyzeStory") {
        // Analizza il racconto generando domande e risposte
        const analyzePrompt = `Leggi il seguente racconto e genera alcune domande pertinenti con le relative risposte:\n\n"${prompt}"\n\nDomande e risposte:`;
        result = await model.generateContent(analyzePrompt);
      } else {
        return res.status(400).json({ ok: false, message: "Azione non riconosciuta" });
      }

      // Estrazione dell'output dal risultato del modello
      const output = (
        result.response.candidates as GenerateContentCandidate[]
      )[0].content.parts[0].text;

      // Verifica che l'output sia stato generato correttamente
      if (output) {
        res.status(200).json({ ok: true, message: output });
      } else {
        res.status(400).json({ ok: false, message: "Errore nella generazione dell'output" });
      }
    } catch (e) {
      console.error("Errore durante la generazione:", e);
      res.status(400).json({ ok: false, message: "Errore nella generazione" });
    }
  } else {
    res.status(405).json("Metodo non gestito");
  }
}
