import React from "react";
import Card from "../../../UI/Card";
import classes from "./LeagueBody.module.css";
import imgx from "../../../assests/display-img.png";
import LeagueTable from "./LeagueTable/LeagueTable";
import { Link, useLocation } from "react-router-dom";
// import MatchTable from "./MatchTable/MatchTable";
const LeagueBody = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className={classes.img_container}>
        <img src={imgx} alt="header-img" />
      </div>
      <Card>
        <div className={classes.LeagueOuterDiv}>
          <div className={classes.firstHeadingLinks}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={classes.hover_flow_up}>
                <Link to="/" className={classes.first_span}>
                  {" "}
                  All Competitions
                </Link>
                <span className={classes.second_span}> v</span>
              </div>{" "}
              /
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                Championship{" "}
              </div>
            </div>
          </div>
          <div className={classes.secondHeading}>
            <div>Championship</div>
          </div>
          <div className={classes.secondHeadingLinks}>
            <Link to="/league/2016">
              <div className={pathname.match("/league") && classes.underlined}>
                STANDINGS
              </div>
            </Link>

            <Link
              to="/matches/2016"
              className={pathname.match("/matches") && classes.underlined}
            >
              <div>MATCHES</div>
            </Link>
          </div>

          {children}
        </div>
      </Card>
    </div>
  );
};

export default LeagueBody;
