import React from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
export default function Hero_section() {
  return (
    <div>
         <div style={{ backgroundColor: '#3074c1', padding: '50px',marginBottom:'100px' }}>
            <Container>
      <Form>
        <Row className="align-items-center m-0">
          <Col sm={12} md={4} lg>
            <Form.Group controlId="destination">
              <Form.Label className="text-white fs-6 fw-semibold">Search Destination*</Form.Label>
              <Form.Control type="text" className='px-3'  placeholder="Enter Destination"/>
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg>
            <Form.Group controlId="paxNumber">
              <Form.Label className="text-white fs-6 fw-semibold">Pax Number*</Form.Label>
              <Form.Control type="text" className='px-3' placeholder="No. of People" />
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg>
            <Form.Group controlId="checkinDate">
              <Form.Label className="text-white fs-6 fw-semibold">Checkin Date*</Form.Label>
              <Form.Control type="date" className='px-4' />
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg>
            <Form.Group controlId="checkoutDate">
              <Form.Label className="text-white fs-6 fw-semibold">Checkout Date*</Form.Label>
              <Form.Control type="date" className='px-4' />
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg className="text-center">
            <Button variant="light" className=" btn_inq fw-bold" style={{ marginTop: '30px' }}>
              INQUIRE NOW
            </Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </div>
    </div>
  )
}
