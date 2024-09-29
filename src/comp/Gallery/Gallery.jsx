import React, { useState } from "react";
import "./gallery.css"

const images = [
]

function Gallery() {
    return (
        <div>
            <div className="gallery-carousel">
                {images.map((x) => (
                    <div className="image-box">
                        <img src={x} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
