import { Col, Row } from 'react-bootstrap'
import { useGetProductsQuery } from '../slices/ProductSlice';
import  {Product}  from '../types/ProductType';
import ProductCard from '../components/ProductCard';
const HomeRoute = () => {
    const { data:products, isLoading, error } = useGetProductsQuery()
    return (
    <>
        <h1>Latest Products</h1>
        {isLoading?<><h1>Loading...</h1></>:<Row>
            {products?.map((product: Product) => {
                return (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product} />
                    </Col>
                );
            })}
        
        </Row>}
    </>);

}
export default HomeRoute;