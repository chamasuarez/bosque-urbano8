import { useParams } from "react-router-dom";
import { Flex, Square, AbsoluteCenter } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoria } = useParams();

  console.log(categoria);
  
  const productos = [
    {
      id: 1,
      nombre: "Banqueta",
      descripcion:
        "La medida es de 2m x 35 x 45 de alto. Se puede hacer las medida a necesidad del cliente",
      precio: "$ 95.000",
      categoria: "A",
      imagen: "src/assets/img 12.jpg",
    },
    {
      id: 2,
      nombre: "Mesa",
      descripcion:
        "Mesa de 2,45 m x 1,5 x 75 de alto. Se puede hacer las medidas a necesidad del cliente",
      precio: "$ 85000",
      categoria: "B",
      imagen: "src/assets/IMG_E4064.JPG",
    },
    {
      id: 3,
      nombre: "Sillon",
      descripcion:
        "Sillon ancho con apoya brazos para el exterior.Se puede hacer las medidas a necesidad del cliente",
      precio: "$ 75000",
      categoria: "A",
      imagen: "src/assets/img 7.jpg",
    },
    {
      id: 4,
      nombre: "Casita infantil",
      descripcion:
        "Juego CASITA infantil ideal para patios. Se hacen a medida del cliente y colores a gusto",
      precio: "$ 70000",
      categoria: "C",
      imagen: "src/assets/img 6.jpg",
    },
    {
      id: 5,
      nombre: "Reposera",
      descripcion: "Reposera 2m x 64 x 30 de alto. Colores varios",
      precio: "$ 60000",
      categoria: "A",
      imagen: "src/assets/IMG_E4127.JPG",
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
      console.log(error);
    }
  });

  getProductos.then((res) => {}).catch((error) => {});

  const filteredProducts = productos.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <>
      {
      categoria ? (<ItemList productos={filteredProducts} />
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;
