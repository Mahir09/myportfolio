import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImPointDown } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "} Mohammad Mahir Shekh but you can
            call me <span className="purple"> Mahir. </span>
            I am from{" "}
            <span className="purple"> Kathlal,</span> Gujarat-India.
            I am pursuing my Bachelor of Technology in the field of{" "}
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
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Poetry </span>
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Inspiration <ImPointDown />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            " YOUR FUTURE IS CREATED BY WHAT YOU DO TODAY <span style={{ 'text-decoration': 'line-through' }}>NOT TOMORROW</span> "
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
