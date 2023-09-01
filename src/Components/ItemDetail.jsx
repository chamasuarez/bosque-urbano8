import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const onAdd = (contador) => {
    alert(contador);
  };
  return (
    <>
      <div className="d-flex flex-colum align-items-center">
        <h3>Detalle de: {p.nombre}</h3>
        <img src="{p.img} " alt="{p.nombre}" />
        <p>${p.descripcion}</p>
        <p>${p.precio}</p>
        <ItemCount initial={1} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
