import React from "react";
import Header from "../navbar/landlordNavbar";
import Property from "../landlord/PropertyDetails";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Property />
      </main>
    </div>
  );
};

export default HomePage;
