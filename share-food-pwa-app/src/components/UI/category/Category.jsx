import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import React, { useState } from "react";

// import { Container, Row, Col } from "reactstrap";

// import categoryImg01 from "../../../assets/images/category-01.png";
// import categoryImg02 from "../../../assets/images/category-02.png";
// import categoryImg03 from "../../../assets/images/category-03.png";
// import categoryImg04 from "../../../assets/images/category-04.png";
// import "../../../styles/category.css";

// const categoryData = [
//   { display: "Fastfood", imgUrl: categoryImg01 },
//   { display: "Pizza", imgUrl: categoryImg02 },
//   { display: "Asian Food", imgUrl: categoryImg03 },
//   { display: "Row Meat", imgUrl: categoryImg04 },
// ];
const Category = () => {
  // const [filter, setFilter] = useState("chicken");
  // const [{ foodItems }, dispatch] = useStateValue();
  return (
    // <Container>
    //   <Row>
    //     {categoryData.map((item, index) => (
    //       <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
    //         <div className="category__item d-flex align-items-center gap-3">
    //           <div className="category__img">
    //             <img src={item.imgUrl} alt="category__item" />
    //           </div>
    //           <h6>{item.display}</h6>
    //         </div>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    <section className="w-full my-6">
      <div className="w-full flex items-center justify-between">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative
        before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
        before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
        >
          Recommented
        </p>
        <div className="hidden md:flex gap-3 items-center">
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
      <div className="w-full items-center">
        <RowContainer
          flag={true}
          // data={foodItems?.filter((n) => n.catagory == filter)}
        />
      </div>
    </section>
  );
};

export default Category;
