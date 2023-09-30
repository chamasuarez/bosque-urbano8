import { useParams } from "react-router-dom";
import React, { useContext} from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./CartContext"

const ItemDetail = ({ product }) => {

  const { id } = useParams ()
  const {addItem} = useContext (CartContext);

  const onAdd = (quantity) => {
    addItem (product, quantity)
   }
  
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
            <h3>Precio: $ <span>{product.precio} </span></h3>
            <ItemCount onAdd={onAdd} />
          </div>
        
      
    </div>
  );
};


export default React.memo(ItemDetail);
