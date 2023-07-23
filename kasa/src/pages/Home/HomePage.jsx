import React from "react";
import Banner from "../../components/banner/Banner";
import BannerHome from "../../assets/BannerHome.svg";
import logements from "../../datas/logements.json";
import Card from "../../components/card/Card";
import "../../styles/HomePage.scss";

function HomePage() {
  return (
    <main>
      <Banner
        page="home"
        imageUrl={BannerHome}
        message="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        <div className="list">
          {logements.map(({ id, title, cover }) => (
            <Card key={id} id={id} cover={cover} title={title} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
