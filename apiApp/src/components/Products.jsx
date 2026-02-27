import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [details, setdetails] = useState([]);
  //loading
  const [loading, setloading] = useState(false);
  //error
  const [error, seterror] = useState("");

  const baseUrl = "https://dummyjson.com/products";

  const getProductData = async () => {
    setloading(true);
    seterror("");
    try {
      const response = await axios.get(baseUrl);
      //console.log(response)
      const result = response.data;
      console.log(result.products);
      setdetails(result.products);
    } catch (error) {
      seterror("Failed to get products details");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      {loading && <h3>Loading.....</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <h2>Product Details</h2>
      <table
        border="2px"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Image</th>
            <th>Product Titlepr</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Warrenty</th>
          </tr>
        </thead>
        <tbody>
          {details.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.thumbnail} height="150px" loading="lazy" />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.rating}</td>
                <td>{product.warrantyInformation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
