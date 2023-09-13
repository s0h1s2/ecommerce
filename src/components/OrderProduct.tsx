import { Button, Card, Col, Image, ListGroup, Row, Spinner } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ORDER_DETAIL, PRODUCT_DETAIL } from '../constants/routeNames'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useCreateOrderMutation } from '../slices/OrderApiSlice'
import { clearCart } from '../slices/CartSlice'

const OrderProduct = () => {
  const [createOrder, { isLoading }] = useCreateOrderMutation()
  const { shippingAddress, cartItems, totalPrice } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  async function placeOrderHandler() {
    const orderItems = cartItems.map((item) => ({ qty: item.qty, productId: item.id }))
    await createOrder({
      orderItems: orderItems,
      ...shippingAddress
    }).unwrap().then((r) => {
      toast.success("Order was successful")
      dispatch(clearCart())
      navigate(`${ORDER_DETAIL.replace(":id", r.order.id)}`)
    }).catch((e) => {
      toast.error(e.data)
    })
  }
  return (
    <Row>
      <Col md={8}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>Shipping</h2>
            <p>
              <strong>Address:</strong>
              {shippingAddress?.address},{shippingAddress?.city},{shippingAddress?.postalCode},{shippingAddress?.country}
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <strong>Method:</strong>
            Delivery Payment
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order items</h2>
            {cartItems.length === 0 ? (<h2 className='text-muted'>Your cart is empty</h2>) : (
              <ListGroup variant="flush">
                {cartItems.map((product) => {
                  return (
                    <ListGroup.Item key={product.id}>
                      <Row>
                        <Col md={1}>
                          <Image src={product.image} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`${PRODUCT_DETAIL}/${product.id}`}>{product.name}</Link>
                        </Col>
                        <Col md={4}>
                          {product.qty} x ${product.price}=${product.qty * product.price}
                        </Col>

                      </Row>
                    </ListGroup.Item>
                  )

                })}
              </ListGroup>
            )}
          </ListGroup.Item>

        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Order Summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping Cost</Col>
                <Col>$0</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax Price</Col>
                <Col>$1</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total Price</Col>
                <Col>${totalPrice + 1}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button disabled={cartItems.length === 0} onClick={placeOrderHandler} >{isLoading ? <Spinner size="sm" /> : "Order"}</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row >

  )
}

export default OrderProduct

