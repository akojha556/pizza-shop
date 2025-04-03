import React from 'react'

const NavBar = ({ clicked }) => {
     const navItems = ["Hours & Locations", "Menu", "Our Story", "Press", "Store", "Behind The Scene", "Jobs", "Near BJEM College, BBSR", "Contact", "Order Online", "Email Signup"];

     return (
          <div className={`fixed left-0 top-0 z-10 flex h-dvh w-full flex-col overflow-x-hidden bg-white text-center transition-all ${clicked ? 'translate-y-0 ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-300' : '-translate-y-full ease-[cubic-bezier(0.4,0,0.2,1)] duration-500'} overscroll-contain`} aria-hidden={!clicked}>
               <div className="mt-14 flex-grow">
                    <nav>
                         <ul className="w-full font-cederville-cursive text-4xl space-y-5">
                              {navItems.map((eachItem) => (
                                   <li key={eachItem} className="list-none">
                                        <a href="#" className="text-xl hover:text-amber-400 transition-colors duration-500">{eachItem}</a>
                                   </li>
                              ))}
                              <hr className="w-80 border-[0.1rem] mx-auto my-6 border-t border-black" />
                         </ul>
                    </nav>
               </div>
               <div className="h-8 mt-4 w-full bg-black text-white font-red-hat text-xs p-2">
                    Copyright&copy;2025
               </div>
          </div>
     )
}

export default NavBar