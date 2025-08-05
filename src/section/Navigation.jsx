import { useState } from "react";
import { Hamburger } from "../assets/index";
import { navbarLinks } from "../static/index";

const Navigation = () => {

    const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <header className={`fixed w-full top-0 left-0 bg-blue-400`}>
        <nav className={`w-full lg:max-w-screen-xl lg:mx-auto py-4 px-8 lg:px-16 flex flex-wrap justify-between items-center`}>
            <h3 className={`text-xl font-bold text-white cursor-pointer`}>Portfolio</h3>
            <button onClick={() => setIsMenuShown(!isMenuShown)}>
                <img src={Hamburger} alt="Menu Bar" width={24} height={24} className={`lg:hidden`}/>
            </button>
            <div className={`lg:flex items-center justify-between w-full lg:w-auto lg:order-1 mt-8 lg:mt-0
            ${isMenuShown ? "" : "hidden"}`}>
                <ul className={`flex flex-col lg:flex-row space-x-6 font-medium text-white text-lg lg:text-base`}>
                    {navbarLinks.map((e, index) => (
                        <li key={index} ><a href={e.id} className={`block w-full py-1 lg:py-0 lg:border-b-2 lg:hover:border-b-cyan-900 lg:border-b-transparent hover:text-cyan-900 cursor-pointer`}>{e.title}</a></li>
                    ))}
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navigation