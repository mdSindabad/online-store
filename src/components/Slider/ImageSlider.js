import React from 'react';
import { Carousel } from 'react-bootstrap';
import './imageSlider.css';

const ImageSlider = () => {
    return (
        <Carousel>
            <Carousel.Item className="slider">
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/9GdDHKD/3255317.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="slider">
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Mc9SW6R/2741840.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="slider">
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ckhmpsS/Store-with-credit-card-gift-boxes-buyers-vector-illustration-Purchase-sale-e-commerce-Shopping-conce.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider;

