import '../styles/Cart.css'
import { useState } from "react";

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)

    return(
        <div>
            <h2 className='lmj-cart'>Panier</h2>
            <div>
                Monstera : {monsteraPrice}$
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}$</h3>
        </div>
    )
}

export default Cart