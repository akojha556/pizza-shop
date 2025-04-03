import React from "react";

const NavHeader = ({ clicked, handleClick }) => {
     return (
          <div className={`p-4 flex w-full justify-between items-center fixed top-0 left-0 right-0 z-50 ${clicked ? "" : "bg-white delay-300"} transition-colors`}>
               <div className={`${clicked ? "opacity-0" : "opacity-100 delay-300"} transition-opacity`}>
                    <div className="font-pirata-one tracking-widest font-extrabold text-4xl text-red-600">LOTUS</div>
                    <div className="font-gidole text-xs font-bold tracking-tight">EAT LIKE A BOSS</div>
               </div>
               <button className="cursor-pointer" onClick={handleClick}>
                    <div className={`${clicked && "translate-y-3 rotate-45"} duration-[0.3s] w-8 bg-black h-1 mb-2`}></div>
                    <div className={`${clicked && "opacity-0"} duration-[0.3s] w-8 bg-black h-1 mb-2`}></div>
                    <div className={`${clicked && "-translate-y-3 -rotate-45"} duration-[0.3s] w-8 bg-black h-1 mb-2`}></div>
               </button>
          </div>
     );
}

export default NavHeader;