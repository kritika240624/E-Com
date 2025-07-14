export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    //set txt content of toast based on oprtn
    if(operation === "add") {
        toast.textContent = `Product with ID ${id} has been added.`;
    } else{
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);

    //automatically remove toast after a few sec
    setTimeout(() => {
        toast.remove();
    }, 2000);
}