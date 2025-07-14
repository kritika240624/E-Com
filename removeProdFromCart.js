import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd !== id);

    //update the local storage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);

    if(removeDiv){
        removeDiv.remove();

        //show toast when pdt added to cart
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
};