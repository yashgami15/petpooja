import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div
      className="col-10"
      style={{
        padding: '20px', // Optional padding to make the content neater
        height: '100vh', // Full viewport height to make it scrollable when needed
        overflowY: 'auto', // Enable scrolling when content exceeds height
      }}
    >
      <div className="d-flex align-items-center">
        <h5>Good Evening, Ajay</h5>
      </div>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Tasks</Card.Title>
              <Card.Text>22 Tasks</Card.Text>
              <Button variant="primary">Manage</Button>
            </Card.Body> {/* Make sure this is properly closed */}
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Issues</Card.Title>
              <Card.Text>22 Issues</Card.Text>
              <Button variant="secondary">View Issues</Button>
            </Card.Body> {/* Properly closed */}
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Forms</Card.Title>
              <Card.Text>20 Forms</Card.Text>
              <Button variant="success">View Forms</Button>
            </Card.Body> {/* Properly closed */}
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Employee Wise Progress</h4>
          {/* Here you can add a table or progress bars */}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
