const Header = () => {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: 100,
      });
    }
  }

  return (
    <div class="fixed w-full">
      <div class="w-full h-[2px] bg-[#434343]" />
      <header class="px-[80px] flex flex-1 flex-row bg-[#ECEDEE] items-center justify-center h-[60px]">
        <div class="basis-1/3 items-center justify-center ">
          <img
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
