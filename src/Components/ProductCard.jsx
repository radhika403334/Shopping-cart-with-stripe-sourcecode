// import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function ProductCard({ product }) {

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title> {product.title} </Card.Title>
        <Card.Text> ${product.price} </Card.Text>
        {
          productQuantity > 0 ?
          <>
          <Form as={Row}>
            <Form.Label column='true' sm='6'>
              In Cart: {productQuantity}
            </Form.Label>
            <Col sm='6'>
              <Button sm='6' className="mx-2" onClick={()=> cart.addOneToCart(product.id)} variant="primary">+</Button>
              <Button sm='6' className="mx-2" onClick={()=> cart.removeOneToCart(product.id)}>-</Button>
            </Col>
          </Form>
          
          </>
          :
        <Button variant="primary" onClick={()=> cart.addOneToCart(product.id)}>Add To Cart</Button>
        }
      </Card.Body>
    </Card>
  );
}
