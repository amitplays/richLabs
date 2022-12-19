import React from "react";
import {
  Col,
  Row,
  ListGroup,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import fbIcon from "../assets/fbIcon.png";
import fbIcon2 from "../assets/fbLogo.png";
import messIcon from "../assets/mesIcon2.png";
import instaIcon from "../assets/instaIcon.png";
import linkedIcon from "../assets/linkedIcon.png";

// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="parentOfOneCard">
        <div className="footerCardStyles">
          <Row>
            <Col sm={6}>
              <h3> RichLabs.io</h3>
              <p>Enterprise Application Solutions</p>
              <Form xs={2}>
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Email
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Subscribe for updates"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col sm={6} className="footerLinks">
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    ABOUT
                  </ListGroup.Item>
                  <ListGroup.Item>About Us</ListGroup.Item>
                  <ListGroup.Item>Our Team</ListGroup.Item>
                  <ListGroup.Item>Our Clients</ListGroup.Item>
                </ListGroup>
              </div>
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    RESOURCES
                  </ListGroup.Item>
                  <ListGroup.Item>App Analyzer</ListGroup.Item>
                  <ListGroup.Item>HCL Domino</ListGroup.Item>
                  <ListGroup.Item>HCL Volt</ListGroup.Item>
                </ListGroup>
              </div>
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    Services
                  </ListGroup.Item>
                  <ListGroup.Item>Website Development</ListGroup.Item>
                  <ListGroup.Item>Mobile App Development</ListGroup.Item>
                  <ListGroup.Item>Custom App Development</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <p className="footerLinksFirstItem">
              RichLabs.io - ALL RIGHTS RESERVED
            </p>
          </Row>
          <Row>
            <Col sm={7}>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="./ContactUs">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col sm={5}>
              <ul style={{ textAlign: "center", marginTop: "-15px" }}>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={linkedIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={messIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={instaIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={fbIcon2}
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
