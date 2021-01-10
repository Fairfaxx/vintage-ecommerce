import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titulo='Bienvenidos a Vintage E-commerce' />
    </div>
  );
}

export default App;
