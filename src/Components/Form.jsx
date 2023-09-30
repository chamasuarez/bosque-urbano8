import { useState } from "react";
import { Select, Stack, Spacer } from "@chakra-ui/react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "./CartContext";

const Form = () => {
  const { cart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
1}
  const handleSubmit = (e) => {
    e.preventDefaul();
    nombre === ""
      ? alert("campo nombre vacio")
      : alert(`Bienvenido, ${nombre}`);
    email === ""
      ? alert("campo email vacio")
      : alert(`Registrado con el email, ${email}`);

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    buyer: { nombre, email },
  };
  items: cart.map(({ id, nombre, precio }) => ({
    id,
    nombre,
    precio,
  }));

  const ordersCollection = collection(db, "orden");

  return (
    <>
      <h1>Formulario</h1>

      <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
          <Select placeholder="Nombre" size="md" />
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <Spacer />
          <Select placeholder="Email" size="md" />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer />
          <button type="submit">Enviar</button>
        </form>
      </Stack>

      <h3>`Id de tu compra: $ {orderId}`</h3>
    </>
  );
};

export default Form;
