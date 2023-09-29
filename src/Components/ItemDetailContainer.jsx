import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      }
    });
  }, [id]);

  return (
    <div>
      <h1>PRODUCTO</h1>
      {
        <div
          className="margin-top-70"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            size: "xl",
          }}
        >
          <h2>Producto {product.nombre} </h2>
          <img src={product.imagen} alt="" />
          <h3> Descripcion: {product.descripcion} </h3>
          <p >Precio: $ {product.precio} </p>
        </div>
      }
    </div>
  );z
};

export default ItemDetailContainer;
