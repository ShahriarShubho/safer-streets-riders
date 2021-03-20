import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './CardData.css'

const CardData = (props) => {
  const { name, img } = props.cardData;
    
  return (
    <div className="col-lg-3 col-md-6 col-sm-9 col-9 m-auto text-center shadow">
      <Link className="text-decoration-none text-dark" to={`/name/${name}`}>
      <Card className="cardStyle" >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};

export default CardData;
