import React from "react";
import {Outlet,NavLink } from "react-router-dom";
const Youtube = () => {
  return (
    <div>
      <h2 className="text-center mt-3">Welcome to YouTube </h2>
      <div className="text-center mt-3">
        <NavLink to='/youtube/music'>
          <button className="btn btn-dark text-light me-3">Music</button>
        </NavLink>
        <NavLink to='/youtube/technology'>
          <button className="btn btn-dark text-light me-3">Technology</button>
        </NavLink>
        <NavLink to='/youtube/news'>
          <button className="btn btn-dark text-light">News</button>
        </NavLink>
      </div>
      <Outlet/>
    </div>
  );
};

export default Youtube;



