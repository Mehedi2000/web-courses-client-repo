import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import SingleCard from '../../component/SingleCard/SingleCard';


const Courses = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories)

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col sm='12' lg='3' className='text-center'>
                        <h3 className='my-4 text-warning'>All Courses</h3>
                        <div>
                            {
                                categories.map(category => <Link key={category.id} to={`/category/${category.id}`}><p>{category.name}</p></Link>)
                            }
                        </div>
                    </Col>
                    <Col sm='12' lg='9' className='mt-4'>

                        <Row className='gap-4'>
                            {
                                categories.map(category => <SingleCard
                                    key={category.id}
                                    category={category}
                                ></SingleCard>)
                            }
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;