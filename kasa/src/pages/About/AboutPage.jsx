import React from "react";
import Banner from "../../components/banner/Banner";
import BannerAbout from "../../assets/BannerAbout.svg";

function AboutPage() {
  return (
    <main>
      <Banner page="about" imageUrl={BannerAbout} message="" />
    </main>
  );
}

export default AboutPage;
