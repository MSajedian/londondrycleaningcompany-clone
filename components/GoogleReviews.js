import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import UsersData from '../data/usersData.json';

export default function GoogleReviews() {
    return (
        <>
            {/* <h2>Reviews</h2> */}
            {/* <li key={user.name}> <Link href={user.link}><a>{user.name}</a></Link> </li>, */}

            <Container className="mt-5">
                <Row>
                    <Col xs={12} sm={2} className="d-flex justify-content-center">
                        <div
                            className="d-flex justify-content-center align-items-center shadow"
                            style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%"
                            }}
                        >
                            <Image
                                style={{
                                    borderRadius: "50%",
                                    textShadow: "10px 10px"
                                }}
                                loading="lazy"
                                src="https://londondrycleaningcompany.com/wp-content/uploads/2021/03/The-London-Dry-Cleaning-e1616071034219.png"
                                alt="London Dry Cleaning Company"
                                width="70px"
                                height="70px"
                                className=""
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={10} className="">
                        <div className="google-name">
                            <Link
                                href="https://maps.google.com/?cid=4084349588212760980"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                <a
                                    className="company-link-in-google-map"
                                ><span>London Dry Cleaning Company</span></a>
                            </Link>
                        </div>
                        <div>
                            <span className="google-rating">4.5</span
                            ><span className="google-stars"
                            ><span className="stars"
                            ><span className="star"
                            ><svg
                                width="17"
                                height="17"
                                viewBox="0 0 1792 1792"
                            >
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                fill="#e7711b"
                                            ></path></svg></span
                                    ><span className="star"
                                    ><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 1792 1792"
                                    >
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                fill="#e7711b"
                                            ></path></svg></span
                                    ><span className="star"
                                    ><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 1792 1792"
                                    >
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                fill="#e7711b"
                                            ></path></svg></span
                                    ><span className="star"
                                    ><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 1792 1792"
                                    >
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                fill="#e7711b"
                                            ></path></svg></span
                                    ><span className="star"
                                    ><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 1792 1792"
                                    >
                                            <path
                                                d="M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"
                                                fill="#e7711b"
                                            ></path></svg></span></span
                                ></span>
                        </div>
                        <div className="google-powered">
                            Based on 34 reviews
                        </div>
                        <div className="google-powered">
                            <Image
                                loading="lazy"
                                src="https://londondrycleaningcompany.com/wp-content/plugins/widget-google-reviews/assets/img/powered_by_google_on_white.png"
                                alt="powered by Google"
                                width="144"
                                height="18"
                                title="powered by Google"
                            />
                        </div>
                    </Col>
                </Row>
                {UsersData.map(user =>
                    <Row className="my-3" key={user.id}>
                        <Col xs={2} className="d-flex justify-content-end">
                            <div className="google-left">
                                <Image
                                    loading="lazy"
                                    src={user.image}
                                    className="rplg-review-avatar rplg-blazy b-loaded"
                                    alt="Yasamin Sanjabi"
                                    width="50"
                                    height="50"
                                    title="Yasamin Sanjabi"
                                />
                            </div>
                        </Col>
                        <Col xs={10} className="ms-0 ps-0">
                            <div className="google-right">
                                <Link
                                    href={user.link}
                                    target="_blank"
                                    rel="nofollow noopener"
                                >
                                    <a
                                        className="google-name"
                                    >{user.name}</a>
                                </Link>
                                <div
                                    className="google-time"
                                    data-time="1633810910"
                                >
                                    {user.time}
                                </div>
                                <div className="google-feedback">
                                    <span className="google-stars"
                                    ><span className="stars"
                                    ><span className="star"
                                    ><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 1792 1792"
                                    >
                                                    <path
                                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                        fill="#e7711b"
                                                    ></path></svg></span
                                            ><span className="star"
                                            ><svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 1792 1792"
                                            >
                                                    <path
                                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                        fill="#e7711b"
                                                    ></path></svg></span
                                            ><span className="star"
                                            ><svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 1792 1792"
                                            >
                                                    <path
                                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                        fill="#e7711b"
                                                    ></path></svg></span
                                            ><span className="star"
                                            ><svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 1792 1792"
                                            >
                                                    <path
                                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                        fill="#e7711b"
                                                    ></path></svg></span
                                            ><span className="star"
                                            ><svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 1792 1792"
                                            >
                                                    <path
                                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                                        fill="#e7711b"
                                                    ></path></svg></span></span></span
                                    ><p className="google-text"
                                    >{user.review}</p
                                    >
                                </div>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
}
