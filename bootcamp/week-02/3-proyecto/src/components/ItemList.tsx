import { Microcredito } from "../types";
import ItemCard from "./ItemCard";

interface Props {
  items: Microcredito[];
}

const ItemList = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
