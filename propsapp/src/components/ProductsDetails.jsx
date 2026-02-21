const ProductsDetails = ({ productData }) => {
  return (
    <div>
      {productData.map((prod,index) => {
        return (
          <div
            /* key={index} */ // never use 
            key={prod.id}
            style={{
              border: "1px solid",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              boxShadow: "2px 2px black",
              textAlign: "justify",
              display : 'flex'
            }}
          >
            <div>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                width="200px"
                loading="lazy"
              />
            </div>
            <div>
                <p>Product Name - {prod.id} : <b>{prod.title}</b> </p>
                <p>Description - {prod.description}</p>
                <p>Price - ${prod.price}</p>
                <p>Rating - ⭐{prod.rating}</p>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default ProductsDetails;
