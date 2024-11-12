import { createSignal, createEffect } from "solid-js";
import { static_URL, API_URL } from "../config/config";
import axios from "axios";
const PaintingTable = () => {
  const [paintings, setPaintings] = createSignal([]);
  const [newPainting, setNewPainting] = createSignal({
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
    setNewPainting({
      ...newPainting(),
      [name]: value,
    });
  };

  const addPainting = () => {
    const formData = new FormData();
    // formData.append("name", newPainting.name);
    // formData.append("description", newPainting.description);
    // formData.append("price", newPainting.price);
    // formData.append("image", image);
    // formData.append("tag", newPainting.tag);
    //   const formData = new FormData();
    formData.append("name", newPainting().name);
    formData.append("description", newPainting().description);
    formData.append("price", newPainting().price);
    formData.append("image", image());
    formData.append("tag", newPainting().tag);
    console.log(formData);
    setLoader(true);
    axios
      .post(`${API_URL}/login/paintings`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoader(false);
        getPaintings();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
        setLoader(false);
      });
  };

  const getPaintings = () => {
    axios
      .get(`${API_URL}/login/paintings`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setPaintings(res.data.paintings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePainting = (id) => {
    axios
      .delete(`${API_URL}/login/paintings/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        getPaintings();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  createEffect(() => {
    getPaintings();
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
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
            Price
          </label>
          <input
            type="number"
            id="large-input"
            name="price"
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
      <div className="grid grid-cols-3 gap-4">
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            type="text"
            id="large-input"
            name="description"
            onChange={onChange}
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            tag
          </label>
          <input
            type="text"
            id="large-input"
            name="tag"
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
            onClick={addPainting}
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
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  tag
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paintings().length > 0 &&
                paintings().map((painting) => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                      >
                        <img
                          src={`${static_URL}${painting.image}`}
                          class="w-10 h-10 rounded-full mx-2"
                          alt="Jese image"
                        />
                        {painting.name}
                      </th>
                      <td class="px-6 py-4">{painting.description}</td>
                      <td class="px-6 py-4">{painting.tag}</td>
                      <td class="px-6 py-4">{painting.price}</td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => {
                            deletePainting(painting._id);
                          }}
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

export default PaintingTable;
