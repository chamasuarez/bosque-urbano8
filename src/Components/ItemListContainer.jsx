import { useParams } from "react-router-dom";
import { Flex, Square, AbsoluteCenter } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  
  const {categoria}= useParams ()
  console.log(categoria);

  const [products, setProducts] = useState ([])
  console.log (products)

useEffect (( ) => {

  const db = getFirestore ()

  const itemsCollection = collection (db, `${categoria}`)
  getDocs(itemsCollection).then(( snapshot ) => {
    const docs = snapshot.docs.map ((doc) => 
    ({
          ...doc.data (), id: doc.id
    }))
    setProducts (docs)
})
  }, []) 
  const filteredProducts = products.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <>
      {
      categoria ? (<ItemList productos={filteredProducts} />
      ) : (
        <ItemList products={products} />
      )
      }
      
    </>
  );
};

export default ItemListContainer;
