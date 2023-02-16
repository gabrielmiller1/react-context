import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const { cart, setCart } = useContext(CartContext);

    function changeQuantity(id, quantity) {
        return cart.map(cartItem => {
            if (cartItem.id === id) cartItem.quantidade += quantity;
            return cartItem;
        })
    }


    function addProduct(newProduct) {
        const hasProduct = cart.some(cartItem => cartItem.id === newProduct.id);

        if (!hasProduct) {
            newProduct.quantidade = 1;
            return setCart(previusCart => [...previusCart, newProduct])
        }

        setCart(changeQuantity(newProduct.id, 1))
    }

    function removeProduct(id) {
        const product = cart.find(cartItem => cartItem.id === id);
        const lastProduct = product.quantidade === 1;

        if (lastProduct) {
            return setCart(previusCart => previusCart.filter(cartItem => cartItem.id !== id))
        }
        setCart(changeQuantity(id, -1))
    }

    return {
        cart,
        setCart,
        addProduct,
        removeProduct
    }
}