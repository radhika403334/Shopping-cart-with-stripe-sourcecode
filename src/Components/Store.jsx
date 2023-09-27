import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { productsArray } from './ProductStore';
import ProductCard from './ProductCard';

export default function Store() {
  return (
    <>
    <h1 align='center' className='p-3'>Welcome to the Store!</h1>
      <Row xs={1} sm={2} md={3} className='g-4'>
        { productsArray.map((product, index) => (
          <Col align='center' key={index}>
            <ProductCard product={product} />
          </Col>
        )) }
        
      </Row>
    </>
  )
}
/*
a) g-4, g = gutter = Each column has horizontal padding called a gutter.
b) we are using () in map -> arrow function, instead of curly braces bcz with () we are saying that this will return jsx.
*/
