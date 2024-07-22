import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/ProductType.css';
import CustomerNavBar from './CustomerNavBar';

import GoldCard from '../assets/gold.jpg';
import PlatinumCrad from '../assets/platinum.jpg';
import TitaniumCrad from '../assets/titanium.jpg';


const products = [
  {
    type: 'GOLD',
    image: GoldCard, // Replace with the actual image path
    description: 'Gold card offers exclusive benefits including...',
  },
  {
    type: 'PLATINUM',
    image: PlatinumCrad, // Replace with the actual image path
    description: 'Platinum card provides premium rewards and services such as...',
  },
  {
    type: 'TITANIUM',
    image: TitaniumCrad, // Replace with the actual image path
    description: 'Titanium card offers the highest level of perks including...',
  },
];

const ProductCarousel = () => {
  return (

    <div className="carousel-container">
     
      <Carousel showThumbs={false} showStatus={false}>
        {products.map((product) => (
          <div className="carousel-slide" key={product.type}>
            <div className="image-section">
              <img src={product.image} alt={`${product.type} Card`} />
            </div>
            <div className="info-section">
              <h2>{product.type} Card</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;