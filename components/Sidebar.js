import React from "react";

import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="w-full h-24 md:w-1/5 bg-blue-700 md:bg-blue-700 px-5 text-center fixed pin-b md:pt-8 md:pin-t md:pin-l h-40 md:h-screen md:border-r-4 md:border-grey-dark">
        <div className="md:relative mx-auto lg:float-right lg:px-6">
          <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
            <li className="mr-3 flex-1">
              <Link>
                <a
                  href="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink"
                >
                  <i className="fas fa-link pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Gestionar Medicos
                  </span>
                </a>
              </Link>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink"
              >
                <i className="fas fa-link pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                  Gestionar Pacientes
                </span>
              </a>
            </li>

            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline hover:text-pink border-b-2 border-grey-darkest md:border-black hover:border-pink"
              >
                <i className="fas fa-link pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                  Otros
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
