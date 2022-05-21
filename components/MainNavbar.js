import Link from 'next/link'
import Image from 'next/image'
import TheLondonDryCleaningCompanyLogo from '../public/The-London-Dry-Cleaning-Company-Logo.png'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <>
            <Navbar className="my-navbar sticky-top bg-white d-flex align-items-center" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" className="ms-4 visually-hidden">
                        <Image
                            src={TheLondonDryCleaningCompanyLogo}
                            alt="The-London-Dry-Cleaning-Company-Logo"
                            width={200}
                            height={94}
                        // className="d-inline-block align-top"
                        // layout="responsive"

                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link nav-link-active" href="/">HOME</Nav.Link>
                            <Nav.Link className="nav-link" href="/about">ABOUT</Nav.Link>
                            {/* <Nav.Link className="nav-link" href="/">ELITE SERVICES</Nav.Link> */}
                            <div className="nav-link-dropdown">
                                <a className="nav-link-btn">ELITE SERVICES</a>
                                <div className="nav-link-dropdown-content">
                                    <Link href="/"><a>Dry Cleaning</a></Link>
                                    <Link href="/"><a>Laundry</a></Link>
                                    <Link href="/"><a>Alteration</a></Link>
                                    <Link href="/"><a>Shoe Repair</a></Link>
                                    <Link href="/"><a>Wedding Gowns</a></Link>
                                    <Link href="/"><a>Suede, Leather & Furs</a></Link>
                                </div>
                            </div>
                            {/* <NavDropdown title="ELITE SERVICES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Dry Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Laundry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Alteration</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Shoe Repair</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Wedding Gowns</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Suede, Leather & Furs </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link className="nav-link" href="/price-list">PRICE LIST</Nav.Link>
                            <Nav.Link className="nav-link" href="/blog">Blog</Nav.Link>
                            <Nav.Link className="nav-link" href="/terms-conditions">TERMS & CONDITIONS</Nav.Link>
                            <Nav.Link className="nav-link" href="/contact-us">CONTACT US</Nav.Link>
                            <Nav.Link className="nav-link" href="/booking">BOOK NOW</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNavbar;