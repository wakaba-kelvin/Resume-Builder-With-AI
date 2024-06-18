import React from 'react'

function Hero() {
  return (
<div className="hero">
    <div className="heading">
        <h1>Build Your Resume using AI</h1>
    </div>
    <div className="description">
        <p>Effortlessly Craft a standout Resume with our AI-Powered Builder</p>
    </div>
    <div className="hero-btns">
        <button>Get Started</button>
        <button>Watch Video</button>
    </div>
    <div className="feature">
        <div className="featured-heading">
        <h3>FEATURED IN </h3>
        </div>
        <div className="featured-cards">
            <div className="Youtube">
                <img src="" alt="" />
                <h2>YouTube</h2>
            </div>
            <div className="product">
                <img src="" alt="" />
                <h2>Product Hunt</h2>
            </div>
            <div className="reddit">
                <img src="" alt="" />
                <h2>Redit</h2>
            </div>
        </div>

    </div>
    <div className="Working">
        <div className="workingheader">
            <h2>How It Works?</h2>
            <p>Give Mock Interview in just 3 simple steps</p>
        </div>
        <div className="working-cards">
            <div className="cards">

            </div>
            <div className="cards">

            </div>
            <div className="cards">

            </div>

        </div>
    </div>
</div>
  )
}

export default Hero
