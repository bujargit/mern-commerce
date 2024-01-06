import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container-fluid py-4 bg-black text-white">
      Rea's Store &copy; {currentYear}
    </div>
  );
};

export default Footer;
