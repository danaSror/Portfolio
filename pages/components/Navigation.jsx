import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { DarkContext } from "@/context/context";
import { Link } from "react-scroll";

function Navigation() {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Dana_Sror_Resume.pdf";
    link.target = "_blank";
    link.download = "Dana_Sror_Resume.pdf";
    link.click();
  };

  return (
    <div className={!darkMode ? "dark" : ""}>
      <nav className="bg-white px-10  dark:bg-gray-800">
        <div className="left-0 top-0 py-7 mobile:gap-8 sm:gap-16 sm:flex-row  px-10 flex flex-col mobile:flex-row fixed w-full bg-white dark:bg-gray-800 z-10 md:flex-row">
          <div className="flex gap-10 md:w-1/2 sm:w-1/2 ">
            <h1 className="text-xl mobile:text-lg font-burtons dark:text-white">DanaSror</h1>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="animate-spin cursor-pointer text-lg dark:text-white order-1 hover:animate-none hover:text-amber-400 dark:hover:text-amber-400 hover:text-2xl"
            />
          </div>

          <div className="md:w-1/2 sm:w-1/2">
            <ul className="flex gap-10 mobile:gap-2 sm:gap-4 justify-end">
              <li className="hover:cursor-pointer hover:text-rose-400 dark:text-white dark:hover:text-rose-400">
                <Link to="home" spy={true} smooth={true}>
                  {" "}
                  Home
                </Link>
              </li>
              <li className="hover:cursor-pointer hover:text-rose-400 dark:text-white dark:hover:text-rose-400">
                <Link to="portfolio" spy={true} smooth={true}>
                  {" "}
                  Portfolio
                </Link>
              </li>
              <li className="hover:cursor-pointer hover:text-rose-400 dark:text-white dark:hover:text-rose-400">
                <Link to="contact" spy={true} smooth={true}>
                  {" "}
                  Contact
                </Link>
              </li>
              <li className="cursor-pointer " onClick={handleDownload}>
                <a className="bg-gradient-to-r from-red-100 to-pink-800 text-white mobile:px-2 mobile:py-1 px-4 py-2 rounded-md ml-8 dark:text-gray-800 hover:bg-gradient-to-t ">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
}

export default Navigation;
