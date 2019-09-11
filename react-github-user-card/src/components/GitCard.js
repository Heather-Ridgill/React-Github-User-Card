import React from "react";
import { Card, Image } from "semantic-ui-react";

const GitCard = props => (
  <a href={props.subj.html_url} target="blank" className="gitCard">
    {/* <Grid colums={1}>
      <Grid.Row>
        <Grid.Column> */}
    <Card centered={true}>
      <Image src={props.subj.avatar_url} alt="Profile Avatar" />
      <Card.Content>
        <Card.Header>{props.subj.name}</Card.Header>
        <Card.Meta>{props.subj.company}</Card.Meta>
        <Card.Description>{props.subj.bio}</Card.Description>
        <ul>
          <li>Followed by: {props.subj.followers}</li>
          <li>Follows: {props.subj.following}</li>
          <li>Repos: {props.subj.public_repos}</li>
        </ul>
      </Card.Content>
    </Card>
    {/* </Grid.Column>
      </Grid.Row>
    </Grid> */}
  </a>
);
export default GitCard;
