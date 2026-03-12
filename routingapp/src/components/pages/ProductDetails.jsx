import React from "react";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
const ProductDetails = () => {

  const { id } = useParams();
  const { products, loading, error } = useProducts();

  //logic to find specific product data on the basis of product id

  const product = products.find((x) => x.id === id);
  console.log(product)

  if (loading) return <h2>Please wait....</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h3 className="text-center mt-3">Product Details</h3>

      <div className="card" style={{width : '18rem'}}>
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
