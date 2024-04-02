import React from "react";
import Logo from "../Assets/Belllogo.PNG";

function Navbar() {
  return (
    <nav className="bg-[#00599B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src={Logo}
                alt="Bell Logo"
              />
            </div>
            <div className="md:hidden">
              <hr className="border-l border-gray-800 h-14 ml-3" />
            </div>
            <div className=" md:flex ml-3"> {/** I removed hidden from here, what this does is it prevent the <a> to show on mobile so i remove it</a>*/}
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="nav-link">
                  <a
                    href="#"
                    className="text-[#D6E2F2] px-6 py-6 rounded-md text-sm font-medium border-r border-solid border-gray-800 h-16"
                  >
                    Shop
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#"
                    className="text-[#D6E2F2] px-6 py-6 rounded-md text-sm font-medium border-r border-solid border-gray-800 h-16"
                  >
                    Support
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#"
                    className="text-[#D6E2F2] px-6 py-6 rounded-md text-sm font-medium border-r border-solid border-gray-800 h-16"
                  >
                    MyBell
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex"> {/** I removed hidden from here, what this does is it prevent the <a> to show on mobile so i remove it</a>*/}
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="#"
                className="text-[#D6E2F2] px-3 py-2 rounded-md text-sm font-medium"
              >
                Français
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
