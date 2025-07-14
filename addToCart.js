import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

//to get cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
getCartProductFromLS();

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
export const addToCart =(event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    //console.log(quantity, price);
    price = price.replace("₹" , "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id );


    console.log(existingProd);

    if(existingProd && quantity>1){

        quantity = Number(existingProd.quantity) + Number(quantity);
       //console.log(`quantity` , quantity);
       price= Number(price* quantity);
        
       let updatedCart = {id, quantity, price};

       updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
       });

       console.log(updatedCart);

       localStorage.setItem(
            "cartProductLS", 
            JSON.stringify(updatedCart)
        );
        //show toast when pdt added to cart
        showToast("add", id);

    }

 //
    if(existingProd) {
        //alert("already added!");
        return false;
    }

    price= Number(price* quantity);
    quantity = Number(quantity);

    //
    arrLocalStorageProduct.push({ id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


    
    //update cart button value
    updateCartValue(arrLocalStorageProduct);
    //show toast when pdt added to cart
        showToast("add", id);


};