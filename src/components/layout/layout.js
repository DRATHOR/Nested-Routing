import React from "react";
import classes from './layout.module.scss';

const Layout = ({children}) => {
  return <div className={classes.layoutContainer}>
    {children}
  </div>;
};

export default Layout;
