import React from "react";
import "../assets/css/hero.css"; 
import imageSrc from "../assets/images/delivery guy.svg"; 
import imgLeft from "../assets/images/first.svg"; 
import img2Left from "../assets/images/second.svg"; 
import img1 from "../assets/images/Dairy.svg"; 
import img2 from "../assets/images/Baby food.svg";
import img3 from "../assets/images/Condiments.svg";
import img4 from "../assets/images/fruit.svg";
import img5 from "../assets/images/Grain and pasta.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Column 1: Content with h1, p tag, search bar, and icon */}
      <div className="hero-column hero-column-1">
        <h1>Let your groceries come to you</h1>
        <p>
          Get fresh groceries online without stepping out to make delicious food
          with the freshest ingredients.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="hero-features">
          <span>
            <i className="fa fa-check-circle"></i> Fresh Vegetables
          </span>
          <span>
            <i className="fa fa-check-circle"></i> 100% Guarantee
          </span>
          <span>
            <i className="fa fa-check-circle"></i> Cash on Delivery
          </span>
          <span>
            <i className="fa fa-check-circle"></i> Fast Delivery
          </span>
        </div>
      </div>
      {/* Column 2: Image */}
      <div className="hero-column hero-column-2">
        <img src={imageSrc} alt="Main Hero" />
      </div>

      {/* Column 3: Two stacked images */}
      <div className="hero-column hero-column-3">
        <img src={imgLeft} alt="Top Image" className="top-image" />
        <img src={img2Left} alt="Bottom Image" className="bottom-image" />
      </div>

      
      <div className="icon-grid">
        <div className="icon-column">
          <img src={img1} alt="Icon 1" />
          <h1>Icon 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="icon-column">
          <img src={img2} alt="Icon 2" />
          <h1>Icon 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="icon-column">
          <img src={img3} alt="Icon 3" />
          <h1>Icon 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="icon-column">
          <img src={img4} alt="Icon 4" />
          <h1>Icon 4</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="icon-column">
          <img src={img5} alt="Icon 5" />
          <h1>Icon 5</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

