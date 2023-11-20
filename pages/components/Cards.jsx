import React from 'react';
import Card from './Card'; // Import the Card component
import dora from '../../public/Dora1.jpeg';
import { useContext ,useState  } from "react";
import { DarkContext } from "../index";
import Modal from './Modal';

function Cards(){
    const { darkMode, setDarkMode } = useContext(DarkContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

    return (
        <div className={darkMode ? "dark" : ""} id="portfolio">
            <div className="bg-white dark:bg-gray-800 text-center py-20 ">
                <h1  className="text-5xl text-pink-700 font-medium md:text-6xl ">Protfolio</h1>
                {/* <div className="container">   */}
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center">  
                    <Card dataImage="https://media.licdn.com/dms/image/sync/D4D27AQESos2pkGB-1w/articleshare-shrink_1280_800/0/1697618513216?e=1698573600&v=beta&t=Gpx1pYmY7pYuE5EMsFXBGw4_ZjEFmwqnRPzmtJLuoPI"
                          onClick={toggleModal}>
                        <h1 className="text-4xl py-2">The Maze <p className="text-xl"> Find Dora & Diego</p></h1>
                        <p>For more details click here</p>
                    </Card>
                    {isModalOpen && <Modal />} 

                    <Card dataImage="https://media.licdn.com/dms/image/D4D2DAQEWjJJycB3XAA/profile-treasury-image-shrink_800_800/0/1693911364851?e=1698573600&v=beta&t=CICqxNAYNTHZa8OJzE5fP3AsyiNTA1RIH0EErM3qOEw">
                        <h1 className="text-xl py-2">Pacman Game</h1>
                        <p>For more details click here</p>
                    </Card>
                    <Card dataImage="https://camo.githubusercontent.com/18a5de505357592f8e1817449f7f4ea37cbb19e18df04269cbdb8c8f56207f20/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6466676a756a616f6b2f696d6167652f75706c6f61642f76313631333338383438302f53637265656e73686f745f355f6631757872622e6a7067">
                        <h1 className="text-xl py-2">Tasty<p className="text-xl ">Recipes Web</p></h1>
                        <p>For more details click here</p>
                    </Card>
                    <Card dataImage="https://res.cloudinary.com/dfgjujaok/image/upload/v1697968981/trendDet_zxpopl.jpg">
                        <h1 className="text-xl py-2">Trends Detection</h1>
                        <p>For more details click here</p>
                    </Card>
                    <Card dataImage="https://klik.solutions/wp-content/uploads/2022/02/Key-Features-of-The-Best-Vulnerability-Scanning-Tools-1200x720-1.png">
                        <h1 className="text-xl py-2">Vulnerabilities Scanner</h1>
                        <p>For more details click here</p>
                    </Card>
                    <Card dataImage="https://thecsrjournal.in/wp-content/uploads/2017/04/Data-Analysis.jpg">
                        <h1 className="text-xl py-2">Analyzing Big Data</h1>
                        <p>For more details click here</p>
                    </Card>
                </div>
            </div>
        </div>
  );
};

export default Cards;
