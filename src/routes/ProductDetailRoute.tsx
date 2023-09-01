import { Link, useParams } from 'react-router-dom'
import { HOME } from '../constants/routeNames';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductByIdQuery } from '../slices/ProductSlice';
import Spinner from '../components/Spinner';
import { useState } from 'react';
import { addToCart } from '../slices/CartSlice';
import { useAppDispatch } from '../hooks';
const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(parseInt(id!));
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();
  function addToCartHandler(): void {
    dispatch(addToCart({ ...product!, qty: qty }));
  }
  return (
    isLoading ? <Spinner /> :
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
                <Rating rate={product?.rating!} numberOfReviews={product?.numberOfReviews!} />
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
                    <Col><strong>{product?.stock! > 0 ? 'in Stock' : 'Out of stock'}</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product?.price}</strong></Col>
                  </Row>
                </ListGroup.Item>
                {product?.stock! > 0 &&
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                          {[...Array(product?.stock).keys()].map((x) => {
                            x = x + 1
                            return <option key={x} value={x}>{x}</option>
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                }
                <ListGroup.Item>
                  <Button className='btn-block' type="button" disabled={product?.stock === 0 ? true : false} onClick={addToCartHandler}>
                    Add To Cart
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