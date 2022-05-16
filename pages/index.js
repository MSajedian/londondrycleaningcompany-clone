import Head from 'next/head'
import { useState } from 'react'
import { Tab, Container, Carousel, Row, Col, Card, Nav, Badge } from 'react-bootstrap';
import Image from 'next/image'

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Head>
        <title>Website | Home</title>
        <meta name="keywords" content="websiteName" />
      </Head>

      {/********* Carousel *********/}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={10000}>
          {/* <img
            className="d-block w-100"
            src="https://londondrycleaningcompany.com/wp-content/uploads/2019/11/Slide001-min.jpg"
            alt="First slide"
          /> */}
          <Image
            src="/Slide001.jpg"
            alt="First slide"
            width={1920}
            height={1080}
            layout="responsive"
            // objectFit="contain"
            objectFit="cover"
          // layout="fill"
          // height={500}
          // layout="fill"
          // intrinsic="1x"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          />
          <Carousel.Caption>
            {/* First slide label */}
            DRY CLEANING & LAUNDRY DELIVERY SERVICE

            We Collect, Clean and Deliver
            Directly to your Door
            Contact us
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Image
            src="/Slide002.jpg"
            alt="Second slide"
            width={1920}
            height={1080}
            layout="responsive"
            // objectFit="contain"
            objectFit="cover"
          />

          <Carousel.Caption>
            {/* Second slide label */}
            DRY CLEANING & LAUNDRY TO YOUR DOOR

            We collect, clean & deliver your items in as little as 48 hours
            20% discount to all new customers use promo code 20off
            Contact us
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/********* SPECIALIST DRY CLEANING SERVICES *********/}
      <Container>
        <h2 className="text-center my-5">SPECIALIST DRY CLEANING SERVICES</h2>
        <Row xs={1} sm={2} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="px-5 pt-5" src="/service_home2-min.png" alt="Laundry" />
              <Card.Body>
                <Card.Title className="text-center">Laundry</Card.Title>
                <Card.Text className="text-center">
                  We only use a special detergent exclusively developed for different types of fabric from Cotton shirts to silk Bedsheets.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="px-5 pt-5" src="/service_home3-min.png" alt="Alterations" />
              <Card.Body>
                <Card.Title className="text-center">Alterations</Card.Title>
                <Card.Text className="text-center">
                  Our tailors are garment craftsmen with years of experience who give us the confidence to accept all types of garments of varying fabrics..
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="px-5 pt-5" src="shoes-min.png" alt="Shoe Repair" />
              <Card.Body>
                <Card.Text className="text-center">
                  We correct rips, damaged corking and repair cracked heels. In addition our cobblers offer waterproofing...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="px-5 pt-5" src="/wedding_grow-min.png" alt="Wedding Gowns" />
              <Card.Body>
                <Card.Title className="text-center">Wedding Gowns</Card.Title>
                <Card.Text className="text-center">
                  At the London Dry Cleaning company wedding dress dry cleaning is one of our most popular services!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="px-5 pt-5" src="/everyting-min.png" alt="Suede, Leather & Furs" />
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

      {/********* SERVICES YOU WILL LOVE *********/}
      <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" fill="#dbedf7">
        <path d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
      </svg>
      <Container>
        <h2 className="text-center mt-5">Services You will Love</h2>
        <h5 className="text-center" style={{ color: "#677294" }}>Unlike what its name implies, dry cleaning is not actually a &apos;dry&apos; process.
          <br />
          Clothes are soaked in a different solvent other than water.
          <br />
          The solvent used is typically Perchloroethylene
        </h5>
        <Row xs={1} sm={2} className="g-4">
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
                  <Nav.Link eventKey="Exceptional service">Exceptional service</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Fast delivery">Fast delivery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Spotless finish">Spotless finish</Nav.Link>
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
        <path className="mt-5" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
      </svg>

      {/********* HOW IT WORKS *********/}
      <Container fluid className="">
        <Row xs={1} sm={2} className="g-4" style={{ backgroundColor: "#f6f6f5" }}>
          <Col>
            <Image src="/clothes.jpg"
              className="p-3"
              alt="Clothes"
              width={128}
              height={100}
              layout="responsive"
            />
          </Col>
          <Col>
            <h2>How it Works</h2>
            <p style={{ color: "#677294" }}>Traditionally, the cleaning process was carried out at centralized factories. High street cleaners’ shops received garments from customers.</p>

            <Row xs={1} sm={2}>
              <Col>
                <Badge pill bg="primary">01</Badge>
                <Image className="px-3 py-1" src="/tracking-min-2.png"
                  alt="Choose Any Time For Delivery"
                  width={128}
                  height={100}
                  layout="responsive"
                />
                Choose Any Time For Delivery
                Choose Any Time For Delivery
              </Col>
              <Col>
                <Badge pill bg="primary">02</Badge>
                <Image className="px-3 py-1" src="/laundry-min.png"
                  alt="Choose Any Time For Delivery"
                  width={128}
                  height={100}
                  layout="responsive"
                />
                We Can Wash and Dry Dirty Laundry
                We Can Wash and Dry Dirty Laundry
              </Col>
              <Col>
                <Badge pill bg="primary">03</Badge>
                <Image className="px-3 py-1" src="/shirt-min.png"
                  alt="Choose Any Time For Delivery"
                  width={128}
                  height={100}
                  layout="responsive"
                />
                We Return Your Clean Laundry
                We Return Your Clean Laundry
              </Col>
              <Col>
                <Badge pill bg="primary">04</Badge>
                <Image className="px-3 py-1" src="/tea-min.png"
                  alt="Choose Any Time For Delivery"
                  width={128}
                  height={100}
                  layout="responsive"
                />
                Relax and Enjoy Clean Clothes
                Relax and Enjoy Clean Clothes
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice">
        <path className="elementor-shape-fill" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path>
      </svg>

    </>
  )
}