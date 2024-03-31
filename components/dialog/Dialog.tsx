"use client"
import Image from "next/image";
import React from "react";

function Dialog({ open, setOpen,image=undefined }) {
  return (
    <div
      className={` ${open ? "block" : "hidden"}`}

    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-scroll"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end bg-gray-600 bg-opacity-85 justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform flex-col flex justify-between overflow-hidden rounded-lg border-2 bg-white text-left shadow-xl transition-all sm:my-8  sm:max-w-6xl h-[90vh] overflow-y-scroll">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 sm:mt-0">
                  {/* <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3> */}
                  <div className="mt-2">
                    <Image src={image} alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
