import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Nabar";
import MyContext from "../context/MyContext";

const About = () => {
  const { name, num, course, setnum, requests } = useContext(MyContext);

  c

  return (
    <>
      <Header />
      <Container className="mt-5">
        <h1>Requests</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.address}</td>
                <td>{request.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* About Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <div className="text-center mb-4">
              <h1 className="display-4 fw-bold text-primary">{name}</h1>
              <h1 className="display-4 fw-bold text-primary">{num}</h1>
              <h1 className="display-4 fw-bold text-primary">{course}</h1>

              <button onClick={() => setnum(num + 1)}>+</button>
              <span>{num}</span>
              <button onClick={() => setnum(num - 1)}>-</button>

              <p className="lead text-muted">
                Empowering students with comprehensive academic management tools
              </p>
            </div>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h3 className="text-primary mb-3">Our Mission</h3>
                <p>
                  To provide students with a centralized platform that
                  simplifies academic management, enhances learning experiences,
                  and fosters educational success through innovative technology
                  solutions.
                </p>
                <p>
                  We believe in making education more accessible, organized, and
                  efficient for every student.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h3 className="text-success mb-3">Our Vision</h3>
                <p>
                  To be the leading student portal that transforms how students
                  interact with their academic journey, creating seamless
                  connections between students, educators, and institutions.
                </p>
                <p>
                  We envision a future where every student has the tools they
                  need to succeed at their fingertips.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">What We Offer</h2>
            <Row className="g-4">
              <Col md={4}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="fas fa-book fa-3x text-primary"></i>
                  </div>
                  <h4>Course Management</h4>
                  <p className="text-muted">
                    Easily track your courses, assignments, and academic
                    progress all in one place.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="fas fa-users fa-3x text-success"></i>
                  </div>
                  <h4>Student Community</h4>
                  <p className="text-muted">
                    Connect with fellow students, form study groups, and
                    collaborate on projects.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="fas fa-chart-bar fa-3x text-warning"></i>
                  </div>
                  <h4>Performance Analytics</h4>
                  <p className="text-muted">
                    Get detailed insights into your academic performance and
                    identify areas for improvement.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow">
              <Card.Body className="text-center">
                <h3 className="mb-4">Get in Touch</h3>
                <p className="mb-4">
                  Have questions or suggestions? We'd love to hear from you!
                </p>
                <Row className="justify-content-center">
                  <Col sm={6} md={4} className="mb-3">
                    <Button variant="primary" className="w-100">
                      <i className="fas fa-envelope me-2"></i>
                      Email Us
                    </Button>
                  </Col>
                  <Col sm={6} md={4} className="mb-3">
                    <Button variant="success" className="w-100">
                      <i className="fas fa-phone me-2"></i>
                      Call Support
                    </Button>
                  </Col>
                  <Col sm={6} md={4} className="mb-3">
                    <Button variant="info" className="w-100">
                      <i className="fas fa-comments me-2"></i>
                      Live Chat
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mt-5 mb-5">
          <Col>
            <h2 className="text-center mb-4">Our Team</h2>
            <Row className="justify-content-center">
              <Col md={3} className="text-center mb-4">
                <div className="mb-3">
                  <div
                    className="bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fas fa-user fa-3x text-white"></i>
                  </div>
                </div>
                <h5>Development Team</h5>
                <p className="text-muted">Building innovative solutions</p>
              </Col>
              <Col md={3} className="text-center mb-4">
                <div className="mb-3">
                  <div
                    className="bg-success rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fas fa-headset fa-3x text-white"></i>
                  </div>
                </div>
                <h5>Support Team</h5>
                <p className="text-muted">Always here to help</p>
              </Col>
              <Col md={3} className="text-center mb-4">
                <div className="mb-3">
                  <div
                    className="bg-warning rounded-circle mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fas fa-lightbulb fa-3x text-white"></i>
                  </div>
                </div>
                <h5>Design Team</h5>
                <p className="text-muted">Creating great experiences</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
