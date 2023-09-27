import { createContext, useState } from "react";
import { productsArray, getProductData } from "./ProductStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: ()=>{},
    addOneToCart: ()=>{},
    removeOneToCart: ()=>{},
    deleteFromCart: ()=>{},
    getTotalCost: ()=>{}
});

export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useState([]);
// cart Products would look like, [ {id:1, quantity:2}], basically products in cart info

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if(quantity === undefined) return 0;

        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 0) { // product is not in cart
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1
                }
            ]);
        } else { // product is already in cart
            setCartProducts(cartProducts.map(product => (
                product.id===id ? {...product, quantity: product.quantity+1} : product
            )));
        }
    }
    function removeOneToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 1) { deleteFromCart(id); }
        else {
            setCartProducts(cartProducts.map(product => (
                product.id===id ? {...product, quantity: product.quantity-1} : product
            )));
        }
    }
    function deleteFromCart(id){
        setCartProducts(cartProducts => {
            cartProducts.filter(product => { return product.id !== id })
        });
    }
    
    function getTotalCost(){
        let totalCost = 0;
        cartProducts.forEach(cartItem => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * productData.quantity);
    });
        return totalCost;
    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;





