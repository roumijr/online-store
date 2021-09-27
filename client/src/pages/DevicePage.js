import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/BigStar.png"


const DevicePage = () => {
    const device = { id: 1, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwincar.ie%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHONE12.jpg&f=1&nofb=1' }
    const description = [
        { id: 1, title: "Оперативная память", description: "5гб" },
        { id: 2, title: "Оперативная память", description: "5гб" },
        { id: 3, title: "Оперативная память", description: "5гб" },
        {id:4, title:"Оперативная память", description:"5гб"},
        {id:5, title:"Оперативная память", description:"5гб"},
    ]
    
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={ device.img}/>
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240, height: 240, backgroundSize: 'cover',fontSize:64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex justify-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize:32, border:"5px solid lightgray "}}
                    >
                        <h3>От: {device.price} руб</h3>
                        <Button variant={"outline-secondary"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgray': 'transperent', padding:10}}>
                        {info.title}:{info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}


export default DevicePage;