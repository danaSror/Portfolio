import Image from "next/image";
import { useContext } from "react";
import { DarkContext } from "../index";

function ProjectDetails() {
    const { darkMode, setDarkMode } = useContext(DarkContext);
    
    return (
        
        <div className="basis-1/4 flex-1 text-center shadow-xl p-10 rounded-xl my-10  dark:drop-shadow-sm dark:shadow-white dark:shadow-md" {...darkMode ? "dark" : ""}>
            <div  style={{display: "flex",justifyContent: "center",}}>
                {/* <Image src={cardImg} width={100} height={100} alt="" /> */}
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Project name</h3>
            <p className="py-2 dark:text-white">
                some description on the project
                some description on the project
                some description on the project
            </p>
            <h4 className="text-pink-700 py-4 dark:text-white">tools i used:</h4>
            <p className="text-gray-800 py-1 dark:text-white">React</p>
            <p className="text-gray-800 py-1 dark:text-white">Python</p>
            <p className="text-gray-800 py-1 dark:text-white">Java</p>
        </div>
    );
}

export default ProjectDetails;