import Image from "next/image";
import pic from "../../public/black.gif";
import { useContext } from "react";
import { DarkContext } from "../index";

function About() {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  

  return (
    <div className={darkMode ? "dark" : ""} id="home">
      <main className="h-screen bg-white px-10 md:text-center  dark:bg-gray-800">
        <div className="flex items-center justify-center h-screen ">
          <section className="flex flex-col gap-10 md:flex-row ">
            <div className="md:w-1/2 text-left px-10 ">
              <h2 className="text-5xl py-2 text-pink-700 font-medium md:text-6xl max-w-xl ">
                Dana Sror
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-red-100">
                Full-Stack Engineer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white">
                I`m passionate about both backend and frontend development,
                turning ideas into tangible products. I love learning new
                technologies and excel at creating efficient backend solutions.
                Explore my portfolio to witness my dedication to innovation and
                excellence.
              </p>
              <br />
              <p className="text-xl  text-gray-800 dark:text-white">
                Let`s collaborate to bring your ideas to
                <span className="animate-pulse text-xl  text-yellow-500">
                  {" "}
                  life
                </span>
                .
              </p>
            </div>

            <div className="md:w-1/2 relative mx-auto  hover:rotate-12">
              {/* <Image src={avatar} layout="fill" objectFit="cover" /> */}
              <Image
                src={pic}
                alt=""
                class="rounded-3xl shadow-2xl"
                width={650}
                height={150}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
