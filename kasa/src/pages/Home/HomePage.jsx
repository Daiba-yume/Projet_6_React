import React from "react";
import Banner from "../../components/banner/Banner";
import BannerHome from "../../assets/BannerHome.svg";
import logements from "../../datas/logements.json";
import Card from "../../components/card/Card";

function HomePage() {
  return (
    <main>
      <Banner
        page="home"
        imageUrl={BannerHome}
        message="Chez vous, partout et ailleurs"
      />
      <div>
        <Card
          key={logements.id}
          id={logements.id}
          cover={logements.cover}
          tilte={logements.title}
        />
      </div>
    </main>
  );
}

export default HomePage;
