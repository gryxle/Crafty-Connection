var attempt = 0;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Louise Yap" && password === "12345") {
        window.location.href = "OS_home.html";
        return true;
    } else {
        attempt++;
        if (attempt >= 6) {
            alert("Cannot login. Try again later.");
            document.getElementById("loginBtn").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            return false;
        } else {
            alert("Invalid username or password. Attempt " + attempt + " of 5.");
            return false;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;
    const cartCountSpan = document.querySelector('.num-cart');

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountSpan.textContent = cartCount;
        });
    });
});

function sendEmail() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = 'mailto:louiseann126@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(message + '\n\nFrom: ' + email);

    window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function() {
    const productBoxes = document.querySelectorAll(".product-box");
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalProductImage");
    const modalName = document.getElementById("modalProductName");
    const modalPrice = document.getElementById("modalProductPrice");
    const colorSelect = document.getElementById("colorSelect");
    const addToCartModalBtn = document.getElementById("addToCartModalBtn");
    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("totalPrice");
    const buyNowBtn = document.getElementById("buyNowBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    let cartItems = [];

    // Show cart sidebar when cart icon is clicked
    const cartAdd = document.getElementById("cart-add");
    cartAdd.addEventListener("click", function() {
        document.getElementById("sidebarCart").classList.toggle("show-sidebar");
    });

    // Close sidebar
    closeSidebarBtn.addEventListener("click", function() {
        document.getElementById("sidebarCart").classList.remove("show-sidebar");
    });

    productBoxes.forEach((box, index) => {
        const addToCartBtn = box.querySelector(".add-to-cart-btn");
        const productName = box.querySelector(".product-name").innerText;
        const productPrice = parseFloat(box.querySelector(".product-price").innerText.replace("Php ", ""));
        const productImage = box.querySelector("img").src;
        const productColors = [];

        switch (index) {
            case 0: // BALLS
                productColors.push("Volleyball", "Basketball", "Soccer");
                break;
            case 1: // CAT
                productColors.push("Gray", "Orange", "Black");
                break;
            case 4: // DUCK
                productColors.push("Yellow", "White", "Black", "Pink");
                break;
            case 5: // OCTOPUS
                productColors.push("Yellow", "White", "Blue", "Purple", "Green");
                break;
            case 6: // PENGUIN
                productColors.push("Pink", "Blue", "Black", "Blue", "Purple");
                break;
            case 8: // WE BARE BEARS
                productColors.push("Grizzly", "Panda", "Ice Bear");
                break;
            case 9: // WHALE
                productColors.push("Pink", "Blue", "Green", "Black");
                break;
            case 11: // RIBBED
                productColors.push("Pink", "Blue", "Yellow", "Purple");
                break;
            case 12: // ROSE
                productColors.push("Pink", "Blue", "Yellow", "Red");
                break;
            case 14: // TULIP
                productColors.push("Pink", "Blue", "Yellow", "Purple", "Red");
                break;
            case 16: // RIBBED BOUQUET
                productColors.push("Pink", "Blue", "Yellow", "Purple");
                break;
            case 17: // ROSE BOUQUET
                productColors.push("Pink", "Blue", "Yellow", "Red");
                break;
            case 19: // TULIP BOUQUET
                productColors.push("Pink", "Blue", "Yellow", "Purple", "Red");
                break;
        }

        addToCartBtn.addEventListener("click", () => {
            modalImage.src = productImage;
            modalName.innerText = productName;
            modalPrice.innerText = `Php ${productPrice.toFixed(2)}`;
            colorSelect.innerHTML = ""; // Clear previous options

            // Populate color variations
            productColors.forEach(color => {
                const option = document.createElement("option");
                option.value = color;
                option.textContent = color;
                colorSelect.appendChild(option);
            });

            // Handle the "Add to Cart" button in the modal
            addToCartModalBtn.onclick = () => {
                const selectedColor = colorSelect.value;
                const newItem = { name: productName, price: productPrice, color: selectedColor, image: productImage };
                cartItems.push(newItem);
                alert("Added to Cart!");
                updateCart();
                modal.style.display = "none";
            };

            modal.style.display = "block";
        });
    });

    // Update the cart in the sidebar
    function updateCart() {
        cartList.innerHTML = "";
        let totalPriceValue = 0;
        cartItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${item.image}" alt="${item.name}" /> ${item.name} - ${item.color} - Php ${item.price.toFixed(2)}`;
            
            const deleteIcon = document.createElement("span");
            deleteIcon.classList.add("delete-item");
            deleteIcon.innerHTML = "&times;";
            deleteIcon.onclick = function() {
                cartItems.splice(index, 1);
                updateCart();
            };
            
            li.appendChild(deleteIcon);
            cartList.appendChild(li);
            totalPriceValue += item.price;
        });
        totalPrice.innerText = `Php ${totalPriceValue.toFixed(2)}`;
    }

    // Buy Now button click event
    buyNowBtn.addEventListener("click", () => {
        alert("Already Purchased!");
        cartItems = []; // Reset cart items
        updateCart();
        document.getElementById("sidebarCart").classList.remove("show-sidebar"); // Close sidebar
    });

    // Close the modal when the close button is clicked
    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




const product = [
    {
        id: 0,
        image: 'online selling/balls.png',
        title: 'Balls',
        price: 50,
        category: 'Keychain',
    },
    {
        id: 1,
        image: 'online selling/cat.jpg',
        title: 'Cat',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 2,
        image: 'online selling/daisy.jpg',
        title: 'Daisy',
        price: 45,
        category: 'Keychain',
    },
    {
        id: 3,
        image: 'online selling/dragon.jpg',
        title: 'Dragon Head',
        price: 80,
        category: 'Keychain',
    },
    {
        id: 4,
        image: 'online selling/duck.jpg',
        title: 'Duck',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 5,
        image: 'online selling/octopus.jpg',
        title: 'Octopus',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 6,
        image: 'online selling/penguin.jpg',
        title: 'Penguin',
        price: 70,
        category: 'Keychain',
    },
    {
        id: 7,
        image: 'online selling/strawberry.jpg',
        title: 'Strawberry',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 8,
        image: 'online selling/we bare bears.jpg',
        title: 'We Bare Bears',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 9,
        image: 'online selling/whale.jpg',
        title: 'Whale',
        price: 55,
        category: 'Keychain',
    },
    {
        id: 10,
        image: 'online selling/lavender.jpg',
        title: 'Lavender',
        price: 50,
        category: 'Flower',
    },
    {
        id: 11,
        image: 'online selling/ribbed.jpg',
        title: 'Ribbed Tulip',
        price: 80,
        category: 'Flower',
    },
    {
        id: 12,
        image: 'online selling/rose.jpg',
        title: 'Rose',
        price: 90,
        category: 'Flower',
    },
    {
        id: 13,
        image: 'online selling/sunflower.jpg',
        title: 'Sunflower',
        price: 100,
        category: 'Flower',
    },
    {
        id: 14,
        image: 'online selling/tulip.jpg',
        title: 'Tulip',
        price: 60,
        category: 'Flower',
    },
    {
        id: 15,
        image: 'online selling/lavender bouquet.jpg',
        title: 'Lavender Bouquet',
        price: 200,
        category: 'Flower Bouquet',
    },
    {
        id: 16,
        image: 'online selling/ribbed bouquet.jpg',
        title: 'Ribbed Tulip Bouquet',
        price: 280,
        category: 'Flower Bouquet',
    },
    {
        id: 17,
        image: 'online selling/rose bouquet.jpg',
        title: 'Rose Bouquet',
        price: 310,
        category: 'Flower Bouquet',
    },
    {
        id: 18,
        image: 'online selling/sunflower bouquet.jpg',
        title: 'Sunflower Bouquet',
        price: 350,
        category: 'Flower Bouquet',
    },
    {
        id: 19,
        image: 'online selling/tulip bouquet.jpg',
        title: 'Tulip Bouquet',
        price: 220,
        category: 'Flower Bouquet',
    },
];

const cart = [];

const addToCart = (productId) => {
    cart.push({ ...product[productId] });
    displayCart();
    document.getElementById("count").innerHTML = cart.length;
};

const removeCartItem = (index) => {
    cart.splice(index, 1);
    displayCart();
    document.getElementById("count").innerHTML = cart.length;
    console.log("Item removed from cart. New cart count:", cart.length);
};

const displayCart = () => {
    const cartItemDiv = document.getElementById('cartItem');
    cartItemDiv.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItemDiv.textContent = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php 0.00";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class='row-img'>
                    <img class='rowing' src='${item.image}' alt='${item.title}'>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size:15px;'>Php ${item.price}.00</h2>
                <button class='remove-button' onclick='removeCartItem(${index})'>Remove</button>
            `;
            cartItemDiv.appendChild(cartItem);
        });
        document.getElementById("total").innerHTML = "Php " + total.toFixed(2);
    }
};

const rootDiv = document.getElementById('root');
product.forEach((item, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('box');
    productDiv.innerHTML = `
        <div class="img-box">
            <img class="images" src="${item.image}" alt="${item.title}">
        </div>
        <div class="bottom">
            <p>${item.title}</p>
            <h2>Php ${item.price}.00</h2>
            <button onclick="addToCart(${index})">Add to cart</button>
        </div>
    `;
    rootDiv.appendChild(productDiv);
});

const placeOrder = () => {
    document.getElementById('root').innerHTML = '';
    document.getElementById('cartItem').innerHTML = '';
}
        
        const displayItem = (items) => {
            const rootDiv = document.getElementById('root');
            rootDiv.innerHTML = items.map((item, index) => {
                return `
                    <div class="product">
                        <div class="img-box">
                            <img class="images" src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="bottom">
                            <p>${item.title}</p>
                            <h2>Php ${item.price}.00</h2>
                            <button onclick="addToCart(${index})">Add to cart</button>
                        </div>
                    </div>`;
            }).join('');
        };
        
        displayItem(categories);