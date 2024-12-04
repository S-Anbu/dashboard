import React from "react";

const SearchFilterBar = () => {
  return (
    <div className="flex items-center justify-between  py-4 px-6  shadow-sm">
      {/* Search Box */}
      <div className="flex flex-col">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Search
        </label>
        <div className="relative">

        <input

          type="text"
          id="search"
          placeholder="Search in your courses..."
          className=" w-full pl-12 p-2 border outline-none"/>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-2 left-3" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"/></svg>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className=" ml-4">
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <div className=" pr-2 bg-white">
        <select
          id="sort"
          className="mt-1 block w-full   pr-32 p-2   outline-none"
        >
          <option>Latest</option>
        </select>
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="ml-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category:
        </label>
        <div className=" pr-2 bg-white">
        <select
          id="category"
          className="mt-1 block w-full pr-32 p-2 outline-none "
        >
          <option>All Category</option>
        </select>
        </div>
      </div>

      {/* Rating Dropdown */}
      <div className="ml-4">
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
          Rating:
        </label>
        <div className="  pr-2 bg-white">
        <select
          id="rating"
          className="mt-1 block w-full pr-32 p-2 outline-none   "
        >
          <option>4 Star & Up</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
