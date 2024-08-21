import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
        <section className="section-navbar">
           <div className="w-[100vw] fixed z-50">
            <div className="navbar-div-1 bg-vibrant-purple text-center w-full text-white flex justify-center items-center py-[3px] promote-text z-50">
            <div className="max-w-[1280px]">Flat 50% off on selected products</div> 
            </div>
            <div className="navbar-div-2 navbar w-[100vw] shadow-1 bg-white md:flex justify-center sm:hidden fixed z-50">
               <div className="max-w-[1280px] w-full flex items-center justify-between px-4 py-2" >
               <div className="font-bold logo-text">
              NEW <br /> HERBALS
            </div>
            <div className="">
      

<ul className="flex font-semibold nav-text items-center gap-clamp-gap-1">
  {['New Launch', 'Face', 'Hair', 'Body', 'Combo', 'Offers'].map((item, index) => (
    <li key={index} className='nav-item'>{item}</li>
  ))}
</ul>
            </div>
            <div className="flex lg:gap-6 md:gap-3 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
               </div>
            </div>
            <div className="md:hidden flex items-center justify-between px-1 py-3 z-50 bg-white">
            <div onClick={toggleMobileMenu} className="text-2xl cursor-pointer">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="font-bold logo-text absolute middle text-center">
              NEW HERBALS
            </div>
         
            {isMobileMenuOpen && (
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '0%' }}
    exit={{ x: '-100%' }}
    className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center py-4 max-w-[250px]"
  >
    <div onClick={toggleMobileMenu} className="self-end mr-6 text-2xl cursor-pointer">
      <FaTimes />
    </div>
    <ul className="flex flex-col font-semibold nav-text items-center gap-12 mt-20 ">
      {['New Launch', 'Face', 'Hair', 'Body', 'Combo', 'Offers'].map((item, index) => (
        <li key={index} className="nav-item text-[16px]">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)}

           <div className="flex gap-clamp-gap-2 pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              </div>
           </div>
        </section>
  );
};

export default Navbar;
