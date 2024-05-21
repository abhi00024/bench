import React, {useState } from "react";
import Header from "./dependencies/Header";
import { DUMMY_PRODUCTS } from "./util.js";
import "./index.css";
import CartContextProvider from "./store/ShoppingCart";
import Product from "./dependencies/Product";
import Shop from "./dependencies/Shop"


const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
//   function flattenObject(obj, prefix = '') {
//     let flatObject = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 Object.assign(flatObject, flattenObject(obj[key], `${prefix}${key}.`));
//             } else {
//                 flatObject[`${prefix}${key}`] = obj[key];
//             }
//         }
//     }
//     return flatObject;
// }

// // Example usage:
// const nestedObject = {
//     a: {
//         b: 1,
//         c: {
//             d: 2,
//             e: {
//                 f: 3
//             }
//         }
//     },
//     g: 4
// };

// const flat = flattenObject(nestedObject);
// console.log(flat);

  
  return (
    <>
      <CartContextProvider>
        <Header
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
};

export default ShoppingCart;
