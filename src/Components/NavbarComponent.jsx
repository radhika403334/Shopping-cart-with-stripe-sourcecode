// import React from 'react';
import { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from './CartContext';
import CartProduct from './CartProduct';

export default function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleShow = ()=> setShow(true);
  const handleClose = ()=> setShow(false);
  
  let productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const cartCost = cart.getTotalCost().toFixed(2);
  const checkout = async ()=>{
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url){
        window.location.assign(response.url); 
        // forwarding user to stripe
      }
    })
  }
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Sopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart Items: {productsCount}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Shopping Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
          <>
          <p>Item in your cart: </p>
          {cart.items.map((currProduct, index) => (
            <CartProduct id={currProduct.id} quantity={currProduct.quantity} key={index} > </CartProduct>
          ))} 
          <h2>Total cost: {cartCost}</h2>
          
          <Button variant="success" className='my-1' onClick={checkout}>Buy now</Button>
          </>
          : <h3>No items added to your cart</h3>
        }
        </Modal.Body>
      </Modal>


      {/* a) show is a property that defines if modal is being showed or not 
        b) onShow: It is used to trigger a callback when the Modal is opening.
        c) onHide: It is used to trigger a callback when the Modal is closing.
        d) closeButton is a property to create a cross button 
        */}
    </>
  )
}

/* 
    a) expand property is telling us that in small screens the navbar will collapse accordingly.
    b) Navbar.Brand is like the websites title which appears in the left
    c) Navbar.Toggle, is used to tell the browser when and which component needs to be collapsed in small screens with the help of Navbar.Collapse
    d) justify-content-end is similar to space 
    between
    e) Modals are useful web components to create an attractive layout for the user notification, lightbox
*/


