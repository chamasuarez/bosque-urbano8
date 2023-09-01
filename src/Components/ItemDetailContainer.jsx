import { useEffect, useState } from 'react';
import {getItem} from './asyncmock/data';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [producto,setProducto] = useState ({})

  useEffect (()  => {
      getItem () 
      .then ((resultado) => {
      setProducto(resultado);
      });
    },[])
      .catch((inexistente) => {
        console.log(inexistente);
        },[])


return (
<div>
<ItemDetail producto= {producto}/>
</div>

)
}

export default ItemDetailContainer