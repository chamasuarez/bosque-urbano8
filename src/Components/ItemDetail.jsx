import { useParams } from "react-router-dom";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

  const { id } = useParams ()
  
  return (
    <div className="margin-top-70"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      size:"xl"
    }}>
          <div >
            <h3>Detalle del producto: {product.nombre}</h3>
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p>Categoria: {product.categoria}</p>
            <ItemCount />
          </div>
        
      
    </div>
  );
};


export default React.memo(ItemDetail);
