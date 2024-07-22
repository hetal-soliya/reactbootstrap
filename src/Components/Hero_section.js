import React from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
export default function Hero_section() {
  return (
    <div>
         <div style={{ backgroundColor: '#3074c1', padding: '50px',marginBottom:'100px' }}>
            <Container>
      <Form>
        <Row className="align-items-center m-0">
          <Col>
            <Form.Group controlId="destination">
              <Form.Label className="text-white fs-6">Search Destination*</Form.Label>
              <Form.Control type="text"  placeholder="Enter Destination"/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="paxNumber">
              <Form.Label className="text-white fs-6">Pax Number*</Form.Label>
              <Form.Control type="text" placeholder="No. of People" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="checkinDate">
              <Form.Label className="text-white fs-6">Checkin Date*</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="checkoutDate">
              <Form.Label className="text-white fs-6">Checkout Date*</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col className="text-center">
            <Button variant="light" style={{ marginTop: '30px' }}>
              INQUIRE NOW
            </Button>
            {/* <Button variant="primary" className='mt-4  pt-2 pb-2'> INQUIRE NOW</Button> */}
          </Col>
        </Row>
      </Form>
      </Container>
    </div>
    </div>
  )
}
