import Image from 'next/image';
import { Badge, Col, Container, Row } from 'react-bootstrap';

export default function HowItWorks() {
    return (
        <>
            <Container fluid className="" style={{ backgroundColor: "#f6f6f5" }} >
                <Row xs={1} sm={2} className="g-4" style={{ backgroundColor: "#f6f6f5" }}>
                    <Col>
                        <Image
                            src="/clothes.jpg"
                            alt="Clothes"
                            width={128}
                            height={100}
                            layout="responsive"

                        />
                    </Col>
                    <Col>
                        <h2>How it Works</h2>
                        <p style={{ color: "#677294" }}>Traditionally, the cleaning process was carried out at centralized factories. High street cleaners’ shops received garments from customers.</p>

                        <Row xs={1} sm={2} md={3} lg={4} className="p-0 m-0">
                            <Col >
                                <div className="d-flex justify-content-end"><Badge pill bg="primary">01</Badge></div>
                                <Image src="/tracking-min-2.png"
                                    alt="Choose Any Time For Delivery"
                                    width={64}
                                    height={64}
                                    layout="responsive"
                                />
                                Choose Any Time For Delivery
                            </Col>
                            <Col >
                                <div className="d-flex justify-content-end"><Badge pill bg="primary">02</Badge></div>
                                <Image src="/laundry-min.png"
                                    alt="Choose Any Time For Delivery"
                                    width={64}
                                    height={64}
                                    layout="responsive"
                                />
                                We Can Wash and Dry Dirty Laundry
                            </Col>
                            <Col >
                                <div className="d-flex justify-content-end"><Badge pill bg="primary">03</Badge></div>
                                <Image src="/shirt-min.png"
                                    alt="Choose Any Time For Delivery"
                                    width={64}
                                    height={64}
                                    layout="responsive"
                                />
                                We Return Your Clean Laundry
                            </Col>
                            <Col >
                                <div className="d-flex justify-content-end"><Badge pill bg="primary">04</Badge></div>
                                <Image src="/tea-min.png"
                                    alt="Choose Any Time For Delivery"
                                    width={64}
                                    height={64}
                                    layout="responsive"
                                />
                                Relax and Enjoy Clean Clothes
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    );
}
