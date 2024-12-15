import { createEffect, createSignal } from "solid-js";
const Header = () => {
  const [openMenu, setOpenMenu] = createSignal(false);
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: 100,
      });
    }
    setOpenMenu(false);
  }

  return (
    <div class="fixed w-full">
      <div class="w-full h-[2px] bg-[#434343]" />
      <header class="px-[80px] hidden  md:flex flex-1 flex-row bg-[#ECEDEE] items-center justify-center h-[60px]">
        <div class="basis-1/3 items-center justify-center ">
          <img
            onClick={() => scrollToSection("works")}
            //   class="mx-auto"
            src="src/assets/images/PIY.png"
            height={44}
            width={44}
          />
        </div>
        <div class="flex-1 basis-1/3  ">
          <ul class="list-none flex mx-auto">
            <li
              class="flex-1 text-center cursor-pointer uppercase text-[16px] text-[#434343]"
              onClick={() => scrollToSection("works")}
            >
              works
            </li>
            <li
              class="flex-1 text-center cursor-pointer uppercase text-[16px] text-[#434343] "
              onClick={() => scrollToSection("services")}
            >
              services
            </li>
            <li
              class="flex-1 text-center cursor-pointer uppercase text-[16px] text-[#434343]"
              onClick={() => scrollToSection("studio")}
            >
              studio
            </li>
            <li
              class="flex-1 text-center cursor-pointer uppercase text-[16px] text-[#434343]"
              onClick={() => scrollToSection("contact")}
            >
              contact
            </li>
          </ul>
        </div>
        <div class="basis-1/3 justify-end items-center">
          <ul class="list-none flex  float-right">
            <li class="mx-1">
              <a href="https://www.instagram.com/piy.art/">
                <img
                  class="mx-auto"
                  src="src/assets/icons/Instagram.png"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li class="mx-1 ">
              <a href="https://www.linkedin.com/company/piystudio/?viewAsMember=true">
                <img
                  class="mx-auto"
                  src="src/assets/icons/Linkedin.png"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li class="mx-1">
              <a href="https://x.com/PiyStudio">
                <img
                  class="mx-auto"
                  src="src/assets/icons/X.png"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li class="ml-1">
              <a href="https://www.youtube.com/@piystudio">
                <img
                  class="float-right"
                  src="src/assets/icons/Youtube.png"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div class="h-[50px] md:hidden   absolute w-[100vw] ">
        <div class="flex bg-[#ECEDEE] p-[25px] ">
          <img
            onClick={() => scrollToSection("works")}
            src="src/assets/images/PIY.png"
            height={44}
            width={44}
          />
          <button
            type="button"
            class=" absolute  top-[20px] right-[25px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => setOpenMenu(!openMenu())}
          >
            {openMenu() ? (
              <svg
                class="w-4 h-4"
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
            ) : (
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1.5H26"
                  stroke="#434343"
                  stroke-width="2.4"
                  stroke-linecap="round"
                />
                <path
                  d="M2 9.5H26"
                  stroke="#434343"
                  stroke-width="2.4"
                  stroke-linecap="round"
                />
                <path
                  d="M2 17.5H26"
                  stroke="#434343"
                  stroke-width="2.4"
                  stroke-linecap="round"
                />
              </svg>
            )}

            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div
          class={`${
            openMenu() ? "flex" : "hidden"
          } h-[100vh] z-30 bg-[#ECEDEE] px-[25px] py-[10px] `}
        >
          <ul class="w-full">
            <hr class="w-full" />
            {["works", "services", "studio", "contact"].map((section) => (
              <>
                <li
                  class="w-full cursor-pointer capitalize text-[32px] py-[15px] text-[#434343]"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </li>
                <hr class="w-full" />
              </>
            ))}
            <li class="w-full cursor-pointer capitalize text-[24px] py-[15px] text-[#434343]">
              Stay in touch
            </li>

            <li class="w-full  py-[15px]">
              <ul class="list-none flex  ">
                <li class="mx-1">
                  <a href="https://www.instagram.com/piy.art/">
                    <img
                      class="mx-auto p-2 rounded-3xl  bg-white"
                      src="src/assets/icons/Instagram.png"
                      height={55}
                      width={55}
                    />
                  </a>
                </li>
                <li class="mx-1 ">
                  <a href="https://www.linkedin.com/company/piystudio/?viewAsMember=true">
                    <img
                      class="mx-auto p-2 rounded-3xl  bg-white"
                      src="src/assets/icons/Linkedin.png"
                      height={55}
                      width={55}
                    />
                  </a>
                </li>
                <li class="mx-1">
                  <a href="https://x.com/PiyStudio">
                    <img
                      class="mx-auto p-2 rounded-3xl  bg-white"
                      src="src/assets/icons/X.png"
                      height={55}
                      width={55}
                    />
                  </a>
                </li>
                <li class="ml-1">
                  <a
                    href="https://www.youtube.com/@piystudio"
                    // class="bg-white p-4"
                  >
                    <img
                      class="float-right p-2 rounded-3xl  bg-white"
                      src="src/assets/icons/Youtube.png"
                      height={55}
                      width={55}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
// Instagram - https://www.instagram.com/piy.art/
// LinkedIn - https://www.linkedin.com/company/piystudio/?viewAsMember=true
// Youtube - https://www.youtube.com/@piystudio
// Twitter - https://x.com/PiyStudio
// Facebook - https://www.facebook.com/profile.php?id=100004291560400
// Mail id - piyushguptastudio@gmail.com
