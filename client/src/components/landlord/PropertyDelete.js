import React, { useState, useEffect } from "react";

const LandlordPropertyManagement = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchLandlordProperties();
  }, []);

  const fetchLandlordProperties = async () => {
    try {
      const response = await fetch(
        "/api/landlord/properties",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProperties(data.properties);
      } else {
        console.error("Failed to fetch properties");
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      const response = await fetch(
        `/api/landlord/properties/${propertyId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        console.log("Property deleted successfully");
        fetchLandlordProperties();
      } else {
        console.error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div>
      <h2>Manage Properties</h2>
      {properties.map((property) => (
        <div key={property._id}>
          <h3>{property.name}</h3>
          <p>{property.address}</p>
          <button onClick={() => handleDeleteProperty(property._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default LandlordPropertyManagement;
