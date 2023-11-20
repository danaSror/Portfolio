import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { useContext } from "react";
import { DarkContext } from "../index";


function Contant() {
    const { darkMode, setDarkMode } = useContext(DarkContext);
    
    return (
        <div className={darkMode ? "dark" : ""} id="contant">
        <main className="bg-white px-10 h-screen md:text-center dark:bg-gray-800 dark:text-white flex flex-col justify-center">
          <div>
            <h1 className="animate-pulse text-2xl  py-20 text-pink-700 md:text-3xl  dark:text-red-100">Let`s keep in touch and collaborate together.</h1>
          </div>
          
          <div className="text-7xl text-pink-700 flex justify-center gap-16 dark:text-white">
                <a
            href="https://www.linkedin.com/in/dana-sror/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/danaSror"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <AiFillGithub />
          </a>
          <a
            href="mailto:dana.sror123@gmail.com"
            className="cursor-pointer"
          >
            <BiLogoGmail />
          </a>
          <a
            href="https://wa.me/972522494184"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <BsWhatsapp />
          </a>
                </div>
            </main>
        </div>
    );
}

export default Contant;