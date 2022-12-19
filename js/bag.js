let bagData = JSON.parse(localStorage.getItem("bag"));
let tbody = document.querySelector("#tbody");
let itemno = document.querySelector(".noofitem");
let leftCont = document.querySelector(".left-cont");
let wishlistData = JSON.parse(localStorage.getItem("wishlist"));
//dom creation

createDom(bagData);
function createDom(data) {
  tbody.innerHTML = null;
  let sum = 0;
  itemno.textContent = data.length;
  data.forEach((element, index) => {
    let card = document.createElement("div");
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    let brandname = document.createElement("h3");
    let name = document.createElement("p");
    let price = document.createElement("p");
    let oldprice = document.createElement("span");
    let discount = document.createElement("span");
    let contentdiv = document.createElement("div");
    let dlt = document.createElement("button");
    sum += element.price;

    brandname.innerText = element.brand_name;
    name.innerText = element.name;
    price.innerText = "Rs." + element.price;
    oldprice.innerText = element.oldprice;
    discount.innerText = "(" + element.discount + "%OFF" + ")";
    dlt.innerText = "Remove From Bag";

    card.setAttribute("class", "card");
    image.setAttribute("src", element.img);
    price.setAttribute("class", "price");
    oldprice.setAttribute("class", "oldprice");
    discount.setAttribute("class", "discount");
    dlt.setAttribute("id", "remove");

    dlt.addEventListener("click", () => {
      bagData.splice(index, 1);
      localStorage.setItem("bag", JSON.stringify(bagData));
      createDom(bagData);
      Swal.fire({
        icon: "success",
        title: "Product Removed From Bag",
        showConfirmButton: false,
        width: "50%",
        timer: 1000,
      });
    });

    imgDiv.append(image);
    contentdiv.append(brandname, name, price, oldprice, discount, dlt);
    card.append(imgDiv, contentdiv);
    tbody.append(card);
  });
  document.querySelector(".amountotal").innerText = sum;
}
