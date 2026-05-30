let items = [
{
    id:0,
    name: "HeadPhone",
    pic:"headphone1",
    price: 2000,
    brand: "Sony",
    qty:0
},
{
    id:1,
    name: "HeadPhone",
    pic:"headphone2",
    price: 1000,
    brand: "Boat",
    qty:0
},
{
    id:2,
    name: "HeadPhone",
    pic:"headphone3",
    price: 3500,
    brand: "JBL",
    qty:0
},
{
    id:3,
    name: "HeadPhone",
    pic:"headphone4",
    price: 2000,
    brand: "Skullcandy",
    qty:0
},
{
    id:4,
    name: "HeadPhone",
    pic:"headphone5",
    price: 999,
    brand: "Noise",
    qty:0
},
{
    id:5,
    name: "HeadPhone",
    pic:"headphone6",
    price: 800,
    brand: "Infinix",
    qty:0
},
{
    id:6,
    name: "HeadPhone",
    pic:"headphone7",
    price: 899,
    brand: "Portronics",
    qty:0
},
{
    id:7,
    name: "HeadPhone",
    pic:"headphone8",
    price: 800,
    brand: "Zebronics",
    qty:0
},
{
    id:8,
    name: "HeadPhone",
    pic:"headphone9",
    price: 1000,
    brand: "Mivi",
    qty:0
},
{
    id:9,
    name: "HeadPhone",
    pic:"headphone10",
    price: 899,
    brand: "Realme",
    qty:0
},
{
    id:10,
    name: "HeadPhone",
    pic:"headphone11",
    price: 3300,
    brand: "Bose",
    qty:0
},
{
    id:11,
    name: "HeadPhone",
    pic:"headphone12",
    price: 999,
    brand: "pTron",
    qty:0
},
{
    id:12,
    name: "HeadPhone",
    pic:"headphone13",
    price: 4000,
    brand: "Ant Esports",
    qty:0
},
{
    id:13,
    name: "HeadPhone",
    pic:"headphone14",
    price: 2500,
    brand: "Cosmic Byte",
    qty:0
},
];

let shopContainer = document.querySelector(".productContainer"),
cartBox = document.querySelector(".cartBox"),
cartProductsContainer = document.querySelector(".cartProductsContainer"),
totalCost = document.querySelector("#totalCost"),
Cartnum = document.querySelector(".Cartnum");

items.forEach((data,key)=>{
    shopContainer.innerHTML += `
    <div class="productBox">
                <img src='./${data.pic}.png' alt="headphone" />
                <div class="priceBox">
                    <h1> ${data.brand} </h1>
                </div>
                <button onclick="addToCart(${key})"> Add To Cart </button>
                <span class="tag"> RS. ${data.price}  </span>
            </div>
    ` 
});

function showCart(){
    cartBox.style = "right:0px";
};
function hideCart(){
    cartBox.style = "right:-100%";
};

//Store items to cart
let storeProducts = [];

function addToCart(id){     
    if(storeProducts[id]==null){
        storeProducts[id] = items[id];
        storeProducts[id].qty +=1;
    } else if(storeProducts[id].qty>=1){
        storeProducts[id].qty +=1;
    };

    cartProductReload()
}

function cartProductReload(){
    let count = 0;
    let totalCount = 0;

    cartProductsContainer.innerHTML = "";
    storeProducts.forEach((cartData, cKey)=>{
        
        count += cartData.qty;  //cartIcon number 
        totalCount += cartData.price * cartData.qty;

        cartProductsContainer.innerHTML += `
        <div class="productDetails">
                    <img src="./${cartData.pic}.png" alt="headphone" />
                    <div class="qty">
                        <button onclick="changeQty(${cKey}, ${cartData.qty+1})"> + </button>
                        <h3> ${cartData.qty} </h3>
                        <button onclick="changeQty(${cKey}, ${cartData.qty-1})"> - </button>
                    </div>
                    <div class="proInfo">
                        <h2> ${cartData.brand} </h2>
                        <h3> RS.${cartData.price} </h3> 
                    </div> 
            </div>
        `
    });
 
    totalCost.innerHTML = totalCount;
    if(count == 0) {
        Cartnum.style = "opacity:0";
    } else {
        Cartnum.style = "opacity:1";
    }
   
    Cartnum.innerHTML = count;
}

function changeQty(key, qt){
    if(qt==0){
        delete storeProducts[key];
    } else {
        storeProducts[key].qty = qt;
    }
    cartProductReload()
}
