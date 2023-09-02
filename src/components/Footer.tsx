import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h5 className="text-muted">Online Shop &copy; {currentYear}</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;