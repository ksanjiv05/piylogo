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
  };

  return (
    <div class="w-full mt-[30px]">
      <div class="columns-2 gap-[30px]">
        {/* <div class="rounded-[20px] overflow-hidden">
          <img class="w-full " src="public/assets/images/1.jpg" />
          <div class="w-full flex flex-row h-[120px] p-[16px]  bg-white">
            <div class="flex-1">
              <h2 class="text-[20px] font-bold">The Painting Name</h2>
              <p class="text-[16px] ">Canvas [40x60]</p>
              <p class="text-[20px] font-bold">₹ 50000000</p>
            </div>
            <div>
              <button class="bg-[#798595] text-white text-[24px] px-[32px] py-[16px] uppercase font-bold rounded-full ">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-[20px] my-[30px] overflow-hidden">
          <img class="w-full   " src="public/assets/images/3.jpg" />
          <div class="w-full flex flex-row h-[120px] p-[16px]  bg-white">
            <div class="flex-1">
              <h2 class="text-[20px] font-bold">The Painting Name</h2>
              <p class="text-[16px] ">Canvas [40x60]</p>
              <p class="text-[20px] font-bold">₹ 50000000</p>
            </div>
            <div>
              <button class="bg-[#798595] text-white text-[24px] px-[32px] py-[16px] uppercase font-bold rounded-full ">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-[20px]  my-[30px] overflow-hidden">
          <img class="w-full  " src="public/assets/images/2.jpg" />
          <div class="w-full flex flex-row h-[120px] p-[16px]  bg-white">
            <div class="flex-1">
              <h2 class="text-[20px] font-bold">The Painting Name</h2>
              <p class="text-[16px] ">Canvas [40x60]</p>
              <p class="text-[20px] font-bold">₹ 50000000</p>
            </div>
            <div>
              <button class="bg-[#798595] text-white text-[24px] px-[32px] py-[16px] uppercase font-bold rounded-full ">
                Buy
              </button>
            </div>
          </div>
        </div> */}
        {paintings().length > 0 &&
          paintings().map((painting) => {
            return (
              <div class="rounded-[20px]  my-[30px] overflow-hidden">
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
                      {painting.price}
                    </p>
                  </div>
                  <div>
                    {painting.tag.toLowerCase() == "sold" ? (
                      <button class="bg-[#e2e2e2] text-white text-[24px] px-[32px] py-[16px] uppercase font-bold rounded-full font-nunito">
                        Sold
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToContact(painting)}
                        class="bg-[#798595] text-white text-[24px] px-[32px] py-[16px] uppercase font-bold rounded-full font-nunito"
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
          class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative p-4 w-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white font-nunito capitalize">
                    {selectedPainting().name}
                  </h3>
                  <p class="text-[16px] dark:text-white font-nunito capitalize">
                    {selectedPainting().description}
                  </p>
                </div>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <div class="p-4 md:p-5 space-y-4">
                <img
                  // src="https://kotart.in/cdn/shop/products/Kotart-Floral-Canvas-Painting-Vibrant-Large-Canvas-Art-for-Wall-Decor.jpg?v=1697552467"
                  src={`${static_URL}/${selectedPainting().image}`}
                  alt="..."
                  class="w-full"
                />
              </div>
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {/* <button
                  data-modal-hide="default-modal"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buy
                </button> */}
                <button
                  data-modal-hide="default-modal"
                  onClick={() => setSelectedPainting(null)}
                  type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
