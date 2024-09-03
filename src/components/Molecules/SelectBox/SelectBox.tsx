import { ChangeEvent, Dispatch, SetStateAction } from "react";
import style from "./SelectBox.module.scss";
import { ListOption } from "@/types/common"; // Tipizzazione per le opzioni della lista

interface SelectBoxProps {
  label: string; 
  list: ListOption[]; // Lista delle opzioni
  setAction: Dispatch<SetStateAction<string>>; // Funzione per gestire la selezione
}

const SelectBox = (props: SelectBoxProps) => {
  const { label, list, setAction } = props; 

  // Funzione per gestire il cambiamento di selezione
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAction(e.target.value);
  };

  return (
    <div className={style.main}>
      <h3>{label}</h3> 
      <select id="select" onChange={handleChange} title="Seleziona genere">
        <option value="" hidden>
          Seleziona {/* Opzione predefinita nascosta */}
        </option>
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label} {/* Visualizza le opzioni della lista */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox; 
