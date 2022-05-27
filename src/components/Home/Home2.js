import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              INDRODUCING <span className="purple"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              I just fell in love with programming and developing new thing that
              can reduce human efforts and saves time.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies and Products, Mobile Application Development{" "}
                </b>{" "}
                and interested into{" "}
                <b className="purple">Blockchain Development.</b>
              </i>
              <br />
              <br />
              Somtimes i become Stubborn <b className="purple"> Stubborn </b>
              but this shows how dedicated I am to every decision I make and
              every task I encounter.
              <br />
              <br />
              From this journey i have at least learnt something,
              <i>
                <b className="purple"> I think… </b>
              </i>
              🤷‍♂️
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
