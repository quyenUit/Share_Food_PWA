import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
// import NotFound from "../../../assets/img/NotFound.svg";
// import { useStateValue } from "../../Context/StateProvider";
// import { actionType } from "../../Context/reducer";
import Img01 from "../../../assets/img/c1.png";
// import Img02 from "../../../assets/img/c2.png";
// import Img03 from "../../../assets/img/c3.png";
// import Img04 from "../../../assets/img/c4.png";
// import Img05 from "../../../assets/img/c6.png";
import React, { useEffect, useRef, useState } from "react";
// import { Category } from "@mui/icons-material";

const categoryData = [
  { display: "Sườn heo ram mặn", imgUrl: Img01 },
  { display: "Sườn heo ram mặn", imgUrl: Img01 },
  { display: "Sườn heo ram mặn", imgUrl: Img01 },
  { display: "Sườn heo ram mặn", imgUrl: Img01 },
  { display: "Sườn heo ram mặn", imgUrl: Img01 },

  //   { display: "Cơm tấm", imgUrl: Img02 },
  //   { display: "Phở Hà Nội", imgUrl: Img03 },
  //   { display: "Bún than Hà Nội", imgUrl: Img04 },
  //   { display: "Bún măn vịt", imgUrl: Img05 },
  //   { display: "Bún than Hà Nội", imgUrl: Img01 },
  //   { display: "Bún măn vịt", imgUrl: Img03 },
];

const RowContainer = ({ flag, data, scrollValue }) => {
  // const rowContainer = useRef();

  // const [items, setItems] = useState([]);

  // const [{ cartItems }, dispatch] = useStateValue();

  // const addtocart = () => {
  //   dispatch({
  //     type: actionType.SET_CARTITEMS,
  //     cartItems: items,
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(items));
  // };

  // useEffect(() => {
  //   rowContainer.current.scrollLeft += scrollValue;
  // }, [scrollValue]);

  // useEffect(() => {
  //   addtocart();
  // }, [items]);

  // console.log(data);
  return (
    <div
      // ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hiden flex-wrap justify-center"
      }`}
    >
      {categoryData.map((item, index) => (
        <div className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative bg-slate-50">
          <div className="w-full flex items-center justify-between">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={item.imgUrl}
              alt=""
              className="w-40 -mt-8 drop-shadow-2xl"
            />
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
            >
              <MdShoppingBasket className="text-white" />
            </motion.div>
          </div>

          <div className="w-full flex flex-col items-end justify-end -mt-8">
            <p className="text-textColor font-semibold text-base md:text-lg">
              {item?.display}
            </p>
            <p className="mt-1 text-sm text-gray-500">5km</p>
            <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$40.000vnd</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowContainer;
