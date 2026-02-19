import { useState } from "react";
import { FormData, EstadoCredito } from "../types";

interface Props {
  onAdd: (data: FormData) => void;
}

const ItemForm = ({ onAdd }: Props) => {
  const [form, setForm] = useState<FormData>({
    cliente: "",
    monto: 0,
    tasaInteres: 0,
    plazoMeses: 0,
    estado: "pendiente",
    fechaSolicitud: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="cliente" placeholder="Nombre del cliente" onChange={handleChange} />
      <input name="monto" type="number" placeholder="Monto" onChange={handleChange} />
      <input name="tasaInteres" type="number" placeholder="Tasa de interés (%)" onChange={handleChange} />
      <input name="plazoMeses" type="number" placeholder="Plazo en meses" onChange={handleChange} />
      <input name="fechaSolicitud" type="date" onChange={handleChange} />

      <select name="estado" onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="aprobado">Aprobado</option>
        <option value="rechazado">Rechazado</option>
        <option value="pagado">Pagado</option>
      </select>

      <button type="submit">Agregar Microcrédito</button>
    </form>
  );
};

export default ItemForm;
