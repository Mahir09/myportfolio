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
              INTRODUCING <span className="purple"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              Honesty, I like to develop new things that
              can reduce human efforts and saves time.
              <br />
              <br />
              My field of Interests are building new&nbsp;
              <i>
                <b className="purple">
                  Cloud Based Softwares, Web Technologies & Products, Mobile Applications{" "}
                </b>{" "}
                as well as <b className="purple">Blockchain Development.</b>
              </i>
              <br />
              <br />
              Sometimes I become <b className="purple"> Stubborn </b>
              but this shows how dedicated I am to every decision I make and
              every task I encounter.
              <br />
              <br />
              From this journey at least I have learned something,
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
