import { useParams } from "react-router-dom";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {

  const { id } = useParams ()
  
  const filteredProducts = productos.filter((producto) => producto.id == id);

  return (
    <div className="d-flex flex-colum align-items-center">
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <h3>Detalle de: {p.nombre}</h3>
            <img src={p.imagen} alt={p.nombre} />
            <p>{p.descripcion}</p>
            <p>{p.categoria}</p>
            <ItemCount />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemDetail);
