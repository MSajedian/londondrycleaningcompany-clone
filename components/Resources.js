import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import ResourcesData from '../data/resourcesData.json';
import { FaRegClock } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { CgArrowRight } from 'react-icons/cg';

export default function Resources() {
    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center my-5">Check out some of our amazing resources or join us to our newsletter</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {ResourcesData.map((resource, idx) => (
                        <Col key={`resources-card-${idx}`}>
                            <Card>
                                {/* <Card.Img
                                    // variant="top"
                                    // src={resource.imageSrc}
                                    // alt={resource.imageName}
                                    // width="370"
                                    // height="320"
                                // className="attachment-saasland_370x320 size-saasland_370x320 wp-post-image" 
                                // loading="lazy" 
                                /> */}
                                <Image
                                    variant="top"
                                    src={resource.imageSrc}
                                    alt={resource.imageName}
                                    width="370"
                                    height="320"
                                // className="attachment-saasland_370x320 size-saasland_370x320 wp-post-image" 
                                // loading="lazy" 
                                />
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Link href={resource.postTimeLink} >
                                                <a className="post_time" >
                                                    <i className="icon_clock_alt"></i>
                                                    <FaRegClock /> {resource.postTime}
                                                    
                                                </a>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link href={resource.postLink} >
                                                <a className="post_title" >
                                                    <h3>{resource.postTitle}</h3>
                                                </a></Link>
                                        </Col>
                                    </Row>
                                    <Row className="post-info-bottom">
                                        <Col className="post-info-read-more d-flex justify-content-start">
                                            <Link href={resource.postLink} >
                                                <a className="learn_btn_two" >
                                                    Read More  <CgArrowRight />
                                                </a></Link>
                                        </Col>
                                        <Col>
                                            <Link href={resource.postLink} >
                                                <a className="post-info-comments d-flex justify-content-end align-items-center" >
                                                    {/* <i className="icon_comment_alt" aria-hidden="true"></i> */}
                                                    <FaRegComment />&nbsp;<span>No Comments</span>
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
