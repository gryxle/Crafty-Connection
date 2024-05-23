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
    const VariationSelect = document.getElementById("VariationSelect");
    const addToCartModalBtn = document.getElementById("addToCartModalBtn");
    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("totalPrice");
    const buyNowBtn = document.getElementById("buyNowBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const customerInfoModal = document.getElementById("customerInfoModal");
    const closeCustomerInfoModal = document.getElementById("closeCustomerInfoModal");
    const customerInfoForm = document.getElementById("customerInfoForm");
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
        const productVariations = [];

        switch (index) {
            case 0: // BALLS
                productVariations.push("Volleyball", "Basketball", "Soccer");
                break;
            case 1: // CAT
                productVariations.push("Gray", "Orange", "Black");
                break;
            case 1: // DRAGON HEAD
                productVariations.push("Night Fury (Toothless)", "Light Fury");
                break;
            case 4: // DUCK
                productVariations.push("Yellow", "White", "Black", "Pink");
                break;
            case 5: // OCTOPUS
                productVariations.push("Yellow", "White", "Blue", "Purple", "Green");
                break;
            case 6: // PENGUIN
                productVariations.push("Pink", "Blue", "Black", "Blue", "Purple");
                break;
            case 8: // WE BARE BEARS
                productVariations.push("Grizzly", "Panda", "Ice Bear");
                break;
            case 9: // WHALE
                productVariations.push("Pink", "Blue", "Green", "Black");
                break;
            case 11: // RIBBED
                productVariations.push("Pink", "Blue", "Yellow", "Purple");
                break;
            case 12: // ROSE
                productVariations.push("Pink", "Blue", "Yellow", "Red");
                break;
            case 14: // TULIP
                productVariations.push("Pink", "Blue", "Yellow", "Purple", "Red");
                break;
            case 16: // RIBBED BOUQUET
                productVariations.push("Pink", "Blue", "Yellow", "Purple");
                break;
            case 17: // ROSE BOUQUET
                productVariations.push("Pink", "Blue", "Yellow", "Red");
                break;
            case 19: // TULIP BOUQUET
                productVariations.push("Pink", "Blue", "Yellow", "Purple", "Red");
                break;
            default:
                break;
        }

        addToCartBtn.addEventListener("click", () => {
            modalImage.src = productImage;
            modalName.innerText = productName;
            modalPrice.innerText = `Php ${productPrice.toFixed(2)}`;
            VariationSelect.innerHTML = ""; // Clear previous options

            // Populate variations
            productVariations.forEach(variation => {
                const option = document.createElement("option");
                option.value = variation;
                option.textContent = variation;
                VariationSelect.appendChild(option);
            });

            // Handle the "Add to Cart" button in the modal
            addToCartModalBtn.onclick = () => {
                const selectedVariation = VariationSelect.value;
                const newItem = { name: productName, price: productPrice, variation: selectedVariation, image: productImage };
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
            li.innerHTML = `<img src="${item.image}" alt="${item.name}" /> ${item.name} - ${item.variation} - Php ${item.price.toFixed(2)}`;
            
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
        if (cartItems.length === 0) {
            alert("No product found. Add item first.");
            return;
        }
        customerInfoModal.style.display = "block";
        document.getElementById("sidebarCart").classList.remove("show-sidebar");
    });

    // Submit customer info
    customerInfoForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to the server
        const name = document.getElementById("customerName").value;
        const address = document.getElementById("customerAddress").value;
        const phone = document.getElementById("customerPhone").value;
        const email = document.getElementById("customerEmail").value;

        if (!name || !address || !phone || !email) {
            alert("All fields are required.");
            return;
        }

        alert(`Order placed. Thanks for purchasing!\n\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}`);
        cartItems = []; // Reset cart items
        updateCart();
        customerInfoModal.style.display = "none";
    });

    // Close the customer info modal
    closeCustomerInfoModal.addEventListener("click", () => {
        customerInfoModal.style.display = "none";
    });

    // Close the product modal when the close button is clicked
    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == customerInfoModal) {
            customerInfoModal.style.display = "none";
        }
        if (!event.target.closest('#sidebarCart') && !event.target.closest('#cart-add')) {
            document.getElementById("sidebarCart").classList.remove("show-sidebar");
        }
    });
});
