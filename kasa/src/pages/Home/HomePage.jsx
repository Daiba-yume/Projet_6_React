import React from "react";
import Banner from "../../components/banner/Banner";
import BannerAbout from "../../assets/BannerAbout.svg";

function HomePage() {
  return (
    <main>
      <Banner page="home" imageUrl={BannerAbout} message="blabla" />
    </main>
  );
}

export default HomePage;
