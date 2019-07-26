import React from "react";
import { Card } from "semantic-ui-react";

const EpiCards = props => {
  // console.log("card props: ", props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          <span>Aired: {props.data.air_date}</span>
        </Card.Meta>
        <Card.Description>Episode: {props.data.episode}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default EpiCards;
