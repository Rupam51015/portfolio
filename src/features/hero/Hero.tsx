import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Background from "./Background";

import "../../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Background />

      <div className="hero-wrapper">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}