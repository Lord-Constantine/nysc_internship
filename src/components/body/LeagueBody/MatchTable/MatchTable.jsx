import React, { useState, useEffect } from "react";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import classes from "./MatchTable.module.css";
import img11 from "../../../../assests/img11.png";
import img12 from "../../../../assests/img12.png";
import LeagueBodycontainer from "../LeagueBody";
const MatchTable = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.football-data.org/v2/competitions/2016/matches?season=2021&matchday=46",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "fc8891ab35664262af36b84ccd4d9fb4",
        },
      });
      setLoading(false);
      if (data && data.matches.length > 0) {
        setData(data.matches);
      }
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <LeagueBodycontainer>
      <div className={classes.matchWeekHeading}>Matchweek 46</div>
      {loading ? (
        <div
          style={{
            height: "300px",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PuffLoader color="#93dbe9" size={200} />
        </div>
      ) : (
        <div className={classes.matchWeekCardContainer}>
          {data.map(({ awayTeam, homeTeam, score }) => (
            <div className={classes.matchWeekCardDiv}>
              <div className={classes.matchWeekCardOuterDiv}>
                <div className={classes.matchWeekFlexDiv}>
                  <div className={classes.matchWeekImgDiv}>
                    <img src={img11} alt="img" />
                    <div>{awayTeam.name}</div>
                  </div>
                  <div className={classes.score}>{score.fullTime.awayTeam}</div>
                </div>
                <div className={classes.matchWeekFlexDiv}>
                  <div className={classes.matchWeekImgDiv}>
                    <img src={img12} alt="img" />
                    <div>{homeTeam.name}</div>
                  </div>
                  <div className={classes.score}>{score.fullTime.homeTeam}</div>
                </div>
              </div>
              <div className={classes.rightMatchWeekDiv}>
                <div>FT</div>
                <div>05/07</div>
                <div>11:30</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </LeagueBodycontainer>
  );
};

export default MatchTable;
