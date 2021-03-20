import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './CardData.css'

const CardData = (props) => {
  const { name, img, description } = props.cardData;
    
  return (
    <div className="col-md-3 cardStyle text-center shadow">
      <Link to={`/name/${name}`}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};

export default CardData;
