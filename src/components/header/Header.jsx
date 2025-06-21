import React, { useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

import { logo } from "../../assets/index";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { setSearchProducts, setInputSearchVal } from "../../redux/amazonSlice";

const Header = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector(state => state.amazon.products);
  const productsWishlist = useSelector(state => state.amazon.wishlist);
  const inputVal = useSelector(state => state.amazon.inputSearchVal);
  const data = useLoaderData();

  const [showAll, setShowall] = useState(false);
  const [selected, setSelected] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);
  const refInput = useRef();

  if (inputVal === "") {
    dispatch(setSearchProducts(data.data));
  }

  const handleSearch = () => {
    setShowall(false);
    setMobileMenu(false);
    dispatch(setInputSearchVal(refInput.current.value));
    dispatch(
      setSearchProducts(
        data.data.filter(prod =>
          prod.title.toLowerCase().includes(refInput.current.value.toLowerCase())
        )
      )
    );
    refInput.current.value = "";
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setShowall(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-2 py-2 xs:py-3 flex items-center justify-between gap-1 md:gap-2">
        <div className="flex items-center md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white md:p-1">
            <MenuIcon />
          </button>
        </div>

        <Link to="/" className="hidden md:flex" onClick={closeMobileMenu}>
          <div className="headerHover">
            <img className="w-20 sm:w-24 mt-1 sm:mt-2" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="headerHover hidden mdl:inline-flex items-center">
          <LocationOnIcon sx={{ fontSize: "1.4rem" }} />
          <div className="text-xs leading-tight">
            <span className="text-lightText">Delivery to</span>
            <p className="text-xs font-semibold text-whiteText">India</p>
          </div>
        </div>

        <div className="xs:h-8 md:h-10 rounded-md flex relative flex-grow">
          <span
            onClick={() => {
              setShowall(!showAll);
              setMobileMenu(false);
            }}
            className="h-full pl-2 bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md select-none"
          >
            <span className="hidden xs:inline-flex">{selected}</span>
            <ArrowDropDownOutlined />
            {showAll && (
              <ul className="absolute w-56 h-80 top-10 left-0 rounded-lg overflow-auto bg-white border border-amazon_blue text-black p-2 z-50">
                {allItems.map(item => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSelected(item.title);
                      setShowall(false);
                    }}
                    className="text-sm tracking-wide font-titleFont hover:border-b-amazon_blue cursor-pointer border-b border-transparent hover:border-b duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </span>
          <input
            onKeyDown={handleKeyDown}
            ref={refInput}
            placeholder="Search here"
            className="h-full w-full xs:text-xs md:text-base text-amazon_blue outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-8 md:w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-100 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
            onClick={handleSearch}
          >
            <SearchIcon />
          </span>
        </div>

        <Link to="/returns&order" onClick={closeMobileMenu} className="hidden lgl:flex">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-xs text-lightText font-light">Returns</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
          </div>
        </Link>

        <Link to="/wishlist" onClick={closeMobileMenu}>
          <div className="flex items-start justify-center headerHover relative">
            <FavoriteIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText hidden lg:inline-flex">
              Wishlist
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {productsWishlist.length}
              </span>
            </p>
            <span className="absolute text-xs -top-1 left-3 xs:left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center lg:hidden">
              {productsWishlist.length}
            </span>
          </div>
        </Link>

        <Link to="/cart" onClick={closeMobileMenu}>
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText hidden lg:inline-flex">
              Cart
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {productsCart.length}
              </span>
            </p>
            <span className="absolute text-xs -top-1 left-3 xs:left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center lg:hidden">
              {productsCart.length}
            </span>
          </div>
        </Link>
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 md:hidden">
          <div className="bg-amazon_blue h-full w-[70%] max-w-[300px] flex flex-col overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-bold mb-2">Quick Links</h3>
              <ul className="text-gray-200">
                <li className="py-2 hover:text-white transition-colors">
                  <Link to="/returns&order" onClick={closeMobileMenu}>
                    Returns & Orders
                  </Link>
                </li>
                <li className="py-2 hover:text-white transition-colors">
                  <Link to="/wishlist" onClick={closeMobileMenu}>
                    Your Wishlist
                  </Link>
                </li>
                <li className="py-2 hover:text-white transition-colors">
                  <Link to="/cart" onClick={closeMobileMenu}>
                    Your Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-bold mb-2">Shop By Category</h3>
              <ul className="text-gray-200">
                {allItems.slice(1, 8).map(item => (
                  <li key={item.id} className="py-2 hover:text-white transition-colors">
                    <Link to="./coming-soon" onClick={closeMobileMenu}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <HeaderBottom />
    </div>
  );
};

export default Header;
