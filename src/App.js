import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import {useState} from "react";
function App() {
    const [cart, updateCart] = useState([])
  return (
      <div>
        <Banner>
            <img src={logo} className="lmj-logo" alt="jungle-house logo"/>
            <h1 className='lmj-title'>La maison de la Jungle</h1>
        </Banner>
          <div>
              <Cart cart={cart} updateCart={updateCart}/>
              <ShoppingList cart={cart} updateCart={updateCart}/>
          </div>

      </div>

  );
}

export default App;
