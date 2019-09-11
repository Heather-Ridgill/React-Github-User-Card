import React from "react";
import GitCard from "./GitCard.js";
import { Grid } from "semantic-ui-react";

const GitList = props => (
  <>
    <GitCard subj={props.data} />
    <Grid columns={1} centered={true}>
      <Grid.Row>
        <Grid.Column>
          {props.list.map(cv => {
            return <GitCard subj={cv} key={cv.login} />;
          })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default GitList;
