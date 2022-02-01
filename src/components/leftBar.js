import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Camera, DateRange, ExitToApp, GroupAdd, Home, Image, Settings, Store } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  leftbar: {
    position:"fixed", 
    width:65,
    marginLeft: theme.spacing(0),
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      
    },
  },
  items: {
    paddingRight: theme.spacing(44),
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(4),
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "30px",
    },
  },
}));

function LeftBar() {
  const classes = useStyles();

  return (
    <Container className={classes.leftbar}>
      <div className={classes.items}>
        <Home className={classes.icon} variant='filled' />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <GroupAdd className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.items}>
        <DateRange className={classes.icon} />
        <Typography className={classes.text}>Today</Typography>
      </div>
      <div className={classes.items}>
        <Camera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.items}>
        <Image className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.items}>
        <Store className={classes.icon} />
        <Typography className={classes.text}>Market</Typography>
      </div>
      <div className={classes.items}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.items}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>LogOut</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
