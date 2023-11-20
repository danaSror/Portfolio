import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { XIcon } from "@heroicons/react/outline";

function ModalComponent({ title, subtitle, description, images, closeModal }) {
  const [open, setOpen] = useState(true);
  const isVideo =
    images && images.some((src) => src.toLowerCase().endsWith(".mp4"));
  const videoSrc = images.find((src) => src.toLowerCase().endsWith(".mp4"));

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
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
            <div
              className="z-10 p-7 bg-white border-black border-4 rounded-lg shadow-xl w-3/4 h-3/4"
              style={{ maxWidth: "80vw", maxHeight: "90vh" }}
            >
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-4xl font-bold">
                  {title}
                </Dialog.Title>
                <button
                  className="text-2xl text-gray-900 "
                  onClick={closeModal}
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <h2 className="text-xl text-gray-500 mt-2">{subtitle}</h2>
              <p className="text-sm text-gray-700 pr-6 mt-3 relative">
                <span className="absolute h-2 rounded-md bg-pink-700 w-40 top-0 left-0"></span>
              </p>
              <p className="text-gray-500 mt-10">{description}</p>
              {isVideo ? (
                <div className="mx-auto p-5 w-3/5">
                  <video autoPlay controls className="rounded-xl">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="mx-auto p-5 w-3/5">
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
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
              {/* <div className="mx-auto p-5 w-3/5">
                {images && images.length > 0 && (
                  <div>
                    {images.map((src, index) => (
                      <div key={index}>
                        <div>
                          {src.endsWith(".mp4") ? ( // Check if the src ends with .mp4
                            <video width="100%" autoPlay controls>
                              <source src={src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={src}
                              alt={`Image ${index}`}
                              className="rounded-xl"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ModalComponent;
