import Head from "next/head";
import style from "@/styles/Home.module.css";
import Header from "@/components/Molecules/Header/Header";
import WindowBox from "@/components/Organism/WindowBox/WindowBox";
import Input from "@/components/Atoms/Input/Input";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { useState } from "react";
import { listaGeneri } from "@/constants/common";
import Button from "@/components/Atoms/Button/Button";
import {
  GenerateContentCandidate,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import SwitchBox from "@/components/Molecules/SwitchBox/SwitchBox";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");
  const [pegi18, setPegi18] = useState(false);
  const [luogo, setLuogo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  
  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `genera un racconto ${genere} per ${
    pegi18 ? "adulti" : "bambini"
    }, con il protagonista chiamato ${protagonista} e l'antagonista chiamato ${antagonista}.`;
    
    if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
      if (
        protagonista.trim().length > 0 &&
        antagonista.trim().length > 0 &&
        genere.trim().length > 0
      ) {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GEMINI_KEY
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        
        const output = (
          result.response.candidates as GenerateContentCandidate[]
        )[0].content.parts[0].text;
        
        if (output) {
          setResponse(output);
        }
      }
    }
    setLoading(false);
  };
  
  return (
    <>
    <Head>
    <title>Ai Story Teller</title>
    <meta name="description" content="AI based app to generate stories" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={style.main}>
    <Header title="AI Story Teller" />
    <div className={style.content}>
    <WindowBox title="Story Params">
    <div className={style.container}>
    <Input
    label="Nome Protagonista:"
    value={protagonista}
    setValue={setProtagonista}
    />
    <Input
    label="Nome Antagonista:"
    value={antagonista}
    setValue={setAntagonista}
    />
    <Input
    label="Luogo della storia:"
    value={luogo}
    setValue={setLuogo}
    />
    <SelectBox
    label="Genere:"
    list={listaGeneri}
    setAction={setGenere}
    />
    <SwitchBox
    label="Per Adulti:"
    value={pegi18}
    setValue={setPegi18}
    />
    </div>
    <div className={style.container}>
    <textarea 
    className={style.textareaForm}
    value={descrizione}
    onChange={(e) => setDescrizione(e.target.value)}
    placeholder="Inserisci una descrizione dettagliata..."
    />
    </div>
    <div className={style["button-container"]}>
    <Button
    label="Genera"
    onClick={handleGenerate}
    disabled={
      protagonista.trim().length <= 0 ||
      antagonista.trim().length <= 0 ||
      genere.trim().length <= 0 ||
      loading
    }
    />
    </div>
    {loading ? (
      <div className={style.loading}>
      <p className={style.loadingText}>Loading...</p>
      </div>
    ) : (
      <div className={style.result}>{response}</div>
    )}
    </WindowBox>
    </div>
    </main>
    </>
  );
}
