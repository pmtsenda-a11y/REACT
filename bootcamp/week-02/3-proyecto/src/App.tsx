import { useState } from "react";
import Header from "./components/Header";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { Microcredito, FormData } from "./types";

function App() {
  const [microcreditos, setMicrocreditos] = useState<Microcredito[]>([]);

  const addMicrocredito = (data: FormData) => {
    const nuevo: Microcredito = {
      id: Date.now(),
      ...data,
    };

    setMicrocreditos([...microcreditos, nuevo]);
  };

  return (
    <div>
      <Header />
      <ItemForm onAdd={addMicrocredito} />
      <ItemList items={microcreditos} />
    </div>
  );
}

export default App;
