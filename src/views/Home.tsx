import { Col, Row } from "react-bootstrap";
import '../styles/Home.css'

export const Home = () => {
  return(
    <div>
      <Row>
        <Col sm={12} className='head'>
          <span className='presentation'>
            <h1>Hi! I'm Delmer</h1>
            <br/>
            <h3>Software Engineer</h3>
          </span>
        </Col>
      </Row>
      <Row className="skills">
        <Col sm={12} lg={4}>
          <h5 className="net">.NET Developer</h5>
          <p className="netDescription">
            API, Desktop, and Web applications using Microsoft's Framework .NET.
          </p>
        </Col>
        <Col sm={12} lg={4}>
          <h5 className="db">SQL Databases</h5>
          <p className="dbDescription">
            Relational databases knowlege consuming and creating objects.
          </p>
        </Col>
        <Col sm={12} lg={4}>
          <h5 className="api">API Development</h5>
          <p className="apiDescription">
            API design and development using .NET, NodeJS, and FastAPI.
          </p>
        </Col>
      </Row>
    </div>
  );
}