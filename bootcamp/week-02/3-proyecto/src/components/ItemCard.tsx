import { Microcredito } from "../types";

interface Props {
  item: Microcredito;
}

const ItemCard = ({ item }: Props) => {
  return (
    <div className="card">
      <h3>{item.cliente}</h3>
      <p>Monto: ${item.monto}</p>
      <p>Interés: {item.tasaInteres}%</p>
      <p>Plazo: {item.plazoMeses} meses</p>
      <p>Estado: {item.estado}</p>
      <p>Fecha: {item.fechaSolicitud}</p>
    </div>
  );
};

export default ItemCard;
