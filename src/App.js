import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titulo='Bienvenidos a Vintage E-commerce' />
      <ItemCount />
    </div>
  );
}

export default App;
