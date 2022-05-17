import Link from 'next/link'
import Image from 'next/image'
import TheLondonDryCleaningCompanyLogo from '../public/The-London-Dry-Cleaning-Company-Logo.png'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <>
            {/* <Navbar expand="lg">
                <Container fluid >
                    <Navbar.Brand href="#home">
                        <Image
                            src={TheLondonDryCleaningCompanyLogo}
                            alt="Picture of the author"
                            width={200}
                            height={94}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            <Navbar className="sticky-top bg-white border border-primary border-2 border-top-0 border-start-0 border-end-0" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                    <Image
                            src={TheLondonDryCleaningCompanyLogo}
                            alt="The-London-Dry-Cleaning-Company-Logo"
                            width={200}
                            height={94}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/">ABOUT</Nav.Link>
                            {/* <Nav.Link href="/">ELITE SERVICES</Nav.Link> */}
                            <NavDropdown title="ELITE SERVICES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Dry Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Laundry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Alteration</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Shoe Repair</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Wedding Gowns</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Suede, Leather & Furs </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">PRICE LIST</Nav.Link>
                            <Nav.Link href="/">Blog</Nav.Link>
                            <Nav.Link href="/">TERMS & CONDITIONS</Nav.Link>
                            <Nav.Link href="/">CONTACT US</Nav.Link>
                            <Nav.Link href="/">BOOK NOW</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNavbar;