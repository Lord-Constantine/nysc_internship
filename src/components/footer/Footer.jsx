import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footerOuterDiv}>
      <div className={classes.footerDiv}>
        <h2>Built by</h2>
        <div>Ologbosere Joshua</div>
      </div>
      <div className={classes.footerSecondDiv}>
        <h2>Credits:</h2>
        <div>Football data API</div>
      </div>
    </div>
  );
};

export default Footer;
