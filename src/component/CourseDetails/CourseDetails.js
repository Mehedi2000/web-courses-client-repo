import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const CourseDetails = () => {
    const category = useLoaderData()
    console.log(category)
    const { title, description, image, price, rating } = category;
    return (
        <div>
            <Container>
                <Card className="text-center mt-5">
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default CourseDetails;