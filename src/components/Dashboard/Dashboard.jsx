import React, { useState } from 'react'
import { SidebarWithLogo } from "../MT Components/SidebarWithLogo";
import { NavbarSimple } from "../MT Components/NavbarSimple";
import Card from "./Card";
import ProfileProgress from "./ProfileProgress";
import RecentActivity from "./RecentActivity";
import Footer from "./Footer";

const Dashboard = () => {


  return (
    <>
      <div className="flex ">
        <SidebarWithLogo  />
        <div className="ml-64 flex flex-col w-full ">
          <NavbarSimple />
          <div className="mt-20 ">
              <Card />
              <ProfileProgress />
              <RecentActivity/>
              <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
