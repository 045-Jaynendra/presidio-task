import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div>
      <h2>Filter Properties</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Area:
          <input
            type="text"
            name="area"
            value={filters.area}
            onChange={handleChange}
          />
        </label>
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;
