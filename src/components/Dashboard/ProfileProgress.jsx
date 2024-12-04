import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ProfileProgressCard = ({
  profileImage,
  name,
  email,
  stepsCompleted,
  totalSteps,
  progressPercentage,
}) => {
  return (
    <div className="flex items-center space-x-10   p-4 bg-[#111032] text-white rounded-lg shadow-md">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={profileImage}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-300">{email}</p>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="flex justify-between ">
          <span className="text-sm l ">
            {stepsCompleted}/{totalSteps} Steps
          </span>
          <p className="text-sm mt-1 ">{progressPercentage}% Completed</p>
        </div>
        <div className="relative w-full h-3 bg-gray-700  mt-1">
          <div
            className="absolute top-0 left-0 h-3 bg-[#22bd33] "
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Edit Biography
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-md">
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

const ProfileProgress = () => {
  const userData = {
    profileImage: "https://docs.material-tailwind.com/img/face-2.jpg",
    name: "Vako Shvili",
    email: "vako.shvili@gmail.com",
    stepsCompleted: 1,
    totalSteps: 4,
    progressPercentage: 25,
  };

  return (
    <div className="p-6">
      <ProfileProgressCard {...userData} />
    </div>
  );
};

export default ProfileProgress;
