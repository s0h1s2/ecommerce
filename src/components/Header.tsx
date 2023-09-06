import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap"
import { SIGN_IN, CART, HOME, PROFILE } from "../constants/routeNames";
import { useAppDispatch, useAppSelector } from "../hooks";
import { logout } from "../slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
    const { cartItems } = useAppSelector(state => state.cart)
    const { userInfo } = useAppSelector(state => state.auth)
    const dispatch=useAppDispatch()
    const path=useLocation()
    const navigate=useNavigate() 
    function handleLogout(){
      dispatch(logout())
      navigate(SIGN_IN)
    } 
    return (
        <header>
            <Navbar  bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to={HOME}>
                        <Navbar.Brand>Online Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={path.pathname} className="ms-auto">
                            <LinkContainer to={CART}>
                                <Nav.Link><FaShoppingCart /> Cart<Badge pill style={{ marginLeft: "5px" }}>{cartItems.reduce((acc, p) => p.qty + acc, 0)}</Badge> </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown drop="down-centered" title={userInfo.name} id="username">
                            <LinkContainer to={PROFILE}>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>

                        ) : (
                        <LinkContainer to={SIGN_IN}>
                            <Nav.Link><FaUser />Sign in</Nav.Link>
                        </LinkContainer>

                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        </header >
    );
}
export default Header;
