import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Body.module.css";
import axios from "axios";
import imgx from "../../assests/display-img.png";
import Card from "../../UI/Card";
import { PuffLoader } from "react-spinners";

import Footer from "../footer/Footer";

const Body = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "fc8891ab35664262af36b84ccd4d9fb4",
        },
      });
      setLoading(false);
      if (data && data.competitions.length > 0) {
        setData(data.competitions);
      }
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.centerDiv}>
      <div className={classes.img_container}>
        <img src={imgx} alt="header-img" />
      </div>

      <Card>
        <div className={classes.outerDiv}>
          <div className={classes.allComHeader}>
            <h1>All Competitions</h1>
          </div>
          <div className={classes.flexContainer}>
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
              data.map(({ emblemUrl, name, area, id }) => (
                <Link to={`league/${id}`}>
                  <div className={classes.cardContainer}>
                    <div className={classes.cardInnerContent}>
                      <div className={classes.logoImgContainer}>
                        <img src={emblemUrl} className={classes.leagueImg} />
                      </div>
                      <div className={classes.leagueName}>
                        <h2>{name}</h2>
                        <h3>{area.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default Body;
