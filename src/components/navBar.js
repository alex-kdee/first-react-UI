import {
  AppBar,
  Badge,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Cancel, Mail, NoEncryption, Notifications } from "@material-ui/icons";
import { alpha } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  lgla: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  lgsm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.45),
      width: "50%",
    },
    transition: theme.transitions.create("width"),
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    borderColor: "primary",
  },
  icon: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  icondiv: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  res_search: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  },
}));

function NavBar() {
  const [open, setopen] = useState(false);
  const classes = useStyles({ open });

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.lgla}>
            InstaFeed
          </Typography>
          <Typography variant='h6' className={classes.lgsm}>
            Feed
          </Typography>
          <div className={classes.search}>
            <div className={classes.icon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search...!'
              className={classes.input}
            ></InputBase>
          </div>

          <div className={classes.icondiv}>
            <div className={classes.res_search}>
              <SearchIcon
                className={classes.badge}
                onClick={() => setopen(true)}
              />
            </div>

            <Badge badgeContent={3} color='secondary' className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={3} color='secondary' className={classes.badge}>
              <Notifications />
            </Badge>
          </div>
          <div className={classes.cancel}>
            <Cancel className={classes.badge} onClick={() => setopen(false)} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
