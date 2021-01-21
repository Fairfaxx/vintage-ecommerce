import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App(props) {

  const initialValue = { id: 1, nombre: 'Radio Antigua', precio: 9000 };

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titulo="Bienvenidos a Vintage E-commerce" />
      {/* <ItemCount /> */}
      {/* <ItemList initialValue={initialValue}  */}
      <ItemDetailContainer initialValue={initialValue} />
    </div>
  );
}

export default App;
