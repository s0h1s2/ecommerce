import { Col, Row } from 'react-bootstrap'
import { useGetProductsQuery } from '../slices/ProductSlice';
import { Product } from '../types/ProductType';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
const HomeRoute = () => {
    const { data: products, isLoading } = useGetProductsQuery()
    return (
        <>
            <h1>Latest Products</h1>
            {isLoading ? <Spinner /> : <Row>
                {products?.map((product: Product) => {
                    return (
                        <Col key={product.ID} sm={12} md={6} lg={4} xl={3}>
                            <ProductCard key={product.ID} product={product} />
                        </Col>
                    );
                })}

            </Row>}
        </>);

}
export default HomeRoute;