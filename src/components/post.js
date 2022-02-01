import {
  Button,
  makeStyles,
  Container,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  post: {
    paddingBottom: theme.spacing(1),
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <div className={classes.post}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          title='Furniture'
          subheader='September 14, 2016'
        />
        <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <CardContent>
          <Typography>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Post;
