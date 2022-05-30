import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CgArrowRight } from 'react-icons/cg';
import { FaRegClock, FaRegComment } from 'react-icons/fa';
import ResourcesData from '../data/resourcesData.json';

export default function Resources() {
    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center my-5">Check out some of our <br /> amazing resources or join us to our newsletter</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {ResourcesData.map((resource, idx) => (
                        <Col key={`resources-card-${idx}`}>
                            <Card className="shadow border-0 my-5">
                                {/* <Card.Img
                                    // variant="top"
                                    // src={resource.imageSrc}
                                    // alt={resource.imageName}
                                    // width="370"
                                    // height="320"
                                // className="attachment-saasland_370x320 size-saasland_370x320 wp-post-image" 
                                // loading="lazy" 
                                /> */}
                                <Card.Img
                                    variant="top"
                                    src={resource.imageSrc}
                                    alt={resource.imageName}
                                    width="370"
                                    height="320"
                                    className=""
                                // className="attachment-saasland_370x320 size-saasland_370x320 wp-post-image" 
                                // loading="lazy" 
                                />
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Link href={resource.postTimeLink} >
                                                <a className="post_time d-flex align-items-center">
                                                    <FaRegClock color="#5f54fd" />&nbsp;{resource.postTime}
                                                </a>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link href={resource.postLink} >
                                                <a className="post_title" >
                                                    <p className="post_title_text">{resource.postTitle}</p>
                                                </a></Link>
                                        </Col>
                                    </Row>
                                    <Row className="">
                                        <Col className="d-flex justify-content-start">
                                            <Link href={resource.postLink} >
                                                <a className="learn_btn_two" >
                                                    READ MORE  <CgArrowRight />
                                                </a></Link>
                                        </Col>
                                        <Col>
                                            <Link href={resource.postLink} >
                                                <a className="post-info-comments d-flex justify-content-end align-items-center" >
                                                    <FaRegComment color="#5f54fd" />&nbsp;<span>No Comments</span>
                                                </a></Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
