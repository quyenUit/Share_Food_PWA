import React from "react";
import { Link } from "react-router-dom";
import {} from "react-redux";
// import "../../../styles/product-cart.css";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image02, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image02,
        price,
      })
    );
  };

  return (
    // <div className="product__item">
    //   <div className="product__img">
    //     <img src={image01} alt="product_img" className="w-50" />
    //   </div>

    //   <div className="product__content">
    //     <h5>
    //       <Link to={`/foods/${id}`}>{title}</Link>
    //     </h5>
    //     <div className="d-flex align-items-center justify-content-between">
    //       <span className="product__price">${price}</span>
    //       <button className="addTOCart__btn" onClick={addToCart}>
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative bg-slate-50">
      <div className="w-full flex items-center justify-between">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={image02}
          alt="product_img"
          className="w-40 -mt-8 drop-shadow-2xl"
        />
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
        >
          <MdShoppingBasket className="text-white" onClick={addToCart} />
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-end justify-end -mt-8">
        <p className="text-textColor font-semibold text-base md:text-lg">
          <Link to={`/foods/${id}`}>{title}</Link>
        </p>
        <p className="mt-1 text-sm text-gray-500">5km</p>
        <div className="flex items-center gap-8">
          <p className="text-lg text-headingColor font-semibold">
            <span className="text-sm text-red-500">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
