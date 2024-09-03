// Import necessari
import { Dispatch, SetStateAction } from "react";
import style from "./Input.module.scss";

interface InputProps {
  label: string; // Etichetta per il campo di input
  value: string; // Valore attuale del campo di input
  setValue: Dispatch<SetStateAction<string>>; // Funzione per aggiornare il valore
}

const Input = (props: InputProps) => {
  const { label, value, setValue } = props; // Destrutturazione delle props

  return (
    <div className={style.main}>
      <h3>{label}</h3> 
      <input
      title="input nome"
        value={value} 
        onChange={(e) => setValue(e.target.value)} // Aggiorna il valore quando l'input cambia
        type="text" 
      />
    </div>
  );
};

export default Input; 
