import '../styles/Cart.css'
import { useState } from "react";

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <h2 className='lmj-cart'>Panier</h2>
            <div>
                Monstera : {monsteraPrice} XAF
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            </div>
            <h3>Total : {monsteraPrice * cart} XAF</h3>
            <button onClick={() => updateCart(0)}>Vider le Panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>

    )
}

export default Cart