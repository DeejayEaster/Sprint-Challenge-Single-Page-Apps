import React from "react";
import { Card } from "semantic-ui-react";

const LocCards = info => {
  // console.log("card info: ", info);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{info.data.name}</Card.Header>
        <Card.Meta>
          <span className="date">Type: {info.data.type}</span>
        </Card.Meta>

        <Card.Description>Dimension: {info.data.dimension}</Card.Description>
        <Card.Description>Created: {info.data.created} </Card.Description>
      </Card.Content>
    </Card>
  );
};
export default LocCards;
