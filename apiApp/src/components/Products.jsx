import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import Pagination from "./Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  //loading
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState("");

  /* Features - search, filter, sort */

  const [search, setSearch] = useState(""); //search product according to title
  const [selectedCategory, setSelctedCategory] = useState(""); //to change the data accroding to the selected category
  const [sortprice, setsortPrice] = useState(""); //for sorting - high to low and low to high

  //Pagination states
  const [currentPage, setCurrentPage] = useState(1) //to change the page number on button click
  const itemPerPage = 5 //total Product - 30 , perPageItem = 5 

  //API Link
  const baseUrl = "https://dummyjson.com/products";

  //Create one function for API Fetching
  const getProductData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(baseUrl);
      //console.log(response)
      const result = response.data;
      //console.log(result.products);
      setProducts(result.products); //Get 30 products data
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
  const uniqueCategories = useMemo(() => {
    return [...new Set(products.map((prod) => prod.category))];
  }, [products]);
  //console.log(uniqueCategories)

  //Filter, search and Sort the products
  const filterSortProductData = useMemo(() => {
    let productData = [...products];

    //search product according to title
    if (search) {
      productData = productData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    //Filter data according to Category
    if (selectedCategory) {
      productData = productData.filter(
        (item) => item.category === selectedCategory,
      );
    }

    //Sort Products according to Price
    //low to high - ascending (a - b)
    if (sortprice === "LowToHigh") {
      productData.sort((a, b) => a.price - b.price);
    }
    //high to low - descending (b - a)
    if (sortprice === "HighToLow") {
      productData.sort((a, b) => b.price - a.price);
    }

    return productData;
  }, [products, search, selectedCategory, sortprice]);

  //Pagination Logic - slice(), Math.ceil()

  const paginatedProductsData = useMemo(()=>{
    const startIndex = (currentPage - 1)*itemPerPage
    //1 page - (0,5)              (1 - 1) * 5 = 0
    //2 page - (5,10)             (2 - 1) * 5 = 5
    //3 page - (10,15)            (3 - 1) * 5 = 10
    //4 page - (15,20)            (4 - 1) * 5 = 15

    const endIndex  =   startIndex + itemPerPage
    //                  currentPage * itemPerPage (1*5 = 5)
    //1 page - (0,5)              0 + 5 = 5
    //2 page - (5,10)             5 + 5 = 10
    //3 page - (10,15)            10 + 5 = 15
    //4 page - (15,20)            

    return filterSortProductData.slice(startIndex,endIndex)
    //      30 [0,29].slice(startIndex,endIndex) - extract products per page
  }, [filterSortProductData, currentPage])

  const totalPages = Math.ceil(filterSortProductData.length / itemPerPage)
  //console.log(totalPage)



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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter products on category */}
        <select
          className="border-2 p-2 rounded-2xl w-50 text-blue-400"
          value={selectedCategory}
          onChange={(e) => setSelctedCategory(e.target.value)}
        >
          <option value="">All</option>
          {uniqueCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        {/* Sort data accriding to price */}
        <select
          className="border-2 p-2 rounded-2xl w-50 text-red-500"
          value={sortprice}
          onChange={(e) => setsortPrice(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="HighToLow">HighToLow</option>
          <option value="LowToHigh">LowToHigh</option>
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
          paginatedProductsData.map((product) => {
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
