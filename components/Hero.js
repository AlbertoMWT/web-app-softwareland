import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Welcome to mwt
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                An opportunity to get the job of your{' '}
                <span className="text-primary font-weight-medium">dreams</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                We are a company that provides you with the best services in the IT industry, and now you can be part of us.
                We are hiring people who are passionate about the IT industry that want to work for a company that is dedicated to 
                the development of the best solutions. 
              </p>
              <a href="#feature" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/img1.svg"
                alt="Group Members"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
