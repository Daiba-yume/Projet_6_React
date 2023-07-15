function Banner({ imageUrl, message }) {
  return (
    <div>
      <img src={imageUrl} alt="Banner" />
      <h1>{message}</h1>
    </div>
  );
}

export default Banner;
