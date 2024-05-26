import React, { useState } from "react";

const TenantPropertyDetails = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>{property.name}</h3>
      <p>{property.address}</p>
      <button onClick={handleShowDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p>Property Details:</p>
          <p>Number of Bedrooms: {property.bedrooms}</p>
          <p>Number of Bathrooms: {property.bathrooms}</p>
          <p>
            Landlord Contact: {property.landlord.name} -{" "}
            {property.landlord.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default TenantPropertyDetails;
