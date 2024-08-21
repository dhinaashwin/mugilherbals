import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Hero = () => {
  const items = [
    <img
      src="https://res.cloudinary.com/dhina11/image/upload/v1724134590/Firefly_give_a_photoshoot_of_cosemetc_transparent_bottles_with_black_cap_and_containers_and_round_sm_1_fdcmey.jpg"
      alt="item1"
      className="sliderimg"
    />,
    <img
      src="https://res.cloudinary.com/dhina11/image/upload/v1724134590/Firefly_give_a_photoshoot_of_cosemetc_transparent_bottles_with_black_cap_and_containers_and_round_sm_1_fdcmey.jpg"
      alt="item2"
      className="sliderimg"
    />,
    <img
      src="https://res.cloudinary.com/dhina11/image/upload/v1724134590/Firefly_give_a_photoshoot_of_cosemetc_transparent_bottles_with_black_cap_and_containers_and_round_sm_1_fdcmey.jpg"
      alt="item3"
      className="sliderimg"
    />,
    <img
      src="https://res.cloudinary.com/dhina11/image/upload/v1724134590/Firefly_give_a_photoshoot_of_cosemetc_transparent_bottles_with_black_cap_and_containers_and_round_sm_1_fdcmey.jpg"
      alt="item4"
      className="sliderimg"
    />,
  ];

  return (
    <section className="lg:pt-48 md:pt-40 px-5 sm:pt-28 max-w-[1280px] m-auto z-0">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        items={items}
        mouseTracking
      />
    </section>
  );
};

export default Hero;
