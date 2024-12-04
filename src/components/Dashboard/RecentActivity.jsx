import React, { useState } from "react";

const RecentActivity = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to toggle the list

  const activities = [
    {
      id: 1,
      name: "Kevin",
      action: "comments on your lecture",
      details: "“What is ux” in “2021 ui/ux ”",
      svgInline: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8m5 9v-2h-2v2zm-4 0v-2h-2v2zm-4 0v-2H7v2z"/></svg>`,
      time: "Just now",
    },
    {
      id: 2,
      name: "John",
      action: "give a 5 star rating on your course",
      details: "“2021 ui/ux design ”",
      svgInline: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>`,
      time: "5 mins ago",
    },
    {
      id: 3,
      name: "Sraboni",
      action: "purchase your course",
      details: "“2021 ui/ux design with figma”",
      svgInline: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="white" d="M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8m24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"/></svg>`,
      time: "6 mins ago",
    },
    {
      id: 4,
      name: "Arif",
      action: "purchase your course",
      details: "“2021 ui/ux design with figma”",
      svgInline: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="white" d="M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8m24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"/></svg>`,
      time: "6 mins ago",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)} // Toggle expand/collapse
        >
          <p className="text-sm text-gray-500">Today</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={`transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <path
              fill="currentColor"
              d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.205.213t-.375.062"
            />
          </svg>
        </div>
      </div>
      {/* Activity List */}
      {isExpanded && ( // Conditionally render the activity list
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="flex px-4 py-3">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-[#ff623b] text-gray-700 rounded-full text-xl">
                <div
                  className="w-5 h-5"
                  dangerouslySetInnerHTML={{ __html: activity.svgInline }}
                  aria-label={activity.name}
                />
              </div>
              {/* Details */}
              <div className="ml-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{activity.name}</span>{" "}
                  {activity.action}
                  <span className="font-medium text-gray-900">
                    {" "}
                    {activity.details}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivity;
