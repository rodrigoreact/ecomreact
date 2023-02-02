import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import { getProductSearch, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {
    const products = useSelector(state => state.products)
    const [categories, setCategories] = useState([])
    const [newsSearch, setNewsSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    useEffect(() => {
        axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
            .then(res => setCategories(res.data))
    }, [])

    return (
        <div className='home'>
            <Row>
                <Col lg={3}>     
              
                    <Filter categories={categories} />
           
                </Col>
                <Col lg={9}>
                <div className='product_container'>
                    <div className='input'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Buscar articulo"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={newsSearch}
                                onChange={(e) => setNewsSearch(e.target.value)}
                            />
                            <Button
                                onClick={() => dispatch(getProductSearch(newsSearch))}
                                variant="outline-secondary"
                                id="button-addon2"
                            >
                                Buscar
                            </Button>
                        </InputGroup>
                    </div>
                    <Row xs={1} md={2} lg={3} className="g-4" >
                    {products.map(product => (
                        <Col  key={product.id}>
                        <ProductCard product={product} />
                        </Col>
                        ))}
                  </Row>
                    {products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                     
                </div>       
             </Col>
            </Row>
        </div>
    );
};

export default Home;