import React from 'react';
import './baby1.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="https://images.ctfassets.net/621t91s0mnkp/fm6ig6euppZfLAuldIFGP/ebf7ca81c47e44ec55d2578eb42d4798/LP_F24_1Piece_02_037.png?fm=webp&w=1366" alt="Babies in a field" />
      </div>
      <div className="banner-content">
        <div className="ban">
          <h2>raise the future</h2>
          <p>The Carter’s family of brands is committed to bettering our world by offering more sustainable products and practices.</p>
          <button className="learn-more-button">Learn More</button>

        </div>
      </div>
    </div>
  );
};

export default Banner;
