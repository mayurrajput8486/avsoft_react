import { useNavigate, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { products, loading, error } = useProductDetails(id);
  console.log(products);

  if (loading)
    return (
      <h2 className="text-center text-primary mt-3">
        Please wait getting product details....
      </h2>
    );
  if (error) return <h2 className="text-center text-primary mt-3">{error}</h2>;
  if (!products)
    return (
      <h2 className="text-center text-primary mt-3">Product Not Found...</h2>
    );
  return (
    <div>
      <h3 className="text-center mt-3">Product Details</h3>

      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img
          src={products.thumbnail}
          className="card-img-top"
          alt={products.title}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{products.title}</h5>
          <p className="card-text">{products.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rating - {products.rating}</li>
          <li className="list-group-item">
            Warranty Info - {products.warrantyInformation}
          </li>
          <li className="list-group-item">
            Shipping Info - {products.shippingInformation}
          </li>
        </ul>
      </div>
      <div className="text-center">
        <button className="btn btn-warning mt-3" onClick={()=>navigate('/products')}>Back to Product Page</button>
      </div>
    </div>
  );
};

export default ProductDetails;
