import React from "react";
import { Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "../App.css";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            Profile
            <ListItemText />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            My Dashboard
            <ListItemText />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            Wishlist
            <ListItemText />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            Find Products
            <ListItemText />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            Home Page
            <ListItemText />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <InboxIcon />
            Logout
            <ListItemText />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        Open Right{" "}
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList("right")}
      </SwipeableDrawer>
    </div>
  );
}
