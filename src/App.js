import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main';
import Basket from './components/baskets';
import Data from './data';

function App() {

  const {products} = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1 } : x));
    }else{
      setCartItems([...cartItems, { ...product, qty: 1}]);
    }
  };

  const onRemove = (product) =>{
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty === 1){
      setCartItems( cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty -1 } : x));
    }
  }
  return (
    <div className="App">
    <Header countCartItems={cartItems.length}/>
    <div className='row'>
    
    <Main onAdd={onAdd} products={products}/>
    
    <Basket onAdd={onAdd} onRemove={onRemove} cartItems ={cartItems}/>
    </div>

      {/* <footer>
        Created by <strong>SAmuel</strong>
      </footer> */}
    </div>
  );
}

export default App;
