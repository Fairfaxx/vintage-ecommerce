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


function App(props) {

  const initialValue = [
    { id: 1, nombre: 'Radio Antigua', precio: 9000, quantity: 5 },
    { id: 2, nombre: 'Reloj Antiguo', precio: 19000, quantity: 5 },
    { id: 3, nombre: 'Pulsera Antigua', precio: 15000, quantity: 5 },
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <CartWidget />
        </Navbar>
        <Switch>
          <Route exact path="/" >
            <ItemListContainer titulo="Bienvenidos a Vintage E-commerce" />
          </Route>
          <Route exact path="/item/">
            <ItemDetailContainer initialValue={initialValue} />
          </Route>
          <Route exact path="/item/:1">
            <ItemDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
