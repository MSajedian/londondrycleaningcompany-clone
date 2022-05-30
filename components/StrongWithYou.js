import Image from 'next/image';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';

export default function StrongWithYou() {
    return (
        <>
            <div style={{ backgroundColor: "#6c34a4", position: "relative" }}  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" fill="#f6f6f5">
                    <path className="elementor-shape-fill" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
                </svg>
                <Container>
                    <Row>
                        <h2 className="text-center text-white">We are strong with you</h2>
                        <h2 className="text-center text-white">We strive for your comfort</h2>
                    </Row>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4 px-0 mx-0 mt-4">
                        <Col>
                            <Card className="h-100 bg-transparent text-white" style={{ border: "solid rgba(255,255,255,0.55) 1px", borderRadius: "10px" }}>
                                <div className="align-self-center mt-3" style={{ backgroundColor: "#8456b4", width: "150px", height: "150px", borderRadius: "50%" }} >
                                    <Card.Img variant="top" className="p-4" src="/online-library.png" alt="online-library" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center text-white">Booking</Card.Title>
                                    <Card.Text className="text-center text-white">
                                        You can place your booking online within minutes, choosing the garments you want cleaned. Pickup and delivery times can be specified whilst placing your order.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 bg-transparent text-white" style={{ border: "solid rgba(255,255,255,0.55) 1px", borderRadius: "10px" }}>
                                <div className="align-self-center mt-3" style={{ backgroundColor: "#8456b4", width: "150px", height: "150px", borderRadius: "50%" }} >
                                    <Card.Img variant="top" className="p-4" src="/delivery-truck-min.png" alt="delivery-truck-min" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center text-white">Collection</Card.Title>
                                    <Card.Text className="text-center text-white">
                                        We will collect your garments at the delivery date and time you have specified. Having them ready for our driver in a bag with your order confirmation inside will.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 bg-transparent text-white" style={{ border: "solid rgba(255,255,255,0.55) 1px", borderRadius: "10px" }}>
                                <div className="align-self-center mt-3" style={{ backgroundColor: "#8456b4", width: "150px", height: "150px", borderRadius: "50%" }} >
                                    <Card.Img variant="top" className="p-4" src="/tracking-min33.png" alt="tracking-min33" />
                                </div>

                                <Card.Body>
                                    <Card.Title className="text-center text-white">Delivery</Card.Title>
                                    <Card.Text className="text-center text-white">
                                        We will return your garments to you beautifully cleaned and ready to wear in as little as 8 hours, at a date and time that suits you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 bg-transparent text-white" style={{ border: "solid rgba(255,255,255,0.55) 1px", borderRadius: "10px" }}>
                                <div className="align-self-center mt-3" style={{ backgroundColor: "#8456b4", width: "150px", height: "150px", borderRadius: "50%" }} >
                                    <Card.Img variant="top" className="p-4" src="/credit-cards-payment-min.png" alt="credit-cards-payment-min" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center text-white">Payment</Card.Title>
                                    <Card.Text className="text-center text-white">
                                        Payment can be made securely online using your credit or debit card when placing your order. Alternatively, we also accept cash upon collection of your garments.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col className="d-flex justify-content-center align-items-center mt-4 mb-5">
                            <Button variant="" size="lg" className="text-white px-4 py-2 fs-3 fw-bold d-flex justify-content-center align-items-center"
                                style={{
                                    backgroundColor: "#6ec1e4",
                                    border: "solid rgba(255,255,255,0.55) 1px", borderRadius: "10px"
                                }}
                            >
                                <FaBook className="me-1" /><div>CONTACT US</div>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ height: "210px" }} >
                            <div className="text-center"
                                style={{ position: "absolute", zIndex: "1" }}
                            >
                                <Image
                                    src="https://londondrycleaningcompany.com/wp-content/uploads/2019/11/17726-Converted-2-min.png"
                                    alt=""
                                    width={1024}
                                    height={646}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <svg
                    style={{
                        transform: "scale(-1,-1) translate(0, -1px)",
                        backgroundColor: "transparent",
                    }}
                    className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" fill="#f6f6f5" >
                    <path className="" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
                </svg>
                <div className="text-center"
                    style={{ backgroundColor: "#f6f6f5", paddingTop: "300px" }} >
                    <h2>Users Review</h2>
                    <div className="m-0 p-0"><p className="m-0 p-0">Join thousands happy customers</p></div>
                </div>
            </div>
        </>
    );
}
