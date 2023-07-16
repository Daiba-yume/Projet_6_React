import "./Banner.scss";
function Banner({ page, imageUrl, message }) {
  return (
    <div className="banner">
      <img
        src={imageUrl}
        alt="Banner"
        className={page === "about" ? "aboutBanner" : ""}
      />
      <h1>{message}</h1>
    </div>
  );
}

export default Banner;
