import Image from "next/image";
import { useContext } from "react";
import { DarkContext } from "../index";

function Card2() {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="blog-card">
      <div className="photo">
            <Image
              src="/Dora1.jpeg"
              alt="Image Alt Text"
              width={400}
              height={300}
            />
          </div>
        <div className="description">
          <h1>Learning to Code</h1>
          <h2>Opening a door to the future</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
