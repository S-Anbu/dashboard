import React, { useState } from 'react'
import { SidebarWithLogo } from "../MT Components/SidebarWithLogo";
import { NavbarSimple } from "../MT Components/NavbarSimple";
import Footer from '../Dashboard/Footer';
import SearchFilterBar from './SearchFilterBar';
import CourseCard from './CourseCard';

const MyCourse = () => {


  return (
    <>
      <div className="flex">
        <SidebarWithLogo  />
        <div className="ml-64 flex flex-col w-full bg-gray-100">
          <NavbarSimple />
          <div className="mt-20">
            <SearchFilterBar/>
            <CourseCard/>
              <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
