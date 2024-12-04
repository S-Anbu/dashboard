import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 text-center mt-5">
      <div className="container flex items-center justify-around">
        <p className="text-sm">
          &copy; 2024 - Company name. Designed by Hammad Noor. All rights
          reserved
        </p>
        <div className="">
          <a href="#" className="text-sm hover:text-blue-500">
            FAQs
          </a>
          <span className="mx-4">|</span>
          <a href="#" className="text-sm hover:text-blue-500">
            Privacy Policy
          </a>
          <span className="mx-4">|</span>
          <a href="#" className="text-sm hover:text-blue-500">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
