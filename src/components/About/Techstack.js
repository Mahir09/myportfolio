import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
  DiAndroid,
  DiCss3,
  DiJavascript1,
  DiHtml5,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiGooglecloud,
  SiFirebase,
  SiMysql,
  SiFlutter,
  SiGnubash,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /> {/* Google Cloud */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash /> {/* Bash */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML5 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS3 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> {/* Firebase */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /> {/* Flutter */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
    </Row>
  );
}

export default Techstack;
