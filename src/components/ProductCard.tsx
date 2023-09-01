import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Rating from './Rating'
import { Product } from '../types/ProductType'
type ProductCardProps = {
    product: Product
}
const ProductCard = ({product}:ProductCardProps) => (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.ID}`}>
            <Card.Img className="img-responsive img-fluid" src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.ID}`}>
                <Card.Subtitle>
                </Card.Subtitle>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    <Rating numberOfReviews={product.numberOfReviews} rate={product.rating} />
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Link>
        </Card.Body>

    </Card>
)
export default ProductCard