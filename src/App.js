import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartContainer from './components/Cart/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { Context } from './CartContext/CartContext';

function App() {

  // const initialValue = [
  //   { id: 1, nombre: 'Radio Antigua', precio: 9000, quantity: 5, categoryId: 1 },
  //   { id: 2, nombre: 'Reloj Antiguo', precio: 19000, quantity: 5, categoryId: 1 },
  //   { id: 3, nombre: 'Pulsera Antigua', precio: 15000, quantity: 5, categoryId: 2 },
  //   { id: 4, nombre: 'Televisor Antiguo', precio: 11000, quantity: 5, categoryId: 2 },
  // ]



  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Navbar>
            <CartWidget />
          </Navbar>
          <Switch>
            <Route exact path="/" >
              <ItemListContainer titulo="Bienvenidos a Vintage E-commerce" />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            {/* <Route exact path="/cart/">
              <CartContainer />
            </Route> */}
            <Route path="/test">
              <CartContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
