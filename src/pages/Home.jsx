import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Nabar";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Container fluid className="p-0">
        {/* Hero Section */}
        <div className="bg-primary text-white py-5 mb-4">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="display-4 fw-bold mb-3">Welcome to Student Portal</h1>
                <p className="lead mb-4">
                  Your gateway to academic excellence and student services
                </p>
                <Button variant="light" size="lg" className="me-3">
                  Get Started
                </Button>
                <Button variant="outline-light" size="lg">
                  Learn More
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Features Section */}
        <Container className="mb-5">
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">Student Services</h2>
              <p className="text-muted">Access all your academic needs in one place</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    {/* <i className="fas fa-graduation-cap fa-3x text-primary"></i> */}
                  </div>
                  <Card.Title>Courses</Card.Title>
                  <Card.Text>
                    View and manage your enrolled courses and academic progress.
                  </Card.Text>
                  <Button variant="outline-primary">View Courses</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-calendar-alt fa-3x text-success"></i>
                  </div>
                  <Card.Title>Schedule</Card.Title>
                  <Card.Text>
                    Check your class schedule and important academic dates.
                  </Card.Text>
                  <Button variant="outline-success">View Schedule</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-chart-line fa-3x text-warning"></i>
                  </div>
                  <Card.Title>Grades</Card.Title>
                  <Card.Text>
                    Track your academic performance and view detailed grade reports.
                  </Card.Text>
                  <Button variant="outline-warning">View Grades</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-users fa-3x text-info"></i>
                  </div>
                  <Card.Title>Community</Card.Title>
                  <Card.Text>
                    Connect with fellow students and join study groups.
                  </Card.Text>
                  <Button variant="outline-info">Join Community</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Quick Actions */}
        <Container className="mb-5">
          <Row>
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h3 className="mb-3">Quick Actions</h3>
                  <Row className="g-3">
                    <Col sm={6}>
                      <Button variant="primary" className="w-100">
                        Submit Assignment
                      </Button>
                    </Col>
                    <Col sm={6}>
                      <Button variant="secondary" className="w-100">
                        Download Transcript
                      </Button>
                    </Col>
                    <Col sm={6}>
                      <Button variant="success" className="w-100">
                        Pay Fees
                      </Button>
                    </Col>
                    <Col sm={6}>
                      <Button variant="info" className="w-100">
                        Library Resources
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="mb-3">Announcements</h4>
                  <div className="mb-3">
                    <small className="text-muted">Today</small>
                    <p className="mb-1">Midterm exams schedule released</p>
                  </div>
                  <div className="mb-3">
                    <small className="text-muted">Yesterday</small>
                    <p className="mb-1">Library hours extended for finals</p>
                  </div>
                  <Button variant="outline-primary" size="sm">
                    View All
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
