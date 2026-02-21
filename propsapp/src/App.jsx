import Users from "./components/Users";
import "./App.css";
import Foods from "./components/Foods";
import ProductsDetails from './components/ProductsDetails'
import products from './dbdata/products'

const App = () => {

  const order1 = {
    mainCourse : 'Paneer Maratha',
    bread : 'Butter Naan',
    deserts : 'Rasgulla'
  }

  const price = [350, 120, 80]

  function getMyOrder () {
    alert('Your order ready in 5 min')
  }
  
  return (
    <div>
      <h1 className="h1">My Products Details</h1>
      {/* Mounting Phase */}
     {/*  <div className="usercard">
        <Users
          fullName="Virat Kohli"
          age={36}
          role="React Developer"
          client="XYZ Pvt.Ltd"
          isPresent = {true}
        />

        <Users
          fullName="Rohit Sharma"
          age={38}
          role="Fullstack Dev"
          client="ABC Pvt.Ltd"
          isPresent = {false}
        />

        <Users
          fullName="Hardik Pandya"
          age={30}
          role="Fullstack Dev"
          client="SQL Pvt.Ltd"
          isPresent = {true}
        />

        <Users
          fullName="Kuldeep Yadav"
          age={28}
          role="Backend Dev"
          client="SQL Pvt.Ltd"
          isPresent = {false}
        />
      </div>
      <Foods myOrder={getMyOrder} foodOrder={order1} item_price={price} />
       */}

      <ProductsDetails productData={products}/>
    </div>
  );
};

export default App;
