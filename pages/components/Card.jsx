import Image from "next/image";
import React, { useState, useContext } from "react";
import { DarkContext, DarkProvider } from "../index";
import Modal from "./Modal";

function Card({ title, subtitle, description, images, usedTools, sourceCode }) {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={!darkMode ? "dark" : ""}>
      <div className="basis-1/3 flex-1">
        <div className="flex gap-10 sm:gap-5 mobile:gap-3 h-64 justify-between shadow-2xl hover:border-pink-700 hover:shadow-inner rounded-xl border-4 border-black overflow-hidden relative dark:bg-slate-200 dark:shadow-white">
          {/* Left Image Container */}
          <div className="w-1/2">
            <div className="image">
              <Image
                src={images[0]}
                alt="Your Image"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Right Content Container */}
          <div className="w-1/2 mobile:pr-3">
            <div className="flex flex-col h-full text-left">
              <h1 className="text-3xl mobile:text-xl font-bold mt-7 mobile:mt-4 sm:mr-4 mobile:mr-3 sm:text-2xl">
                {title}
              </h1>
              <h2 className="text-xl mobile:text-lg text-gray-500 sm:text-lg">
                {subtitle}
              </h2>
              <p className="text-sm text-gray-700 pr-6 mt-3 sm:mt-1 relative">
                <span className="absolute h-2 rounded-md bg-pink-700 w-12 top-0 left-0"></span>
              </p>
              <p className="text-lg mobile:text-sm sm:text-base text-gray-700 pr-6 mt-5">
                {usedTools.map((tool, index) =>
                  index === usedTools.length - 1 ? tool : tool + " | "
                )}
              </p>
            </div>
            <div className="text-right text-pink-700 absolute bottom-0 right-0 p-7">
              <a
                className="hover:cursor-pointer inline-block after:content-['→'] after:text-lg after:font-extrabold after:ml-2 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100 hover:after:ml-3"
                onClick={openModal}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal
            title={title}
            subtitle={subtitle}
            description={description}
            images={images}
            usedTools={usedTools}
            sourceCode={sourceCode}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
