import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  rightbar: {
    paddingTop: theme.spacing(10),
    position: "fixed",
    width: 240,
  },
}));

function RightBar() {
  const classes = useStyles();

  return (
    <Container className={classes.rightbar}>
      <Typography style={{ fontWeight:500 ,color:"#555"}}>Gallery</Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/mushroom.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://i.pinimg.com/736x/07/0a/0e/070a0e3d3371cddc98f2c52a05392512--travel-tips-travel-bug.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://thumbor.thedailymeal.com/I09MwAF9ZALXsdpdLjtZcWPgwWk=/870x565/https://www.theactivetimes.com/sites/default/files/2020/11/16/iStock-804595788.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='http://www.studentuniverse.com/blog/wp-content/uploads/2014/04/Santorini-Greece.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/08/kw-050917-A-front-view-of-the-hilltop-Maruthamalai-Temple-in-the-city-of-Coimbatore.jpg'
            alt=''
          />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}

export default RightBar;
