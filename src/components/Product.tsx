import { Card } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Rating from './Rating'
const Product = ({ product }) => (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img className="img-fluid" src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Subtitle>
                    <Rating rate={product.rating}/>
                </Card.Subtitle>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Link>
        </Card.Body>

    </Card>
)
export default Product