import { useState } from "react";
import { Hamburger } from "../assets/index";
import { navbarLinks } from "../static/index";

const Navigation = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <header className={`fixed w-full top-0 left-0 bg-blue-400`}>
      <nav
        className={`w-full lg:max-w-screen-xl lg:mx-auto py-4 px-8 lg:px-16 flex flex-wrap justify-between items-center`}
      >
        <h3 className={`text-xl font-bold text-white cursor-pointer`}>
          Portfolio
        </h3>
        <button onClick={handleMenuClick}>
          <svg
            className={`lg:hidden`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
              fill="white"
            />
          </svg>
        </button>
        <div
          className={`lg:flex items-center justify-between w-full lg:w-auto lg:order-1 mt-8 lg:mt-0
            ${isMenuShown ? "" : "hidden"}`}
        >
          <ul
            className={`flex flex-col lg:flex-row space-x-6 font-medium text-white text-lg lg:text-base`}
          >
            {navbarLinks.map((e, index) => (
              <li key={index}>
                <a
                  href={e.id}
                  className={`block w-full py-1 lg:py-0 lg:border-b-2 lg:hover:border-b-cyan-900 lg:border-b-transparent hover:text-cyan-900 cursor-pointer`}
                  onClick={handleMenuClick}
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
