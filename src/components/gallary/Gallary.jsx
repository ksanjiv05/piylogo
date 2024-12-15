import { createEffect, createSignal } from "solid-js";
import axios from "axios";
import { API_URL, static_URL } from "../../config/config";

const Gallery = ({ setPainting }) => {
  const [paintings, setPaintings] = createSignal([]);
  const [selectedPainting, setSelectedPainting] = createSignal(null);
  const getPaintings = () => {
    axios
      .get(API_URL + "/paintings")
      .then((res) => {
        console.log(res.data);
        setPaintings(res.data.paintings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createEffect(() => {
    getPaintings();
  });

  const scrollToContact = (painting) => {
    setPainting(painting);
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
    setSelectedPainting(null);
  };

  return (
    <div class="w-full scroll-m-20 md:scroll-m-2 " id="works">
      <div class="md:columns-2 columns-1 gap-[30px]">
        {paintings().length > 0 &&
          paintings().map((painting, i) => {
            if (i % 2 == 0) {
              return (
                <div class="rounded-[20px]  overflow-hidden">
                  <img
                    onClick={() => setSelectedPainting(painting)}
                    class="w-full  "
                    src={`${static_URL}/${painting.image}`}
                  />
                  <div class="w-full flex flex-row h-[120px] p-[16px]  bg-white">
                    <div class="flex-1">
                      <h2 class="text-[20px] font-bold font-nunito text-[#5f5f5f]">
                        {painting.name}
                      </h2>
                      <p
                        class="text-[16px] font-nunito text-[#5f5f5f]"
                        style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;  "
                      >
                        {painting.description}
                      </p>
                      <p class="text-[20px] font-bold text-[#5f5f5f]">
                        ₹ {painting.price}
                      </p>
                    </div>
                    <div>
                      {painting.tag.toLowerCase() == "sold" ? (
                        <button class="bg-[#e2e2e2] text-white text-[24px] md:px-[32px] px-[16px] md:py-[16px] py-[8px] uppercase font-bold rounded-full font-nunito">
                          Sold
                        </button>
                      ) : (
                        <button
                          onClick={() => scrollToContact(painting)}
                          class="bg-[#798595] text-white text-[24px] md:px-[32px] px-[16px] md:py-[16px] py-[8px] uppercase font-bold rounded-full font-nunito"
                        >
                          Buy
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div class="rounded-[20px] my-[30px]  overflow-hidden">
                <img
                  onClick={() => setSelectedPainting(painting)}
                  class="w-full  "
                  src={`${static_URL}/${painting.image}`}
                />
                <div class="w-full flex flex-row h-[120px] p-[16px]  bg-white">
                  <div class="flex-1">
                    <h2 class="text-[20px] font-bold font-nunito text-[#5f5f5f]">
                      {painting.name}
                    </h2>
                    <p
                      class="text-[16px] font-nunito text-[#5f5f5f]"
                      style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;  "
                    >
                      {painting.description}
                    </p>
                    <p class="text-[20px] font-bold text-[#5f5f5f]">
                      ₹ {painting.price}
                    </p>
                  </div>
                  <div>
                    {painting.tag.toLowerCase() == "sold" ? (
                      <button class="bg-[#e2e2e2] text-white text-[24px] md:px-[32px] px-[16px] md:py-[16px] py-[8px] uppercase font-bold rounded-full font-nunito">
                        Sold
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToContact(painting)}
                        class="bg-[#798595] text-white text-[24px] md:px-[32px] px-[16px] md:py-[16px] py-[8px] uppercase font-bold rounded-full font-nunito"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/** model */}

      {/* <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {selectedPainting() && (
        <div
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          class=" overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center  max-h-full"
        >
          <div class="relative">
            <div class="relative w-full bg-[#0000009b] shadow ">
              <div class="flex items-center justify-center ">
                <div class="md:flex hidden">
                  <div>
                    <img
                      // src="https://kotart.in/cdn/shop/products/Kotart-Floral-Canvas-Painting-Vibrant-Large-Canvas-Art-for-Wall-Decor.jpg?v=1697552467"
                      src={`${static_URL}/${selectedPainting().image}`}
                      alt="..."
                      class="h-[100vh]"
                    />
                  </div>
                  <div class="w-[350px] bg-black p-5 relative">
                    <div>
                      <div class="md:text-[30px] text-[16px] font-bold text-gray-900 dark:text-white font-nunito capitalize">
                        {selectedPainting().name}
                      </div>

                      <p class="md:text-[16px] text-[12px] mt-3 dark:text-white font-nunito capitalize">
                        {selectedPainting().description}
                      </p>

                      <p class="md:text-[20px] text-[16px] mt-3 font-bold text-white ">
                        ₹ {selectedPainting().price}
                      </p>
                      {selectedPainting().tag.toLowerCase() == "sold" ? (
                        <button class="bg-[#e2e2e2] mt-3 text-white md:text-[24px] text-[16px] md:px-[25px] px-[16px] md:py-[10px] py-[8px] uppercase font-bold rounded-full font-nunito">
                          Sold
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            scrollToContact(selectedPainting());
                          }}
                          data-modal-hide="default-modal"
                          class="bg-[#798595] mt-3 text-white md:text-[24px] text-[16px] md:px-[25px] px-[16px] md:py-[10px] py-[8px] uppercase font-bold rounded-full font-nunito"
                        >
                          Buy
                        </button>
                      )}
                    </div>
                    <button
                      type="button"
                      class=" absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                      onClick={() => setSelectedPainting(null)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>

                <div class="h-[100vh] bg-black md:hidden">
                  <button
                    type="button"
                    class=" h-14 w-14  top-2 right-4 p-2 float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm  ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                    onClick={() => setSelectedPainting(null)}
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div>
                    <img
                      // src="https://kotart.in/cdn/shop/products/Kotart-Floral-Canvas-Painting-Vibrant-Large-Canvas-Art-for-Wall-Decor.jpg?v=1697552467"
                      src={`${static_URL}/${selectedPainting().image}`}
                      alt="..."
                      class="w-[100vw]"
                    />
                  </div>
                  <div class=" bg-black p-5 relative">
                    <div>
                      <div class="text-[30px] font-bold text-gray-900 dark:text-white font-nunito capitalize">
                        {selectedPainting().name}
                      </div>

                      <p class="text-[16px] mt-3 dark:text-white font-nunito capitalize">
                        {selectedPainting().description}
                      </p>

                      <p class="text-[20px] mt-3 font-bold text-white ">
                        ₹ {selectedPainting().price}
                      </p>
                    </div>

                    {selectedPainting().tag.toLowerCase() == "sold" ? (
                      <button class="bg-[#e2e2e2] mt-3 text-white text-[24px] px-[25px] py-[10px] uppercase font-bold rounded-full font-nunito">
                        Sold
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          scrollToContact(selectedPainting());
                        }}
                        data-modal-hide="default-modal"
                        class="bg-[#798595]  mt-3 text-white text-[24px] px-[25px] w-[100%] uppercase font-bold rounded-full font-nunito"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
