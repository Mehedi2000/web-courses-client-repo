import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaFirstOrderAlt, FaRegMoon, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [theme, setTheme] = useState(false)
    const { user } = useContext(AuthContext)
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
                            <Nav.Link href="#pricing" className='me-4'><Link to='/blog'>Blog</Link></Nav.Link>
                            {/* <Nav.Link href="#pricing" className='me-4'><Link to='/login'>Log In</Link></Nav.Link>
                            <Nav.Link href="#pricing" className='me-4'><Link to='/register'>Register</Link></Nav.Link> */}
                            <Nav.Link href="#pricing" className='me-4'>
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}>
                                        </Image> : <>
                                            <Link to='/login' className='me-4'>Log In</Link>
                                            <Link to='/register' className='me-4'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <div className='d-flex justify-content-center align-items-center'>
                                {
                                    theme ? <FaRegMoon onClick={() => setTheme(!theme)}></FaRegMoon>
                                        : <FaFirstOrderAlt onClick={() => setTheme(!theme)}></FaFirstOrderAlt>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;