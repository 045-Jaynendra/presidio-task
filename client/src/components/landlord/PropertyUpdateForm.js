import React, { useState } from "react";

const LandlordPropertyUpdate = ({ property }) => {
  const [formData, setFormData] = useState({
    name: property.name,
    address: property.address,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/landlord/properties/${property._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Property updated successfully");
      } else {
        console.error("Failed to update property");
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div>
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Property</button>
      </form>
    </div>
  );
};

export default LandlordPropertyUpdate;
