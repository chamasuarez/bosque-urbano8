import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"Bienvenidos a bosque urbano MADERA PLASTICA"}
      />
      <ItemDetailContainer />
    </>
  );
};

export default App;
