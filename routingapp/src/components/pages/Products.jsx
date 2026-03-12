import React from "react";
import useProducts from "../../hooks/useProducts";
const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h2>Please wait....</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2 className="text-center mt-3">Products</h2>
      <div className="d-flex gap-3 mx-3 mt-3 row justify-content-center">
        {products.map((item) => {
          return (
            <div key={item.id} className="card" style={{ width: "18rem" }}>
              <img src={item.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center"> Product Id - {item.id}</h5>
                <h5 className="card-title text-center"> {item.title}</h5>
                <p className="card-text text-center fs-5 fw-bold">
                  Price - ${item.price}
                </p>
                <div className="text-center">
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
