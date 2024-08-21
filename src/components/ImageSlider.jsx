import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "/df5f93dbb6efd678934806a81895e925_1200_80.webp",
    "/bbf28fb7a8aaad08807012828e65b13e_1200_80.webp",
    "/56ebb5e051381fbf99398cea78a84b36_1200_80.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // Handle transition end for loop reset
  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-[${
          (images.length + 1) * 100
        }%] h-full flex ${
          isTransitioning ? "transition-transform duration-1000" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Cloned first image to create seamless loop */}
        <div className="w-full flex-shrink-0">
          <img
            src={images[0]}
            alt="Slide 0"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
