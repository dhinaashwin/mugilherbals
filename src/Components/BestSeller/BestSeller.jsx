import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AppContext } from '../../Context/AppContext'; // Adjust the path accordingly

const BestSeller = () => {
  const { items } = useContext(AppContext);

  // Create carousel items
  const carouselItems = items.map((item) => (
    <div key={item.id} className="md:hover:border md:rounded-[2rem] p-2 pb-8 md:hover:shadow-md mx-auto flex flex-col items-center">
      {item.image1 && (
        <img
          src={item.image1}
          alt={item.name}
          className="md:w-[275px] sm:w-[200px] object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex flex-col items-center">
        <h2 className="md:text-[20px] sm:text-[16px] font-bold mb-2 text-center">{item.name}</h2>
        <p className="md:text-[14px] sm:text-[12px] mb-2 text-center">{item.description}</p>
        <p className="md:text-[19px] sm:text-[15px] font-semibold text-center">
          ${item.newPrice}
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-[#2E2532] text-white px-5 py-2 rounded-lg font-semibold md:text-[15px] sm:text-[13px]">
            + Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="md:container md:mx-auto md:px-20">
        <h1 className="text-2xl font-bold mb-4 text-center">Best Seller</h1>
        <div className="md:hidden sm:block">
        <AliceCarousel
          items={carouselItems}
          responsive={{
            0: { items: 2.25 },
            576: { items: 3 },
            820: { items: 3.5 },
          }}
          controlsStrategy="alternate"
          disableDotsControls
        />
        </div>
        <div className="sm:hidden md:block">
        <AliceCarousel
  items={carouselItems}
  responsive={{
    0: { items: 1 },
    576: { items: 2 },
    820: { items: 3 },
    1024: { items: 4 },
  }}
  controlsStrategy="responsive"
  disableDotsControls
  disableButtonsControls={false} // Enable control buttons
  autoPlay
  autoPlayInterval={2000} // Carousel will autoplay every 2 seconds
  infinite
  mouseTracking
/>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
