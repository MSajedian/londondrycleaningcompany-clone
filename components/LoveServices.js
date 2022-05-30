import Image from 'next/image';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default function LoveServices() {
    return (
        <>
            <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" fill="#dbedf7">
                <path d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
            </svg>
            <Container >
                <h2 className="text-center mt-5">Services You will Love</h2>
                <h5 className="text-center" style={{ color: "#677294" }}>Unlike what its name implies, dry cleaning is not actually a &apos;dry&apos; process.
                    <br />
                    Clothes are soaked in a different solvent other than water.
                    <br />
                    The solvent used is typically Perchloroethylene
                </h5>
                <Row xs={1} sm={2} className="g-4 mt-2">
                    <Tab.Container id="tabs" defaultActiveKey="Exceptional service">
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="Exceptional service">
                                    <Image src="/20448-Converted-min.png"
                                        className="p-3"
                                        alt="Exceptional service"
                                        width={128}
                                        height={128}
                                        layout="responsive"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Fast delivery">
                                    <Image src="/52460-Converted-min.png"
                                        className="p-3"
                                        alt="Exceptional service"
                                        width={128}
                                        height={90}
                                        layout="responsive"
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Spotless finish">
                                    <Image src="/17729-Converted-min.png"
                                        className="p-3"
                                        alt="Exceptional service"
                                        width={128}
                                        height={100}
                                        layout="responsive"
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col>
                            <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link className="services-love-card-nav-link" eventKey="Exceptional service">Exceptional service</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="services-love-card-nav-link" eventKey="Fast delivery">Fast delivery</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="services-love-card-nav-link" eventKey="Spotless finish">Spotless finish</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <hr />
                            <Tab.Content>
                                <Tab.Pane eventKey="Exceptional service">
                                    <h4>Exceptional service</h4>
                                    <p>A personal service and bespoke care of your garments underpins our dry cleaning company’s ethos.&nbsp; Whilst we take great pride in our online ordering services for laundry and cry cleaning, we welcome the opportunity to speak to you in person and address any concerns you have regarding the care of your garments.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Fast delivery">
                                    <h4>Fast delivery</h4>
                                    <p>The London Dry Cleaning company’s vans now cover all areas of London ensuring fast and efficient collection of your garments at a time that suits you.&nbsp; Our vans operate 7 days a week from 8 am till late.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Spotless finish">
                                    <h4>Spotless finish</h4>
                                    <p>We use state of the art dry cleaning methods to guarantee an impeccable finish for all garments that are entrusted to our care. You will be delighted to behold garments that have been expertly dry cleaned using the finest cleaning materials and best machinery to give your clothes a new lease of life!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" fill="#dbedf7" style={{ transform: "scale(-1,-1)" }}>
                <path className="" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
            </svg>
        </>
    );
}
