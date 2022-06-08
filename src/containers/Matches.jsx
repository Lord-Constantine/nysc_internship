import React from "react";
import LeagueBody from "../components/body/LeagueBody/LeagueBody";
import Footer from "../components/footer/Footer";

import Header from "../components/Header/Header";
import Matches from "../components/body/LeagueBody/MatchTable/MatchTable";

const LeaguePage = () => {
  return (
    <>
      <Header />
      <Matches />
      <Footer />
    </>
  );
};

export default LeaguePage;
