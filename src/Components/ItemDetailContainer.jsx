import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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
      <h1>PRODUCTO</h1>
      <ItemDetail product={product}></ItemDetail>
    </div>
  );
  ;
};

export default ItemDetailContainer;
