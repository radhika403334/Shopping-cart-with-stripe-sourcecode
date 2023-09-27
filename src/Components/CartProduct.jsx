import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { getProductData } from './ProductStore';

export default function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

  return (
    <>
      <h3> {productData.title} </h3>
      <p> total quantity: {quantity} </p>
      <p> Price: ${(productData.price * quantity).toFixed(2)} </p>
      <Button variant='danger' size='sm' onClick={() => cart.deleteFromCart(id)}>Remove Item</Button>
      <hr />
    </>
  )
}
