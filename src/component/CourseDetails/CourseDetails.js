import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const category = useLoaderData()
    console.log(category)
    const { title, description, image, price, rating, id } = category;
    return (
        <div>
            <Container className='post' ref={ref}>
                <Card className="text-center mt-5">
                    <Card.Header className='fs-3 fw-bold d-flex justify-content-between align-items-center'>
                        <p> {title}</p>
                        <Pdf targetRef={ref} filename="post.pdf">
                            {({ toPdf }) => <FaArrowAltCircleDown onClick={toPdf}></FaArrowAltCircleDown>}
                        </Pdf>
                    </Card.Header>

                    <Card.Body>
                        <Card.Img style={{ height: '25rem' }} variant="top" src={image} />
                        <Card.Text className='mt-3 fw-semibold'>
                            {description}
                        </Card.Text>
                        <Link to={`/checkout/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
                    </Card.Body>
                    <Card.Footer className="text-primary fw-semibold fs-5">Price : {price} $</Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default CourseDetails;