var attempt = 0;
    function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Louise Yap" && password === "12345") {
        window.location.href = "OS_home.html";
        return true;
    } else {
        attempt++;
        if (attempt >=6) {
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


function sendEmail() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = 'mailto:louiseann126@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(message + '\n\nFrom: ' + email);

    window.location.href = mailtoLink;
}

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
        
            
            const orderForm = document.createElement('form');
            orderForm.innerHTML = `
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea><br><br>
                <button type="submit">Submit Order</button>
            `;
            orderForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(orderForm);
                const orderData = {};
                formData.forEach((value, key) => {
                    orderData[key] = value;
                });
                console.log('Order placed:', orderData);
                document.getElementById('root').innerHTML = '<h2>Thank you for your order!</h2>';
            });
        
            document.getElementById('root').appendChild(orderForm);            
            const returnToOrderingPage = () => {
                location.reload(); 
            };
            document.getElementById('orderAgainButton').addEventListener('click', returnToOrderingPage);

            const buttonStyle = `
            margin-top: 10px;
    `;
        orderForm.querySelector('button[type="submit"]').style.cssText = buttonStyle;
        orderForm.querySelector('#orderAgainButton').style.cssText = buttonStyle;
        };
        document.getElementById('placeOrderButton').addEventListener('click', placeOrder);
        document.getElementById('orderAgainButton').addEventListener('click', returnToOrderingPage);

        
        const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });
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

        
const add = (productId) => {
    cart.push({ ...product[productId] });
    displayCart();
    document.getElementById("count").innerHTML = cart.length; 
    window.location.href = "cart.html#cartItem";
};

const buynow = document.getElementById('buynow');
buyNowButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before buying.");
    } else {
        alert("Thank you for buying!");
        cart.length = 0;
        displayCart();
        document.getElementById("count").innerHTML = cart.length; 
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const buyNowButton = document.getElementById('buynow');
    buyNowButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before buying.");
        } else {
            alert("Thank you for buying!");
            // Reset cart
            cart.length = 0;
            displayCart();
            document.getElementById("count").innerHTML = cart.length; 
        }
    });
});s