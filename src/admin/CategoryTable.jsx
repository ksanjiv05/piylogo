import { createSignal, createEffect } from "solid-js";
import { static_URL, API_URL } from "../config/config";
import axios from "axios";
const CategoryTable = () => {
  const [categories, setCategories] = createSignal([]);
  const [newCategory, setNewCategory] = createSignal({
    name: "",
    description: "",
    price: "",
    image: "",
    tag: "",
  });
  const [image, setImage] = createSignal(null);
  const [loader, setLoader] = createSignal(false);
  const onChange = (ev) => {
    const { name, value } = ev.target;
    // Update other fields
    setNewCategory({
      ...newCategory(),
      [name]: value,
    });
  };

  const addCategory = () => {
    const formData = new FormData();
    formData.append("name", newCategory().name);
    formData.append("image", image());
    formData.append("categoryName", newCategory().categoryName);
    console.log(formData);
    setLoader(true);
    axios
      .post(`${API_URL}/category`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoader(false);
        alert("Category added");
        getCategories();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
        setLoader(false);
      });
  };

  const getCategories = () => {
    axios
      .get(`${API_URL}/category`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  const deleteCategory = (id) => {
    axios
      .delete(`${API_URL}/category/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        getCategories();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  createEffect(() => {
    getCategories();
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="large-input"
            name="name"
            onChange={onChange}
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={(ev) => setImage(ev.target.files[0])}
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-4">
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            categoryName
          </label>
          <input
            type="text"
            id="large-input"
            name="categoryName"
            onChange={onChange}
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
          </label>
          <input
            type="button"
            id="large-input"
            value={loader() ? "Adding..." : "Add"}
            onClick={addCategory}
            disabled={loader()}
            class="block w-full p-4 text-green-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-green-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      {/** data tables  */}
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  image
                </th>

                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories().length > 0 &&
                categories().map((painting) => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                      >
                        <img
                          src={`${static_URL}${painting.image}`}
                          class="w-12 h-12 rounded-full mx-2"
                          alt="Jese image"
                        />
                      </th>
                      <td class="px-6 py-4">{painting.name}</td>
                      <td class="px-6 py-4">{painting.categoryName}</td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => deleteCategory(painting._id)}
                          class="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
