let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
let bagData = JSON.parse(localStorage.getItem("bag")) || [];
let tbody = document.querySelector(".right-cont");

createDom(wishlistData);
//dom creation
function createDom(data) {
  tbody.innerHTML = null;
  // console.log(data)
  data.forEach((element, index) => {
    // console.log(element)
    let card = document.createElement("div");
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    let brandname = document.createElement("h3");
    let name = document.createElement("p");
    let price = document.createElement("span");
    let oldprice = document.createElement("span");
    let discount = document.createElement("span");
    let overlay = document.createElement("div");
    let bag = document.createElement("button");

    brandname.innerText = element.brand_name;
    name.innerText = element.name;
    price.innerText = "Rs." + element.price;
    oldprice.innerText = element.oldprice;
    discount.innerText = "(" + element.discount + "%OFF" + ")";
    bag.innerText = "Add to Bag";

    card.setAttribute("class", "card");
    image.setAttribute("src", element.img);
    price.setAttribute("class", "price");
    oldprice.setAttribute("class", "oldprice");
    discount.setAttribute("class", "discount");
    overlay.setAttribute("class", "overlay");
    bag.setAttribute("id", "btn");

    bag.addEventListener("click", () => {
      let isalreadyinbag = false;
      for (let i = 0; i < bagData.length; i++) {
        if (bagData[i].id == element.id) {
          isalreadyinbag = true;
          break;
        }
      }
      if (isalreadyinbag == true) {
        Swal.fire({
          icon: "error",
          title: "Product Already in Bag",
          showConfirmButton: false,
          width: "50%",
          timer: 1000,
        });
      } else {
        bagData.push(element);
        localStorage.setItem("bag", JSON.stringify(bagData));
        Swal.fire({
          icon: "success",
          title: "Product Added in Bag",
          showConfirmButton: false,
          width: "50%",
          timer: 1000,
        });
        wishlistData.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));
        createDom(wishlistData);
      }
    });

    imgDiv.append(image);
    card.append(imgDiv, bag, brandname, name, price, oldprice, discount);
    tbody.append(card);
  });
}
