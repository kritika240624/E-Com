import "./src/style.css";


import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

//console.log(products);

//define a fn. 'showProductContainer' that takes an array of prdts as i/p
showProductContainer(products);
