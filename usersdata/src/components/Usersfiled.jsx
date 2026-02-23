import React from "react";
import { useState } from "react";
const Usersfiled = () => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <div className="bg-dark w-50 p-4 mx-auto rounded-3 mt-4">
      <form>
        <input
          type="text"
          placeholder="Enter User Full Name"
          className="form-control mb-3"
        />
        <input
          type="email"
          placeholder="Enter Valid Email"
          className="form-control mb-3"
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
        />
        <div className="d-flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Valid Password"
            className="form-control mb-3 me-3"
          />
          <span className="text-light fs-3" onClick={()=>setshowPassword(!showPassword)}>
            {
                showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
            }
          
          </span>
        </div>

        <div className="text-center">
          <button className="btn btn-success me-3" type="submit">
            Register
          </button>
          <button type="reset" className="btn btn-warning">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Usersfiled;
