import hero from "../assets/images/hero.jpg";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <header
        className="banner"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="banner-overlay" />
        <Navbar />
      </header>
    </div>
  );
}