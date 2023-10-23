"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "hero-1" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "hero-2" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "hero-3" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "hero-4" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "hero-5" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        interval={2000}
      >
        {heroImages.map((heroImage) => (
          <Image
            key={heroImage.alt}
            src={heroImage.imgUrl}
            alt={heroImage.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        src={"/assets/icons/hand-drawn-arrow.svg"}
        alt="arrow-right"
        width={175}
        height={175}
        className="absolute bottom-0 -left-[20%] max-xl:hidden"
      />
    </div>
  );
};

export default HeroCarousel;
