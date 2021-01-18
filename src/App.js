import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titulo='Bienvenidos a Vintage E-commerce' />
      <ItemCount />
      <ItemList />
    </div>
  );
}

export default App;
