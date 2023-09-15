import { Row, Col, ListGroup, Button, Card, Image } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetOrderByIdQuery } from "../slices/OrderApiSlice"
import Spinner from "../components/Spinner";
import { PRODUCT_DETAIL } from "../constants/routeNames";
const OrderDetailRoute = () => {
  const { id } = useParams();
  const result = parseInt(id ?? "")
  const navigate = useNavigate()
  if (!result) {
    navigate(-1)
  }
  const { data, isLoading } = useGetOrderByIdQuery(result);
  const order = data?.order
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-muted">Order {order?.id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>{order?.user.name}
              </p>
              <p>
                <strong>Email: </strong>{order?.user.email}
              </p>
              <p>
                <strong>Address: </strong>{order?.address},{order?.city}{' '},{order?.postalCode}{' '},
                {order?.country}
              </p>
              <p>
                <strong>Deliever Status: </strong> {order?.isDelivered ? order?.deliveredTime : "No"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-muted">Payment Method</h2>
              <p>
                <strong>Payment Method: </strong> Delivery Payment
              </p>
              <p>
                <strong>Paid Status: </strong> {order?.isPaid ? "Yes" : "No"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-muted">Order Items</h2>
              {order?.orderItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.Product.image} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`${PRODUCT_DETAIL.replace(":id", item.productId.toString())}`}>
                        {item.Product.name}
                      </Link>
                    </Col>
                    <Col md={4}>
                      {item.qty} X ${item.Product.price}=${item.qty * item.Product.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup.Item>


          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Price:</Col>
                  <Col>${order?.totalPrice}</Col>
                </Row>
                <Row>
                  <Col>Items Price:</Col>
                  <Col>${order?.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping Price:</Col>
                  <Col>${order?.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax Price:</Col>
                  <Col>${order?.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2 ">
                  <Button>Generate Invoice</Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row >
    </>
  )
}

export default OrderDetailRoute
