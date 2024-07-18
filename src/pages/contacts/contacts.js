import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={classes.contactsContainer}>
      <h2>Contacts</h2>
      <div className={classes.contactsDetails}>
        <Link to={"instagram"}>Instagram</Link>
        <Link to={"whats-app"}>Whatapp </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Contacts;
