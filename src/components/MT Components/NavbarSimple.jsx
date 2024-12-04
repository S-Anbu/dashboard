import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
export function NavbarSimple() {
  return (
    <Navbar className="mx-auto max-w-screen-xl h-fit px-6 py-3 rounded-none fixed">
      <div className="flex items-center justify-between px-20 text-blue-gray-900">
        <div className="flex flex-col">
          <span className="text-xs font-extralight">Good Morning</span>
          <span className=" font-semibold">Dashboard</span>

        </div>
        <div className="flex space-x-4">
        <div className="">
          <div className="relative">
            <input
              className=" bg-gray-100 py-2 rounded pl-10  outline-none"
              type="text"
              placeholder="search"
            />
            <div className="absolute left-2 top-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded p-2 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <div className="absolute top-0 right-1 rounded-full bg-orange-700 p-[4px]"></div>
          </div>
        </div>
        <div>
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            class="relative inline-block h-10 w-10 !rounded-full object-cover object-center"
          />
        </div>
        </div>
      </div>
    </Navbar>
  );
}
