import React from "react";
import a from '../../assets/a.png'
import b from '../../assets/b.png'
import c from '../../assets/c.png'
import d from '../../assets/d.png'
import e from '../../assets/e.png'
import f from '../../assets/f.png'
import g from '../../assets/g.png'
import { PopoverCustomAnimation } from "./PopoverCustomAnimation";

const CourseCard = () => {
    const courses = [
        {
          image: a,
          title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
          category: "Development",
          rating: 4.9,
          students: "982,941",
          price: 24.0,
        },
        {
          image: b,
          title: "Learn Python Programming Masterclass",
          category: "Development",
          rating: 4.0,
          students: "511,923",
          price: 49.0,
        },
        {
          image: c,
          title: "Data Structures & Algorithms Essentials",
          category: "Development",
          rating: 5.0,
          students: "198,357",
          price: 23.0,
          originalPrice: 85.0,
        },
        {
          image: d,
          title: "Machine Learning A-Z™: Hands-On Python",
          category: "Development",
          rating: 4.8,
          students: "211,424",
          price: 89.0,
        },
        {
            image: e,
            title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
            category: "Development",
            rating: 4.9,
            students: "982,941",
            price: 24.0,
          },
          {
            image: f,
            title: "Learn Python Programming Masterclass",
            category: "Development",
            rating: 4.0,
            students: "511,923",
            price: 49.0,
          },
          {
            image: g,
            title: "Data Structures & Algorithms Essentials",
            category: "Development",
            rating: 5.0,
            students: "198,357",
            price: 23.0,
            originalPrice: 85.0,
          },
          {
            image: a,
            title: "Machine Learning A-Z™: Hands-On Python",
            category: "Development",
            rating: 4.8,
            students: "211,424",
            price: 89.0,
          },
          {
            image: b,
            title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
            category: "Development",
            rating: 4.9,
            students: "982,941",
            price: 24.0,
          },
          {
            image: c,
            title: "Learn Python Programming Masterclass",
            category: "Development",
            rating: 4.0,
            students: "511,923",
            price: 49.0,
          },
          {
            image: d,
            title: "Data Structures & Algorithms Essentials",
            category: "Development",
            rating: 5.0,
            students: "198,357",
            price: 23.0,
            originalPrice: 85.0,
          },
          {
            image: e,
            title: "Machine Learning A-Z™: Hands-On Python",
            category: "Development",
            rating: 4.8,
            students: "211,424",
            price: 89.0,
          },
          {
            image: f,
            title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
            category: "Development",
            rating: 4.9,
            students: "982,941",
            price: 24.0,
          },
          {
            image: g,
            title: "Learn Python Programming Masterclass",
            category: "Development",
            rating: 4.0,
            students: "511,923",
            price: 49.0,
          },
          {
            image: a,
            title: "Data Structures & Algorithms Essentials",
            category: "Development",
            rating: 5.0,
            students: "198,357",
            price: 23.0,
            originalPrice: 85.0,
          },
          {
            image: b,
            title: "Machine Learning A-Z™: Hands-On Python",
            category: "Development",
            rating: 4.8,
            students: "211,424",
            price: 89.0,
          },
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <span className="text-[12px] bg-[#eaebff] p-1 text-indigo-600 uppercase font-semibold">
              {course.category}
            </span>
            <h3 className="mt-2 text-sm font-semibold border-b pb-2 text-gray-800">
              {course.title}
            </h3>
            <div className="flex items-center justify-between mt-2 text-sm border-b pb-2 text-gray-500">
              <span className=" flex-1 mr-2">⭐ {course.rating} </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-800" width="20" height="20" viewBox="0 0 24 24"><path  d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm0-2h11.2q.15 0 .275-.125Q18 17.75 18 17.6v-1.175q0-.625-1.788-1.525q-1.787-.9-4.312-.9q-2.575 0-4.237.9Q6 15.8 6 16.45v1.15q0 .15.125.275Q6.25 18 6.4 18Zm5.5-7q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Zm0-2q.625 0 1.063-.438q.437-.437.437-1.062t-.437-1.062Q12.525 6 11.9 6t-1.062.438Q10.4 6.875 10.4 7.5t.438 1.062Q11.275 9 11.9 9Zm0-1.5ZM12 14Z"/></svg>
              <span>{course.students} students</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-bold text-[#fe5d34]">
                ${course.price}.00
              </span>
              {course.originalPrice && (
                <span className=" ml-2text-sm line-through text-gray-500">
                  ${course.originalPrice}.00
                </span>
              )}
              <PopoverCustomAnimation/>
              {/* <button>
              <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
