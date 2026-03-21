import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div>
      <nav className="relative bg-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-4">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                  <NavLink
                    to="/"
                    className="text-xl rounded-md px-3 py-2 font-medium text-orange-400 hover:bg-white/5 hover:text-white"
                  >
                    ShopEasy
                  </NavLink>
                  <NavLink
                    to="/"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to="/checkout"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Checkout
                  </NavLink>

                  <div className="flex items-center gap-6">
                    {/* TOTAL PRICE */}
                    <span className="text-sky-400 font-semibold text-lg">
                      ₹ {totalAmount.toFixed(2)}
                    </span>

                    {/* CART ICON */}
                    <NavLink
                      to="/cart"
                      className="relative text-xl text-gray-300 hover:text-white"
                    >
                      🛒
                      {totalQty > 0 && (
                        <span className="absolute -top-2 -right-2 bg-yellow-300 text-black rounded-full px-2 text-xs font-bold">
                          {totalQty}
                        </span>
                      )}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
