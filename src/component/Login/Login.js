import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Your email is not verified. Please verify your email address.')
                // }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
        // .finally(() => {
        //     setLoading(false);
        // })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                // form.reset();
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='me-3' variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <p className='mt-3 fs-5 fw-semibold'>New User? <Link to='/register'>Register</Link></p>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;