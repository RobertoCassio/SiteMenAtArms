cart();

const cartButton = document.querySelector('.cart-icon');
const cartDrop = document.querySelector('.cart-dropdown');


cartButton.addEventListener("click", ()=>{
    cartDrop.classList.toggle("show");
    console.log(cartButton, cartDrop);
})

function cart(){
    const itemList = document.querySelectorAll(".img-item");
    for (let i = 0; i<itemList.length; i++){
        itemList[i].addEventListener("click",AddProduct)
    }
    console.log (itemList)
}

function AddProduct (event){
    const item = event.target;
    const Info = item.parentElement.parentElement;
    const itemImg = Info.querySelector("img").src;
    const itemName = Info.querySelector(".desc").innerText;
    const itemPrice = Info.querySelector(".price").innerText;

    console.log(itemImg, itemName, itemPrice);
}
