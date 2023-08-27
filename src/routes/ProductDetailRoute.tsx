import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../products';
import { HOME } from '../constants/routeNames';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p._id == id);
  return (
    <>
      <Link className='btn btn-light my-3' to={HOME}>Go Back</Link>
      <Row>
        <Col md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rate={product?.rating} numberOfReviews={product?.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price:${product?.price}
            </ListGroup.Item>
            <ListGroup.Item>
              {product?.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col><strong>{product?.countInStock>0?'in Stock':'Out of stock'}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product?.price}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type="button" disabled={product?.countInStock==0}>
                  Add To Product
                </Button>
              </ListGroup.Item>



            </ListGroup>
          </Card>

        </Col>



      </Row>
    </>
  )
}

export default ProductDetail