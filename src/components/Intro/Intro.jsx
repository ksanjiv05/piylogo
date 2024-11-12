import { createEffect, createSignal } from "solid-js";
import axios from "axios";
import { API_URL, static_URL } from "../../config/config";

const Intro = () => {
  const [categories, setCategories] = createSignal([]);
  const getAllCategories = () => {
    axios
      .get(API_URL + "/category")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createEffect(() => {
    getAllCategories();
  });

  return (
    <div class="w-full flex flex-row  ">
      {/* <div class="flex-1 base-1/3 float-left ">
        <img src="src/assets/images/Left.png" width={420} height={420} />
      </div>
      <div class="flex-1 base-1/3">
        <img
          class="mx-auto"
          src="src/assets/images/Center.png"
          width={420}
          height={420}
        />
      </div>
      <div class="flex-1 base-1/3 ">
        <img
          class=" float-right"
          src="src/assets/images/Right.png"
          width={420}
          height={420}
        />
      </div> */}
      {categories() &&
        categories().map((category) => {
          console.log("category", category);
          if (category.categoryName == "video") {
            return (
              <div class="flex-1 base-1/3">
                <video loop autoPlay>
                  <source src={static_URL + category.image} type="video/mp4" />
                </video>
              </div>
            );
          }

          return (
            <div class="flex-1 base-1/3">
              <img
                class="mx-auto"
                src={static_URL + category.image}
                width={420}
                height={420}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Intro;
