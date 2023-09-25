import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "Bosque", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      }
    });
  }, []);

  return (
    <div>
      <h1>Producto</h1>
      {
        <div>
          <ItemDetail product={product} />
        </div>
      }
    </div>
  );
};

export default ItemDetailContainer;
