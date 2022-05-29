import { Card, Col, Container, Row } from 'react-bootstrap';

export default function SpecialistServices() {
    return (
        <>
            <Container>
                <h2 className="text-center my-5">SPECIALIST DRY CLEANING SERVICES</h2>
                <Row xs={1} sm={2} lg={3} className="g-4">
                    <Col>
                        <Card className="services-card">
                            <Card.Img variant="top" className="services-card-img" src="/service_home2-min.png" alt="Laundry" />
                            <Card.Body>
                                <Card.Title className="text-center">Laundry</Card.Title>
                                <Card.Text className="text-center text-secondary">
                                    We only use a special detergent exclusively developed for different types of fabric from Cotton shirts to silk Bedsheets.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="services-card">
                            <Card.Img variant="top" className="services-card-img" src="/service_home3-min.png" alt="Alterations" />
                            <Card.Body>
                                <Card.Title className="text-center">Alterations</Card.Title>
                                <Card.Text className="text-center">
                                    Our tailors are garment craftsmen with years of experience who give us the confidence to accept all types of garments of varying fabrics..
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="services-card">
                            <Card.Img variant="top" className="services-card-img" src="shoes-min.png" alt="Shoe Repair" />
                            <Card.Body>
                                <Card.Title className="text-center">Shoe repair</Card.Title>
                                <Card.Text className="text-center">
                                    We correct rips, damaged corking and repair cracked heels. In addition our cobblers offer waterproofing...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="services-card">
                            <Card.Img variant="top" className="services-card-img" src="/wedding_grow-min.png" alt="Wedding Gowns" />
                            <Card.Body>
                                <Card.Title className="text-center">Wedding Gowns</Card.Title>
                                <Card.Text className="text-center">
                                    At the London Dry Cleaning company wedding dress dry cleaning is one of our most popular services!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="services-card">
                            <Card.Img variant="top" className="services-card-img" src="/everyting-min.png" alt="Suede, Leather & Furs" />
                            <Card.Body>
                                <Card.Title className="text-center">Suede, Leather & Furs</Card.Title>
                                <Card.Text className="text-center">
                                    Cleaning items tailored from Suede, leather, sheepskin or pigskin requires expert knowledge
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
