import { createSignal, createEffect } from "solid-js";
import { static_URL, API_URL } from "../config/config";
import axios from "axios";
const ContactTable = () => {
  const [contacts, setContacts] = createSignal([]);

  const [loader, setLoader] = createSignal(false);

  const getAllContacts = () => {
    axios
      .get(`${API_URL}/contact`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setContacts(res.data.contacts);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  createEffect(() => {
    getAllContacts();
  });

  return (
    <div className="w-full">
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
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  email
                </th>
                <th scope="col" class="px-6 py-3">
                  Purpose
                </th>
                <th scope="col" class="px-6 py-3">
                  message
                </th>
                <th scope="col" class="px-6 py-3">
                  address
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts().length > 0 &&
                contacts().map((contact) => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td class="px-6 py-4">{contact.name}</td>
                      <td class="px-6 py-4">{contact.phone}</td>
                      <td class="px-6 py-4">{contact.email}</td>
                      <td class="px-6 py-4">{contact.purpose}</td>
                      <td class="px-6 py-4">{contact.message}</td>
                      <td class="px-6 py-4">{contact.address}</td>

                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
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

export default ContactTable;
