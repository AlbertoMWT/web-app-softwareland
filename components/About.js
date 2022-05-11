import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => {
  return (
    <section className='section bg-light' id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='title text-center mb-5'>
              <h3 className='font-weight-normal text-dark'>
                {" "}
                About <span className='text-warning'> Us </span>
              </h3>
              <p className='text-muted'>
                {" "}
                We are a company in charge of offering digital marketing
                solutions and applications for your projects and sales, with
                more than 10,000 employees and several teams working together,
                we can make what you thought impossible, possible.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className='font-weight-light line-height-1_6 text-dark mb-4'>
              We don`t solve problems, we create solutions
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className='text-dark font-weight-light f-20 mb-3'>
                  Our Mission
                </h6>
                <p className='text-muted font-weight-light'>
                  Create a company so that other companies can secure their
                  place on the web, with all the requirements that this entails.
                </p>
              </Col>
              <Col md={6}>
                <h6 className='text-dark font-weight-light f-20 mb-3'>
                  Our Vision
                </h6>
                <p className='text-muted font-weight-light'>
                  make our websites the most visited on the net
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
