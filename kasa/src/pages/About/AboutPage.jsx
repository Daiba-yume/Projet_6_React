import React from "react";
import Banner from "../../components/banner/Banner";
import BannerAbout from "../../assets/BannerAbout.svg";
import "./AboutBanner.scss";

function AboutPage() {
  return (
    <div>
      <Banner imageUrl={BannerAbout} message="" />
    </div>
  );
}

export default AboutPage;
