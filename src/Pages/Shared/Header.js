import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Image src='https://www.xbytesolutions.com/assets/img/services/fullstack-development.png'
                        style={{ height: '60px' }}
                        className='me-3'
                    ></Image>
                    <Navbar.Brand className='fs-2 fw-bold'><span className='text-warning'>Pro</span> Coder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5 fw-semibold">
                            <Nav.Link href="#features" className='me-4'><Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link href="#pricing" className='me-4'><Link to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to='/blog'>Blog</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;