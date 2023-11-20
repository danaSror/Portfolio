import React from "react";
import NewCard from "./NewCard";
import { useContext, useState } from "react";
import { DarkContext } from "../index";
import Modal from "./Modal";
import { useInView } from "react-intersection-observer";
import cards from './cardsData';

function Portfolio() {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Use the useInView hook to detect when the header is in the viewport
  const [h1Ref, h1InView] = useInView({
    triggerOnce: false, // Only trigger once when it enters the viewport
    threshold: 0.2, // 10% of the component is visible
  });

  const [h2Ref, h2InView] = useInView({
    triggerOnce: false, // Only trigger once when it enters the viewport
    threshold: 0.2, // 10% of the component is visible
  });



  return (
    <div className={darkMode ? "dark" : ""} id="portfolio">
      <div className="bg-white dark:bg-gray-800 text-center py-20">
        <h1
          ref={h1Ref}
          className={`text-5xl text-left px-20 text-pink-700 font-medium md:text-6xl ${
            h1InView ? "animate-fadeUpIn-h1" : ""
          }`}
        >
          Portfolio
        </h1>

        <h2
          ref={h2Ref}
          className={`mt-5 text-xl text-left px-20 text-zinc-600 dark:text-slate-200 font-medium md:text-x ${
            h2InView ? "animate-fadeUpIn-h2" : ""
          }`}
        >
          Discover my diverse portfolio, showcasing BackEnd development, Fronted
          development, web development, design, and digital art.
          <br /> Explore my creative journey and reach out for collaborations.
        </h2>
        <div className="flex flex-col gap-10 py-10 px-20 lg:flex-row lg:flex-wrap">
          {cards.map((card, index) => (
            <NewCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              images={card.images}
              usedTools={card.usedTools}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
