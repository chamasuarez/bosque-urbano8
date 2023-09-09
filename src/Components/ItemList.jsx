import Item from "./Item";
import React from "react";

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map((p) => {
        return (
        <>
        <Item producto={p} key= {p.id} />;
        </>
        )
      })
      }
    </div>
  );
};

export default ItemList;
