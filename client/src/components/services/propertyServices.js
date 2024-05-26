import axios from "axios";
export const getLandlordProperties = async () => {
  const id = localStorage.getItem("userId");
  try {
    const response = await axios.get(
      `http://localhost:4000/api/property/getLandlordProperties/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
