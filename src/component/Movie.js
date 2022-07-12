import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import BulletImage from "../component/Film/9Bullets.jpg";
import memoryImage from "../component/Film/memory.jpg";
import LedgeImage from "../component/Film/TheLedge.jpg";

const Movie = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="MovieWrapper">
          <Card className="text-dark MovieImage">
            <Image src={BulletImage} alt="9Bullets" />
            <Button variant="danger">Add to Favorite</Button>{" "}
            <Card.Title className="text-center">9Bullets</Card.Title>
            <Card.Text className="text-left">movie</Card.Text>
            <Card.Text className="text-left">Release : 2022 </Card.Text>
            <br />
            <br />
            <Button variant="success">Detail</Button>{" "}
          </Card>
        </Col>
        <Col md={4} className="MovieWrapper">
          <Card className="text-dark MovieImage">
            <Image src={memoryImage} alt="9Bullets" />
            <Button variant="danger">Add to Favorite</Button>{" "}
            <Card.Title className="text-center">Memory</Card.Title>
            <Card.Text className="text-left">movie</Card.Text>
            <Card.Text className="text-left">Release : 2022 </Card.Text>
            <br />
            <br />
            <Button variant="success">Detail</Button>{" "}
          </Card>
        </Col>{" "}
        <Col md={4} className="MovieWrapper">
          <Card className="text-dark MovieImage">
            <Image src={LedgeImage} alt="9Bullets" />
            <Button variant="danger">Add to Favorite</Button>{" "}
            <Card.Title className="text-center">The Ledge</Card.Title>
            <Card.Text className="text-left">movie</Card.Text>
            <Card.Text className="text-left">Release : 2022 </Card.Text>
            <br />
            <br />
            <Button variant="success">Detail</Button>{" "}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
