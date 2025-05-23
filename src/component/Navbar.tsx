import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 bg-white py-5 px-3 lg:px-6 shadow-sm z-50">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl lg:text-xl text-zinc-900">
          Alope Software House
        </h2>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8 text-sm lg:text-base text-slate-500">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#course" className="hover:underline">
                Course
              </a>
            </li>
            <li>
              <a href="#our-works" className="hover:underline">
                Article
              </a>
            </li>
          </ul>

          <button className="bg-blue-500 text-white text-sm lg:px-6 px-4 py-2 rounded-full hover:bg-blue-600">
            I'm interested
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
