    <section className="navbar-section w-full z-50">
      <div className="navbar-div flex flex-col items-center w-full gap-2 fixed bg-white z-50">
        <div className="navbar-div-1 bg-vibrant-purple text-center w-full text-white flex justify-center items-center py-[2px] promote-text maw-w-[1280x">
         <div>Flat 50% off on selected products</div> 
        </div>
        <div className="navbar-div-2 navbar w-[100vw] shadow-1 bg-white ">
          {/* Desktop Navbar */}
          <div className="navbar-md md:flex items-center w-full justify-between sm:px-2 md:px-2 lg:px-3 xl:px-6 2xl:px-8 hidden">
            <div className="font-bold logo-text">
              NEW <br /> HERBALS
            </div>
            <div className="">
              <ul className="flex font-semibold nav-text items-center gap-clamp-gap-1">
                <li>New Launch</li>
                <li>Face</li>
                <li>Hair</li>
                <li>Body</li>
                <li>Combo</li>
                <li>Offers</li>
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

          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center justify-between px-1 py-3">
            <div onClick={toggleMobileMenu} className="text-2xl cursor-pointer">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="font-bold logo-text absolute middle text-center">
              NEW HERBALS
            </div>
         

          {/* Animated Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center py-4"
            >
              <div onClick={toggleMobileMenu} className="self-end mr-6 text-2xl cursor-pointer">
                <FaTimes />
              </div>
              <ul className="flex flex-col font-semibold nav-text items-center gap-4 mt-10">
                <li>New Launch</li>
                <li>Face</li>
                <li>Hair</li>
                <li>Body</li>
                <li>Combo</li>
                <li>Offers</li>
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
      </div>
    </section>