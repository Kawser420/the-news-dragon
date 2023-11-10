import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

    const { user } = useContext(AuthContext);


    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex rounded'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={70}>
                    I can be a React component, multiple React components, or just some text...
                    I can be a React component, multiple React components, or just some text...
                    I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2.2em' }}></FaUserCircle></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="dark">Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="dark">Login</Button>
                                    </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;