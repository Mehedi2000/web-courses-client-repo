import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const Checkout = () => {
    const category = useLoaderData()
    const { title, description, image, price, rating, id } = category
    return (
        <div>
            <Container className='mt-4'>
                <Card className="text-center">
                    <Card.Header className='fs-4 fw-bold'>{title}</Card.Header>
                    <Card.Body>
                        <Card.Title className='text-warning'>Price : {price} $</Card.Title>
                        <Card.Text className='text-primary'>
                            Rating : {rating.rate}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Checkout;