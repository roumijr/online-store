import React from "react";
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <Form>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth;