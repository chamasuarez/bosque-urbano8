import Item from "./Item";

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map((p) => {
        return <Item productos={p} key= {p.id} />;
      })}
    </div>
  );
};

export default ItemList;
