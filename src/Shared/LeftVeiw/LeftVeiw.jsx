import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import { FaCalendar } from 'react-icons/fa';
const LeftVeiw = () => {
 
  return (
    <Row xs={1} md={2} lg={1} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Card.Title>
          <Card.Text>
          <FaCalendar/>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={second} />
        <Card.Body>
          <Card.Title>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Card.Title>
          <Card.Text>
          <FaCalendar/>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={third} />
        <Card.Body>
          <Card.Title>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Card.Title>
          <Card.Text>
         <FaCalendar/>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
  );
};

export default LeftVeiw;