import { urlAlphabet } from 'nanoid';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Project = () => {
  const projects = [
    {
      icon: '/images/p1.svg',
      title: 'GasInfo',
      desc: 'Automate the sending of reports from your gas station. Save time and avoid errors in your daily volume reports, price reports and quarterly reports. GasoInfo is the best way to fulfill your obligations with the Income Law.'
    },
    {
      icon: '/images/p2.svg',
      title: 'Almirante.io',
      desc: 'Almirante is a system for construction companies. Automate the registration of payroll, material requirements, workers, customers and suppliers. Collaborate with your team from wherever you are.'
    },
    {
      icon: '/images/p3.jpg',
      title: 'MEM México',
      desc: 'Find out about the daily behavior of prices in the Mexican electricity market. With MEM Mexico it is simple and friendly. Download the free app today.'
    },
    {
      icon: '/images/p4.svg',
      title: 'Michoacán está en ti',
      desc: 'Independent administrative systems for aquaculture farms to report the details of their production to the State Commission for Health and Safety of Michoacán CESAMICH and to the Michoacán Fishing Commission COMPESCA.'
    },
    {
      icon: '/images/p5.svg',
      title: 'Cervecería de Colima',
      desc: 'Created in partnership with Cantaloop.mx, the Cervecería de Colima website is built using React to streamline its performance. It includes an internally developed content management system that exceeds the capabilities of systems such as Wordpress or Drupal'
    }
  ];

  return (
    <section className="section" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Projects</span>
              </h3>
              <p className="text-muted">
                As a IT company we offer a wide range of projects, you can be
                part of some of them. Projects like this.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {projects.map((project, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-3 mt-5 titlePs">
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">
                    {project.title}{' '}
                  </h5>
                  <img className="icon" src={project.icon} alt={project.icon} />
                </div>
                <p className="text-muted mb-4">{project.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Project;
