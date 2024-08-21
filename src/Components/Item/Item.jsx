import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext'; // Adjust the path accordingly

const Item = () => {
  const { items } = useContext(AppContext);

  return (
    <div>
      <div className="md:container md:mx-auto md:p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Items</h1>
      <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:hidden">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md">
            {item.image1 && (
              <img
                src={item.image1}
                alt={item.name}
                className="md:w-[300px] md:h-[400px] sm:w-[200px] object-cover rounded-lg mb-4 m-auto"
              />
            )}
            <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-gray-800 font-semibold">
            ${item.newPrice.toFixed(2)}
            </p>
            </div>
          
          </div>
        ))}
      </div>
      <div className="md:hidden sm:grid grid-cols-2">
      {items.map((item) => (
          <div key={item.id} className="p-2">
            {item.image1 && (
              <img
                src={item.image1}
                alt={item.name}
                className="md:w-[300px] md:h-[400px] sm:w-[200px] object-cover rounded-[1rem] mb-4 m-auto"
              />
            )}
            <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center text-[16px]">{item.name}</h2>
            <p className=" mb-2 text-center text-[12px] text-[#959494] font-[500]">{item.description}</p>
            <p className="text-gray-800 font-semibold text-center text-[16px] ">
            ${item.newPrice.toFixed(2)}
            </p>
            </div>
            <div className="flex justify-center mt-3">
              <button className="bg-[#EF5A6F] text-white px-6 rounded-lg py-2 mx-auto text-[12px] font-semibold "> + Add To Cart </button>
            </div>
          
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Item;
