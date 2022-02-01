import {
  Button,
  Container,
  makeStyles,
  Tooltip,
  Fab,
  Modal,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  rightbar: {
    paddingTop: theme.spacing(10),
  },
  fab: {
    position: "fixed",
    bottom: 25,
    right: 25,
  },
  //   model: {
  //     display: (props) => (props.open ? "flex" : "none"),
  //   },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 400,
    height: 400,
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 350,
      borderRadius: 8,
    },
  },
}));

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.add}>
      <Tooltip title='Add' aria-label='add'>
        <Fab color='primary' className={classes.fab}>
          <AddIcon onClick={() => setOpen(true)} />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.container}>CopyRights:@Kdee</Container>
      </Modal>
    </div>
  );
}

export default Add;
