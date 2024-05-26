import React, { useState, useEffect } from "react";
import { getLandlordProperties } from "../services/propertyServices";

const LandlordProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getLandlordProperties();
        setProperties(response);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>My Properties</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property._id} className="property-card">
            <h3>{property.address}</h3>
            <p>City: {property.city}</p>
            <p>Area: {property.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandlordProperties;
