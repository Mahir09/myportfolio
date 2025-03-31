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
            Hi everyone! I am Mohammad Mahir Shekh but you can call me{" "}
            <span className="purple"> Mahir. </span>
            I’m pursuing my postgraduate studies in{" "}
            <span className="purple"> Cloud Computing Technologies</span> at
            George Brown College, Toronto, Canada, after completing my Bachelor
            of Technology in{" "}
            <span className="purple"> Information Technology </span> from
            Charusat University, Changa.
            <br />
            <br />I have a strong passion for{" "}
            <span className="purple">
              {" "}
              cloud computing, DevOps, and software testing
            </span>{" "}
            with hands-on experience in AWS, GCP, CI/CD, and automation. My goal
            is to design and implement scalable, secure, and efficient cloud
            solutions while continuously improving system performance.
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

          <p style={{ color: "rgba(49, 142, 136, 0.887)" }}>
            " YOUR FUTURE IS CREATED BY WHAT YOU DO TODAY{" "}
            <span style={{ "text-decoration": "line-through" }}>
              NOT TOMORROW
            </span>{" "}
            "
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
