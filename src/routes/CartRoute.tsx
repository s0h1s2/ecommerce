import { Button, Card, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HOME, PRODUCT_DETAIL } from "../constants/routeNames";
import { useAppSelector, useAppDispatch } from "../hooks";
import { Product } from "../types/ProductType";
import { addToCart, removeFromCart } from "../slices/CartSlice";

const CartRoute = () => {
    const { cartItems } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch();
    function changeProductQty(item: Product, qty: number): void {
        dispatch(addToCart({ ...item, qty }));
    }

    function removeFromCartHandler(id: number) {
        dispatch(removeFromCart({ id }));
    }
    return (
        <Row>
            <Col md={8} >
                <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
            </Col>
            {cartItems.length === 0 ? (<Col md={8}><h4 className="text-muted text-center">Your cart is empty <Link to={HOME}>go back</Link></h4> </Col>) : (
                <Col md={8}>
                    <ListGroup variant="flush">
                        {cartItems.map((item) => {
                            return (
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
                                            <Form.Control as="select" value={item.qty} onChange={(e) => changeProductQty(item, Number(e.target.value))}>
                                                {[...Array(item?.stock).keys()].map((x) => {
                                                    x = x + 1;
                                                    return <option key={x} value={x}>{x}</option>;
                                                })}
                                            </Form.Control>

                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.ID)}>
                                                <FaTrash />
                                            </Button>
                                        </Col>

                                    </Row>

                                </ListGroup.Item>

                            );
                        }
                        )

                        }
                    </ListGroup>
                </Col>
            )}
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button disabled={cartItems.length == 0 ? true : false}>Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row >
    );
}
export default CartRoute