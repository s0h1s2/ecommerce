import { Col, ListGroup, Row, Image, Card, Button, Spinner, ToastContainer } from 'react-bootstrap'
import { useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'
import { PRODUCT_DETAIL } from '../constants/routeNames'
import { useCreateOrderMutation } from '../slices/OrderApiSlice'
import { toast } from 'react-toastify'

const OrderProduct = () => {
  const [createOrder, { isLoading, isError, error }] = useCreateOrderMutation()
  const { shippingAddress, paymentMethod, cartItems, totalPrice } = useAppSelector((state) => state.cart)

  async function placeOrderHandler() {
    const orderItems = cartItems.map((item) => ({ qty: item.qty, productId: item.id }))
    const res = await createOrder({
      orderItems: orderItems,
      ...shippingAddress
    }).unwrap().catch((e) => {

      toast.error(e.data)
    })
    toast.success("Order was successful")
    if (isError) {
    }
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
