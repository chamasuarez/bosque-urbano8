import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";
import {CartProvider} from "./context/CartContext";


const App = () => {
  return (
    <>
    <CartProvider>
   
       <BrowserRouter>
         <NavBar />
 
         <Routes>
     
           <Route exact path="/cart" element={<Cart />} />
           <Route exact path="/" element={<ItemListContainer />} />
           <Route
             exact
             path="/categoria/:categoria"
             element={<ItemListContainer />}
           />
           <Route exact path="/item/:id" element={<ItemDetailContainer />} />
           <Route exact path="/chechout" element={<Form/>} />
         </Routes>
       </BrowserRouter>
       </CartProvider>
       
     </>
   );
 };
 

export default App;
