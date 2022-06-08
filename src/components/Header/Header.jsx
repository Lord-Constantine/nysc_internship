import React from "react";
import classes from "./Header.module.css";
import bg from "../../assests/bg-football.jpg";
const Header = () => {
  return (
    <div className={classes.headerImg_container}>
      <img src={bg} alt="background_img" />
    </div>
  );
};

export default Header;
