import React from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-content text-center pt-5'>
                <h2 className='text-white'>The Best Courses You Will Find Here!!!</h2>
                <h5 className='text-white mt-4'>Pro Coder is the best education web development template that inspires to educate.It is suitable for education related courses to school,college and university.</h5>
                <Button className='mt-4 fs-5 fw-semibold' variant="outline-warning">Get Started</Button>{' '}
            </div>
        </div>
    );
};

export default Home;