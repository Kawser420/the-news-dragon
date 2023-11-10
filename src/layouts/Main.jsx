import React from 'react';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNab from '../pages/Shared/RightNab';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>

                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h1>this is coming</h1>
                    </Col>
                    <Col lg={3}>
                        <RightNab></RightNab>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;