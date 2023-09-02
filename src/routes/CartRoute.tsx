import { Col, ListGroup, Image, Row, Form, Button, Card } from "react-bootstrap";
import { useAppSelector } from "../hooks";
import { HOME, PRODUCT_DETAIL } from "../constants/routeNames";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartRoute = () => {
    const { cartItems } = useAppSelector(state => state.cart)
    const [qty, setQty] = useState(1);
    return (
        <Row>
            <Col md={8} >
                <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
            </Col>
            {cartItems.length === 0 ? (<h4 className="text-muted text-center">Your cart is empty <Link to={HOME}>go back</Link></h4>) : (
                <Col md={8}>
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.ID}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`${PRODUCT_DETAIL.replace(":id", item.ID.toString())}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                            {[...Array(item?.stock).keys()].map((x) => {
                                                x = x + 1
                                                return <option key={x} value={x}>{x}</option>
                                            })}
                                        </Form.Control>

                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light">
                                            <FaTrash />
                                        </Button>
                                    </Col>

                                </Row>

                            </ListGroup.Item>

                        )
                        )

                        }
                    </ListGroup>
                </Col>
            )}
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>Subtotal {cartItems.reduce((acc, item) => acc + item.qty, 0)}</h2>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row >
    );
}
export default CartRoute