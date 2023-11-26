import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { useContext } from "react";
import { DarkContext, DarkProvider } from "../index";


function Contact() {
    const { darkMode, setDarkMode } = useContext(DarkContext);
    
  return (
        <div className={!darkMode ? "dark" : ""} id="contact">
        <main className="bg-white px-10 h-screen text-center dark:bg-gray-800 dark:text-white flex flex-col justify-center">
          <div>
            <h1 className="animate-pulse sm:text-2xl  py-20 text-pink-700 text-3xl mobile:text-2xl dark:text-red-100">Let`s keep in touch and collaborate together.</h1>
          </div>
          
          <div className="text-7xl mobile:text-4xl sm:text-5xl text-pink-700 flex justify-center gap-16 dark:text-white">
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

export default Contact;