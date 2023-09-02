import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap"
import { SIGN_IN, CART, HOME } from "../constants/routeNames";
import { useAppSelector } from "../hooks";
const Header = () => {
    const { cartItems } = useAppSelector(state => state.cart)
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to={HOME}>
                        <Navbar.Brand>Online Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to={CART}>
                                <Nav.Link><FaShoppingCart /> Cart<Badge pill style={{ marginLeft: "5px" }}>{cartItems.reduce((acc, p) => p.qty + acc, 0)}</Badge> </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={SIGN_IN}>
                                <Nav.Link><FaUser />Sign in</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    );
}
export default Header;