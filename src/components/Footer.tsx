import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
  const currentYear:number=new Date().getFullYear();
  return (
    <footer>
    <Container>
        <Row>
            <Col className="text-center py-3">
                <p>Online Shop &copy; {currentYear}</p>
            </Col>
        </Row>
    </Container>
    </footer>
  )
}
export default Footer;