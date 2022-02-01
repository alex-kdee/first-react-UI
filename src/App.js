import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import LeftBar from "./components/leftBar";
import NavBar from "./components/navBar";
import RightBar from "./components/rightBar";
import Feed from "./components/feed";
import Add from "./components/add";

const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
