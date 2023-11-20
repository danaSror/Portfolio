import ProjectDetails from "./ProjectDetails";
import { useContext } from "react";
import { DarkContext } from "../index";

function Projects() {
    const { darkMode, setDarkMode } = useContext(DarkContext);
    
    return (
        <div className={darkMode ? "dark" : ""} id="portfolio">
            <section className=" bg-white px-10 md:text-center py-20  dark:bg-gray-800">
                
                <h4 className="text-3xl   md:text-5xl sm:text-xl dark:text-white">Protfolio:</h4>
                <p className="text-md py-2 leading-8 text-gray-800 md:text-3xl dark:text-white">
                    So far I have gained knowledge and experience in the following technological tools:
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 md:text-3xl  dark:text-white">
                    You can see how they are reflected in the various projects listed below
                </p>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">  
                    <ProjectDetails />
                    <ProjectDetails />
                    <ProjectDetails />
                    <ProjectDetails />
                    <ProjectDetails />
                    <ProjectDetails />
                </div>
            </section>
        </div>
    );
}

export default Projects;