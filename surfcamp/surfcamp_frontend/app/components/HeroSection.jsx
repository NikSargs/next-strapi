const HeroSection = ({imgSrc, headline, theme = "turquoise"}) => {
  return (
  <section className="hero">
        <div className="hero__background">
            <img src={imgSrc || "/assets/hero-home.png"} alt="" />
            </div>
            <div className={`hero__headline hero__headline--${theme}`}>
                {headline || <h1>Headline is missing</h1>}
            </div>
            <button className={`btn btn--medium btn--${theme}`}>
                BOOK NOW
            </button>
            <img className={`hero__logo hero__logo--${theme}`} src="/assets/logo.svg" alt="" />     
    </section>)
}

export default HeroSection