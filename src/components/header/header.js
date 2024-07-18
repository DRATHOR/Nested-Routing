import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLeft}>
        <span className={classes.heading}>Nested Routing Example</span>
      </div>
      <div className={classes.headerRight}>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/contacts"}>contacts</Link>
      </div>
    </div>
  );
};

export default Header;
