import React, { useState, useEffect } from "react";
import classes from "./LeagueTable.module.css";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import LeagueTableContainer from "../LeagueBody";
import img1 from "../../../../assests/img5.png";
const LeagueTable = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "fc8891ab35664262af36b84ccd4d9fb4",
        },
      });
      setLoading(false);

      if (data.standings[0].table) {
        setData(data.standings[0].table);
      }
    };

    fetchData();
  }, []);

  return (
    <LeagueTableContainer>
      <div className={classes.outerLeagueTable}>
        <div className={classes.leagueTable}>
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
            <table className={classes.innerLeagueTable}>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>MP</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  ({
                    draw,
                    team,
                    lost,
                    form,
                    goalDifference,
                    goalsAgainst,
                    goalsFor,
                    playedGames,
                    position,
                    won,
                    points,
                  }) => (
                    <tr>
                      <td>
                        <div>
                          <div className={classes.leagueImgOuterContainer}>
                            <div>{position}</div>
                            <div className={classes.leagueImgInnerContainer}>
                              <img src={team.crestUrl} alt="img" />
                            </div>
                            <div>{team.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>46</td>
                      <td>{won}</td>
                      <td>{draw}</td>
                      <td>{lost}</td>
                      <td>{goalsFor}</td>
                      <td> {goalsAgainst}</td>
                      <td>{points}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </LeagueTableContainer>
  );
};

export default LeagueTable;
