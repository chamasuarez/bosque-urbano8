import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection)
      .then((snapshot) => {
        console.log(snapshot);
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(docs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemList productos={products} />
    </>
  );
};

export default ItemListContainer;
