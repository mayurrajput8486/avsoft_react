import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  //loading
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState("");


  /* Features - search, filter, sort */
  const [search, setSearch] = useState("");
  //to change the data accroding to the selected category
  const [selectedCategory, setSelctedCategory] = useState("");
  //for sorting - high to low and low to high
  const [sortprice, setsortPrice] = useState("");

  const baseUrl = "https://dummyjson.com/products";

  const getProductData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(baseUrl);
      //console.log(response)
      const result = response.data;
      console.log(result.products);
      setProducts(result.products);
    } catch (error) {
      setError("Failed to get products details, check the url once !!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  //to get all categories 
  const uniqueCategories = useMemo(()=>{
    return [...new Set(products.map((prod)=> prod.category))]
  },[products])
  console.log(uniqueCategories)

  //Filter + Sorting
  const filterSortProductsData = useMemo(()=>{
    let prodData = [...products]

    if(selectedCategory){
      prodData.filter((prod)=>prod.category === selectedCategory)
    }
  },[products])
  

  /* bootstrap version spinner - install bootstrap package, import bootstrap file  */
  /* 
    if(loading) {
    return <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
    }
  */

  if (loading) return <h3>Loading....</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mt-3 text-blue-500">
        Product Details
      </h2>
      <div className="mx-5 mb-5 flex gap-2 bg-black p-3 text-white rounded-2xl justify-center">
        {/* For search the products */}
        <input
          type="text"
          placeholder="Enter Item Title"
          className="border-2 p-2 rounded-2xl border-white "
        />

        {/* Filter products on category */}
        <select 
          className="border-2 p-2 rounded-2xl w-50 text-blue-400" 
          value={selectedCategory}
          onChange={(e)=>setSelctedCategory(e.target.value)}>
          <option value="">All</option>
          {uniqueCategories.map((c, index) => {
            return (
              <option key={index} value={c}>
                {c}
              </option>
            );
          })}
        </select>

        {/* Sort data accriding to price */}
        <select className="border-2 p-2 rounded-2xl w-50">
          <option value="">Sort</option>
        </select>
      </div>
      <table className="border-2 table-auto mx-5 text-center">
        <thead className="border-2 ">
          <tr>
            <th className="border-2 px-2 py-2">Product ID</th>
            <th className="border-2 px-2 py-2">Product Image</th>
            <th className="border-2 px-2 py-2">Product Title</th>
            <th className="border-2 px-2 py-2">Category</th>
            <th className="border-2 px-2 py-2">Product Description</th>
            <th className="border-2 px-2 py-2">Price</th>
            <th className="border-2 px-2 py-2">Rating</th>
            <th className="border-2 px-2 py-2">Warrenty</th>
          </tr>
        </thead>
        <tbody>
          {
          filterSortProductsData.map((product) => {
            return (
              <tr key={product.id}>
                <td className="border-2">{product.id}</td>
                <td className="border-2">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    height="150px"
                    loading="lazy"
                  />
                </td>
                <td className="border-2">{product.title}</td>
                <td className="border-2">{product.category}</td>
                <td className="border-2">{product.description}</td>
                <td className="border-2">${product.price}</td>
                <td className="border-2">{product.rating}</td>
                <td className="border-2">{product.warrantyInformation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
