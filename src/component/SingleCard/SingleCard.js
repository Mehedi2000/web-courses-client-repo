import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleCard = ({ category }) => {
    const { name, id, img } = category;
    return (
        <Col sm='12' lg="5" className=''>
            <Card className="text-center">
                <Card.Header className='fs-4 fw-semibold'>{name}</Card.Header>
                <Card.Body>
                    <Card.Img style={{ height: '15rem' }} variant="top" src={img} />
                    <Link to={`/category/${id}`}><Button variant="primary" className='mt-5'>Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCard;