import React, { useState, useEffect } from 'react';
import plot1 from '../assets/hero.jpg';
import plot2 from '../assets/plot.jpg';
import plot3 from '../assets/mpc.jpg';

export default function Featured() {
    const images = [plot1, plot2, plot3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="featured">
            <div className="featured-details">
                <h2>Featured</h2>
                <h3>3 ACRE PRIME LAND</h3>
                <div className="details-section">
                    <h4>Location</h4>
                    <p>Aimi ma Kilungu - 2km from Mombasa Rd</p>
                    <h4>County</h4>
                    <p>Makueni</p>
                </div>
                <button className="enquire-button">Enquire</button>
            </div>
            <div className="featured-photos">
                <img src={images[currentImageIndex]} alt="Prime Land" />
            </div>
        </div>
    );
}