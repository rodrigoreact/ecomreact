import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterCategoryThunk } from '../store/slices/products.slice';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    
    return (
        <Card className='card' style={{ width: '16rem' }} onClick={() => navigate(`/products/${product.id}`)} >
            <Card.Img className='img_card' variant="top" src={product.images?.[0].url} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Button variant="primary">Go</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;