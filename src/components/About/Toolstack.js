// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiAndroidstudio,
//   SiVisualstudiocode,
//   SiPostman,
//   SiGithub,
//   SiUbuntu,
// } from "react-icons/si";


// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAndroidstudio />
//       </Col>      
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGithub />
//       </Col>      
//       <Col xs={4} md={2} className="tech-icons">
//         <SiUbuntu />
//       </Col>      
//     </Row>
//   );
// }

// export default Toolstack;


import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiPostman,
  SiGithub,
  SiUbuntu,
  SiJenkins,
  SiDocker,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> {/* Android Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins /> {/* Jenkins */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Docker */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu /> {/* Ubuntu */}
      </Col>
    </Row>
  );
}

export default Toolstack;
