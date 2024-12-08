import React, { useState } from 'react'
import { SidebarWithLogo } from "../MT Components/SidebarWithLogo";
import { NavbarSimple } from "../MT Components/NavbarSimple";
import RecentActivity from '../Dashboard/RecentActivity';
import Footer from '../Dashboard/Footer';

const ViewDetails = () => {


  return (
    <>
      <div className="flex">
        <SidebarWithLogo  />
        <div className="ml-64 flex flex-col w-full">
          <NavbarSimple />
          <div className="mt-20">
              <RecentActivity/>
              <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
