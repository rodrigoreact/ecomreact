import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const purchases = useSelector(state => state.purchases)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    return (
        <div>
            <br /><br /><br />
            <h1>Purchases</h1>
            <Row xs={1} md={2} lg={3} className="g-5">
                <Col>
            {purchases.map(product => (
                    <div className='purchase_card' 
                    key={product.id} onClick={() => navigate(`/products/${product.product.id}`)}
                    >
                        <img src={product?.product?.images[0].url} alt="" style={{maxWidth:100}}/>
                        <p>{product?.product?.title}</p>
                        <p>{product?.createdAt.slice(0, 10)}</p>
                        <p>{product?.quantity}</p>
                        <p>{product?.product?.price}</p>
                    </div>
           
                ))
            }
                 </Col>
            </Row>

        </div>
    );
};

export default Purchases;