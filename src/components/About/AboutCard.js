import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Mohammad Mahir Shekh </span> but you can
            call me <span className="purple"> Mahir </span>.
            <br />I am from{" "}
            <span className="purple"> Kathlal, Gujarat-India.</span>
            <br />I am pursuing my B. Tech. in the field of{" "}
            <span className="purple"> Information & Technology </span> at
            Charusat University, Changa.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time With Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Web Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " YOUR FUTURE IS CREATED BY WHAT YOU DO TODAY <span style={{ 'text-decoration': 'line-through' }}>NOT TOMORROW</span> "
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
