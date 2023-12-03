import Image from "next/image";
import pic from "../../public/black.gif";
import { useContext } from "react";
import { DarkContext } from "@/context/context";

function About() {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  return (
    <div className={!darkMode ? "dark" : ""} id="home">
      <main className="h-screen bg-white px-10 mobile:px-2 text-center  dark:bg-gray-800">
        <div className="flex  items-center justify-center h-screen ">
          <section className="flex flex-col gap-10 md:gap-3 sm:gap-3 mobile:gap-4 md:flex-row px-10 lg:mt-64 md:mt-48 sm:mt-64 mobile:mt-28 sm:px-2 mobile:px-2  ">
            <div className="lg:w-1/2 md:w-1/2 text-left lg:px-10 mobile:px-3 md:px-2 mobile:mt-4">
              <h2 className="lg:text-6xl py-2 text-pink-700 font-medium max-w-xl md:text-4xl sm:text-3xl mobile:text-3xl">
                Dana Sror
              </h2>
              <h3 className="lg:text-3xl py-2 md:text-2xl sm:text-xl mobile:text-xl  dark:text-red-100 ">
                Full-Stack Engineer
              </h3>
              <p className="lg:text-xl py-5 md:py-2 mobile:py-2 leading-8 text-gray-800 sm:text-lg mobile:text-lg dark:text-white">
                I`m passionate about both backend and frontend development,
                turning ideas into tangible products. I love learning new
                technologies and excel at creating efficient backend solutions.
                Explore my portfolio to witness my dedication to innovation and
                excellence.
              </p>
              <br />
              <p className="lg:text-2xl  text-gray-800 mobile:py-1 md:text-xl sm:text-lg mobile:text-lg dark:text-white">
                Let`s collaborate to bring your ideas to
                <span className="animate-pulse text-xl  text-yellow-500 ">
                  {" "}
                  life
                </span>
                .
              </p>
            </div>

            <div className="mr-10 md:w-1/2 sm:w-4/5 relative  mx-auto mobile:px-5 mobile:mr-2 lg:mt-1 sm:mb-80 lg:px-10 rounded-3xl sm:rounded-3xl md:rounded-3xl mobile:rounded-3xl shadow-2xl bg-neutral-950 dark:shadow-white dark:shadow-2xl">
              <Image
                src={"https://res.cloudinary.com/dfgjujaok/image/upload/v1701173877/black_hjp7ad.gif"}
                alt="code image"
                width={650}
                height={150}
                priority 
              />
            </div>
          </section>
        </div>
      </main>
      </div>
  );
}

export default About;
