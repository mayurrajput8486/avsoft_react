import React from "react";
import { useState } from "react";
const Usersfiled = ({ addUser }) => {
  //This is hook is used to manage the input field of form
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  //To manage the password (hide and show)
  const [showPassword, setshowPassword] = useState(false);

  //Create a function for manage the state of input fields

  const inputChangeHandle = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  /* 
    const handleFullName = (e) =>{
        setformData({...formData, name : e.target.value})
    }

    const handleEmail = (e) =>{
        setformData({...formData, name : e.target.value})
    }
    
    const handleUsername = (e) =>{
        setformData({...formData, name : e.target.value})
    }

    const handlePassword = (e) =>{
        setformData({...formData, name : e.target.value})
    }
*/

  const submitUsersData = (e) => {
    //to stop page reload
    e.preventDefault();
    addUser(formData);

    setformData({
      fullName: "",
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="bg-dark w-50 p-4 mx-auto rounded-3 mt-4">
      <form onSubmit={submitUsersData}>
        <input
          type="text"
          placeholder="Enter User Full Name"
          className="form-control mb-3"
          name="fullName"
          value={formData.fullName}
          onChange={inputChangeHandle}
        />
        <input
          type="email"
          placeholder="Enter Valid Email"
          className="form-control mb-3"
          name="email"
          value={formData.email}
          onChange={inputChangeHandle}
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
          name="username"
          value={formData.username}
          onChange={inputChangeHandle}
        />
        {/*  <div className="d-flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Valid Password"
            className="form-control mb-3 me-3"
            name="password"
            value={formData.password}
            onChange={inputChangeHandle}
          />
          <span className="text-light fs-3" onClick={()=>setshowPassword(!showPassword)}>
            {
                showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
            }
          
          </span>
        </div> */}

        <div className="position-relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Valid Password"
            className="form-control mb-3 me-3"
            name="password"
            value={formData.password}
            onChange={inputChangeHandle}
          />
          {
          formData.password.length > 0 && (
            <i
              className={`
                        ${showPassword ? "bi bi-eye-slash" : "bi bi-eye"} position-absolute top-0 end-0 p-2
                    `}
              onClick={() => setshowPassword(!showPassword)}
            ></i>
          )}
        </div>

        <div className="text-center">
          <button className="btn btn-success">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Usersfiled;
