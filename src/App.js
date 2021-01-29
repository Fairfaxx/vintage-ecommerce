import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { CartContext } from './Context/CartContext';

function App() {

  const initialValue = [
    { id: 1, nombre: 'Radio Antigua', precio: 9000, quantity: 5, categoryId: 1 },
    { id: 2, nombre: 'Reloj Antiguo', precio: 19000, quantity: 5, categoryId: 1 },
    { id: 3, nombre: 'Pulsera Antigua', precio: 15000, quantity: 5, categoryId: 2 },
  ]

  console.log(CartContext);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={0}>
          <Navbar>
            <CartWidget />
          </Navbar>
          <Switch>
            <Route exact path="/" >
              <ItemListContainer initialValue={initialValue} titulo="Bienvenidos a Vintage E-commerce" />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer initialValue={initialValue} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer initialValue={initialValue} />
            </Route>
            <Route exact path="/item/">
              <ItemDetail />
            </Route>
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
