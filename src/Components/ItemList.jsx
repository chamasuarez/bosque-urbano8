import React from "react";
import React from "./Item";

const ItemList = ({producto}) => {
  return (
    <div>
      {producto.map((p) => {
        return <Item producto={p} />;
      })}{" "}
    </div>
  );
};

export default ItemList;
