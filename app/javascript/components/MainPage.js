import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../../assets/stylesheets/main.scss'

class MainPage extends Component {
    render() {
        return (
            <div>
                <Container className="my-5">
                    <Row>
                        <Col className="d-flex flex-column justify-content-center">
                            <h1>Dark side</h1>
                            <Button variant="dark">Dark</Button>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <h1>Light side</h1>
                            <Button variant="light">Button</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default MainPage;
