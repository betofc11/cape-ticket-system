import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const LayoutWrapper = ({ children }) => {

  return (
    <>
      <Navigation />
      <main className="flex flex-1 px-12 py-4 flex-col">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LayoutWrapper;
