import React, { useState } from "react";

const LandlordPropertyCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/landlord/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Property created successfully");
        setFormData({
          name: "",
          address: "",
        });
      } else {
        console.error("Failed to create property");
      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <div>
      <h2>Add New Property</h2>
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
        <button type="submit">Create Property</button>
      </form>
    </div>
  );
};

export default LandlordPropertyCreation;
