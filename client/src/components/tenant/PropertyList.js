import React from "react";

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Available Properties</h2>
      {properties.length === 0 ? (
        <p>No properties match the selected criteria.</p>
      ) : (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <h3>{property.name}</h3>
              <p>Area: {property.area}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <button onClick={() => console.log(property)}>
                I'm Interested
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertyList;
