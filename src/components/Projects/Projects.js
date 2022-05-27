import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anomaly from "../../Assets/Projects/anomaly.png";
import charuvidya from "../../Assets/Projects/charuvidya.png";
import eventmanager from "../../Assets/Projects/eventmanager.jpg";
import restaurant from "../../Assets/Projects/restaurant.png";
import letsTalk from "../../Assets/Projects/letsTalk.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are the projects I've worked on</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anomaly}
              isBlog={true}
              title="Anomaly Detection In Video Surveillance"
              description="This project aims to reduce human effort and saves time. Basically it detects unusual event in videos. Some to get a perticular time frame from the very long videos is time consuming process. Using automated systems to detect unusual events in this scenario is highly desirable and leads to better security and broader surveillance."
              link="https://mahirshekh.wordpress.com/2022/04/16/anomaly-detection-in-video-surveillance/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charuvidya}
              isBlog={true}
              title="CharuVidya"
              description="The application CharuVidya is basically Online Learning Platform which provides different types of courses. It has categories of courses like science, technology, medical etc. Here, User have to register on this platform and then they can access or enroll any courses which they want. In this platform there is different features like user can search course, user can see the list of course that they have already enroll."
              link="https://mahirshekh.wordpress.com/2021/10/09/charuvidhya-e-learning-platform/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventmanager}
              isBlog={true}
              title="Event Manager"
              description="This application is event manager software project that serves the functionality of an event manager. The Application provides most of the basic functionality required for an event. All the data will be store in Google Fire-base. This is a process of organizing a professional and focused event, for a particular target audience. It involves planning, budgeting, organizing and executing events such as wedding, musical concerts, corporate seminars, exhibitions, birthday celebrations, theme parties, etc."
              link="https://mahirshekh.wordpress.com/2021/06/20/online-event-manager-application/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={true}
              title="Restaurant Management System"
              description="This website is a basic Restaurant management system that allows user registration. Visitors are allowed to book their table in advance from the website without registering themselves. The user can order the food, make table reservation, has options related cart. The admin can manage registered user, Food details, chef details, order details and about reservations."
              link="https://mahirshekh.wordpress.com/2021/08/03/my-first-internship/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letsTalk}
              isBlog={false}
              title="Let's Talk"
              description="This is a simple group chat application made with Django. This allows a group of pepole to create a room of their choice and chat in that group. Also it shows which message is sent by whom and on what time it is sent. Administator user have access to the groups and messages. "
              link="https://github.com/Mahir09/letsTalk-django-chat-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
