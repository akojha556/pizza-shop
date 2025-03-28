import React from 'react'

const NavBar = ({ clicked }) => {
     return (
          <div className={`${clicked ? "h-full bg-white" : "h-0"} w-full overflow-x-hidden duration-[0.3s] text-center z-9 fixed left-0 top-0 flex flex-col bottom-0`} aria-hidden={!clicked}>
               <div className="top-[25%] relative">
                    <nav>
                         <ul className="w-full font-cederville-cursive">
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Hours & Location</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Menu</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Our Story</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Press</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Store</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Behind The Scene</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Jobs</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Near BJEM College, BBSR</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Contact</a>
                              </li>
                              <li className="list-none mb-2.5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Order Online</a>
                              </li>
                              <li className="list-none mb-5">
                                   <a href="#" className="text-xl hover:text-amber-400 hover:duration-[0.3s]">Email Signup</a>
                              </li>
                              <li className="w-[25rem] mb-15 bg-black h-0.5 m-auto"></li>
                         </ul>
                    </nav>
                    <div className="relative h-[2rem] w-full bottom-[0%] bg-black text-white font-red-hat text-xs p-2">copyright@2025</div>
               </div>
          </div>
     )
}

export default NavBar