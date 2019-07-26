import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const Cards = props => {
  console.log("card props: ", props);
  return (
    <Card>
      <Image src={props.data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          <span className="date">Status: {props.data.status}</span>
        </Card.Meta>

        {/* <Card.Description>Location: {props.data.location} </Card.Description>
        <Card.Description>Origin: {props.data.origin} </Card.Description> */}

        <Card.Description>Gender: {props.data.gender}</Card.Description>
        <Card.Description>Species: {props.data.species}</Card.Description>
        <Card.Content extra>
          <a href={props.data.episode}>
            <Icon name="user" />
            Episodes
          </a>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
export default Cards;
