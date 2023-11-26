import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { XIcon } from "@heroicons/react/outline";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecolab } from "react-icons/si";
import { DarkContext, DarkProvider } from "../index";

function Modal({
  title,
  subtitle,
  description,
  images,
  usedTools,
  sourceCode,
  closeModal,
}) {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [open, setOpen] = useState(true);
  const isVideo =
    images && images.some((src) => src.toLowerCase().endsWith(".mp4"));
  const videoSrc = images.find((src) => src.toLowerCase().endsWith(".mp4"));
  const isUrlContainsGit = sourceCode.includes("git");
  const isUrlContainsLink = description.includes("http");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className={!darkMode ? "dark" : ""}>
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="bg-rose-100 bg-opacity-75 absolute inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal max-w-[1000px] max-h[400px] mx-auto z-10 p-7 bg-white border-black border-4 rounded-lg shadow-xl dark:bg-gray-800 dark:border-white dark:text-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-10 ">
                    <Dialog.Title className="text-4xl font-bold">
                      {title}
                    </Dialog.Title>
                  </div>
                  <div>
                    <button
                      className="text-2xl text-gray-900"
                      onClick={closeModal}
                    >
                      <XIcon className="w-6 h-6 justify-end dark:text-white" />
                    </button>
                  </div>
                </div>
                <h2 className="text-xl text-gray-500 mt-2 dark:text-rose-100">
                  {subtitle}{" "}
                </h2>
                <p className="text-sm text-gray-700 pr-6 mt-3 relative flex justify-end gap-3">
                  <span className="absolute h-2 rounded-md bg-pink-700 w-40 top-0 left-0"></span>
                </p>

                <p className="text-gray-500 mt-7 dark:text-white">
                  {isUrlContainsLink ? (
                    <a
                      className="animate-pulse text-pink-700 dark:text-white hover:cursor-pointer inline-block after:content-['→'] after:text-lg after:font-extrabold after:ml-2 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100 hover:after:ml-3"
                      href={description}
                    >
                      Link to the game
                    </a>
                  ) : (
                    description
                  )}
                </p>
                <p className="dark:text-red-100">
                  <span className="font-bold">Tools:{"  "}</span>
                  {usedTools.map((tool, index) =>
                    index === usedTools.length - 1 ? tool : tool + " | "
                  )}
                </p>

                {isVideo ? (
                  <div className="mx-auto p-5 w-3/5">
                    <video autoPlay controls className="rounded-xl">
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="mx-auto p-5 max-w-lg h-auto">
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={2000}
                    >
                      {images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`Image ${index}`}
                            className="rounded-xl"
                          />
                        </div>
                      ))}
                    </Carousel>{" "}
                  </div>
                )}
                <div className="flex justify-end gap-3 text-right">
                  <p className="font-bold mt-1">Source code</p>
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-3xl"
                  >
                    {isUrlContainsGit ? <AiFillGithub /> : <SiGooglecolab />}
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition.Root>
  );
}

export default Modal;
