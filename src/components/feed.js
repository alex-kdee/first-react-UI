import { Button, makeStyles, Container } from "@material-ui/core";
import React from "react";
import Post from "./post";

const useStyles = makeStyles((theme) => ({
  feed: {
    paddingTop: theme.spacing(10),
  },
}));

function Feed() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.feed}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </Container>
    </div>
  );
}

export default Feed;
