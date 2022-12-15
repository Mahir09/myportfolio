import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anomaly from "../../Assets/Projects/anomaly.png";
import charuvidya from "../../Assets/Projects/charuvidya.png";
import eventmanager from "../../Assets/Projects/eventmanager.jpg";
import restaurant from "../../Assets/Projects/restaurant.png";
import letsTalk from "../../Assets/Projects/letsTalk.png";
import rideBooking from "../../Assets/Projects/rideBooking.png";
import careZone from "../../Assets/Projects/careZone.jpg";
import mmsERC20 from "../../Assets/Projects/mmsERC20.png";
import eVoting from "../../Assets/Projects/eVoting.jpg";

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
              imgPath={mmsERC20}
              isBlog={false}
              title="MMS: ERC-20 Token and Crowd Sale website"
              description="The Ethereum blockchain allows you to create your own cryptocurrency, or token, that can be purchased with Ether. ERC-20 is simply a standard that specifies how these tokens behave, so that they are compatible with other platforms like cryptocurrency exchanges. Crowd sales are a way for a company to raise capital for their business by creating their own ERC-20 token that can be purchased by investors with Ether."
              link="https://github.com/Mahir09/my_own_cryptocurrency"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eVoting}
              isBlog={false}
              title="E-Voting-Smartcontract"
              description="The idea is to create one contract per ballot, providing a short name for each option. Then the creator of the contract who serves as chairperson will give the right to vote to each address individually. The persons behind the addresses can then choose to either vote themselves or to delegate their vote to a person they trust. At the end of the voting time, winningProposal() will return the proposal with the largest number of votes."
              link="https://github.com/Mahir09/E-Voting-Smartcontract"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideBooking}
              isBlog={true}
              title="Ride Booking Using Cryptocurrency Pay"
              description="In current time, car sharing may encounter trust issues between customers and car owners along with some security concerns. One way to introduce more transparency to a car sharing service and make payments secure and convenient is to implement a cryptocurrency in payment method."
              link="https://mahirshekh.wordpress.com/2022/11/03/ride-booking-using-cryptocurrency-pay/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careZone}
              isBlog={true}
              title="CareZone: Medicine Reminder App"
              description="Good health has been a major concern since the inception of mankind whilst for some people attaining good health requires taking prescribed medicines or pills routinely. This mobile application is for medicine or pill reminder as prescribed by a doctor to patients using the Flutter integrated development environment."
              link="https://mahirshekh.wordpress.com/2022/07/08/carezone-medicine-reminder-app/"
            />
          </Col>
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
