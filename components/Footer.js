import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#413c85" }} className="mb-0 pb-0">
      <Image
        width="1920"
        height="308"
        layout="responsive"
        src="https://londondrycleaningcompany.com/wp-content/uploads/2019/07/fotter_shap.png"
        alt=""
        style={{ backgroundColor: "#fff" }}
      />
      <Container fluid className="mb-0 pb-0">
        <Row>
          <Col sm={12} md={6} lg={4} className="">
            <Link href="/">
              <a>
                <Image
                  width="339"
                  height="68"
                  src="https://londondrycleaningcompany.com/wp-content/uploads/2019/11/LDCC_Logo-min.png"
                  className="attachment-full size-full"
                  alt=""
                />
              </a>
            </Link>
            <p className="mt-5 all-rights-reserved">
              © 2019 London Dry Cleaning Company
              <br /> All rights reserved.
            </p>
            <div className="elementor-social-icons-wrapper elementor-grid">
              <span className="elementor-grid-item">
                {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-2678399" href="https://www.facebook.com/TheLondonDryCleaningCompany" target="_blank">
                    <span className="elementor-screen-only">Facebook-f</span>
                    <i className="fab fa-facebook-f"></i>					</a> */}
              </span>
              <span className="elementor-grid-item">
                {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-ad25bb6" href="https://www.instagram.com/londondrycleaningcompany/" target="_blank">
                    <span className="elementor-screen-only">Instagram</span>
                    <i className="fab fa-instagram"></i>					</a> */}
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-white">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-72534a0 elementor-widget elementor-widget-heading"
                data-id="72534a0"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="text-center elementor-heading-title elementor-size-default">
                    Contact
                  </h3>
                </div>
              </div>
              <div
                className="overflow-auto elementor-element elementor-element-a8c1462 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="a8c1462"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-map-marker-alt"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        519A Finchley Road, Hampstead, London NW3 7BB
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="tel:+44%20(0)207%20794%209096">
                        <span className="elementor-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="fas fa-phone-alt"
                          ></i>{" "}
                        </span>
                        <span className="elementor-icon-list-text">
                          +44 (0)207 794 9096
                        </span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="tel:0785%20981%200207">
                        <span className="elementor-icon-list-icon">
                          <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                        </span>
                        <span className="elementor-icon-list-text">
                          0785 981 0207
                        </span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="mailto:londondrycleaningcompany@gmail.com">
                        <span className="elementor-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="fas fa-envelope"
                          ></i>{" "}
                        </span>
                        <span className="elementor-icon-list-text">
                          info@londondrycleaningcompany.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="text-white">
            <div className="elementor-widget-wrap">
              <div
                className="elementor-element elementor-element-b3a336b elementor-widget elementor-widget-heading"
                data-id="b3a336b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="text-center elementor-heading-title elementor-size-default">
                    Newsletter Subscribe
                  </h3>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-08ce91b elementor-widget elementor-widget-bdt-mailchimp"
                data-id="08ce91b"
                data-element_type="widget"
                data-widget_type="bdt-mailchimp.default"
              >
                <div className="elementor-widget-container">
                  <div className="bdt-newsletter-wrapper">
                    <div className="bdt-newsletter-before-text">
                      Join our mailing list for updates on special offers
                    </div>
                    <form
                      // action="https://londondrycleaningcompany.com/wp-admin/admin-ajax.php"
                      className="bdt-mailchimp bdt-grid bdt-flex-middle"
                      bdt-grid=""
                    >
                      <div className="bdt-newsletter-input-wrapper bdt-width-expand bdt-first-column">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email *"
                          required=""
                          className="bdt-input"
                        />
                        <input
                          type="hidden"
                          name="action"
                          value="element_pack_mailchimp_subscribe"
                        />
                        <input
                          type="hidden"
                          name="bdt-sf-bdt-mailchimp-08ce91b"
                          value="true"
                        />
                      </div>
                      <div className="bdt-newsletter-signup-wrapper bdt-width-auto">
                        <button
                          type="submit"
                          className="bdt-newsletter-btn bdt-button bdt-button-primary bdt-width-1-1"
                        >
                          <div className="bdt-newsletter-btn-content-wrapper">
                            <div className="bdt-newsletter-btn-text bdt-display-inline-block">
                              SIGNUP
                            </div>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom" >
          <Col className="m-0 p-0 d-flex justify-content-start">
            <Image
              width="233"
              height="231"
              src="https://londondrycleaningcompany.com/wp-content/uploads/2019/07/leaf-left.png"
              className=""
              alt="" loading="lazy"
            />
          </Col>
          <Col className="m-0 p-0 d-flex justify-content-end">
            <Image fluid
              width="251" height="252"
              src="https://londondrycleaningcompany.com/wp-content/uploads/2019/07/leaf-right.png"
              className="attachment-full size-full" alt="" loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
