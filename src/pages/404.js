import { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import  HeaderTwo  from "../components/Header/HeaderTwo";

const NotFound = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/backgrounds/404-bg.jpg"
          })`
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="nothing-found-content">
                <h1 className="space-mb--50">Oops...Page does not exist!</h1>
                <p className="direction-page">
                  Please go back to{" "}
                  <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                    <a>Homepage</a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default NotFound;
