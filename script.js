// let cart = {};

// // 1. Initialize Menu and Categories
// function initMenu() {
//     const categories = ["MOMOS", "ROLLS", "CHOWMEIN", "RICE", "STARTERS"];
//     const menuSection = document.querySelector('.menu-section');
    
//     // Create Sticky Tabs
//     const filterContainer = document.createElement('div');
//     filterContainer.className = 'category-tabs';
//     filterContainer.innerHTML = categories.map(cat => 
//         `<button onclick="scrollToCat('${cat}')">${cat}</button>`
//     ).join('');
//     menuSection.prepend(filterContainer);

//     // Build Menu Items
//     document.querySelectorAll('.menu-item').forEach(item => {
//         const name = item.dataset.name;
//         if (item.classList.contains('single')) {
//             item.innerHTML = `
//                 <span class="item-name">${name}</span>
//                 <div class="size-row">
//                     <span>Qty - ₹${item.dataset.price}</span>
//                     <div class="item-controls">
//                         <button class="control-btn" onclick="updateSingle(this, -1)">−</button>
//                         <span class="quantity">0</span>
//                         <button class="control-btn" onclick="updateSingle(this, 1)">+</button>
//                     </div>
//                 </div>`;
//         } else {
//             item.innerHTML = `
//                 <span class="item-name">${name}</span>
//                 <div class="size-row">
//                     <span>Half (H) - ₹${item.dataset.priceH}</span>
//                     <div class="item-controls">
//                         <button class="control-btn" onclick="updateCart(this, 'H', -1)">−</button>
//                         <span class="quantity" data-size="H">0</span>
//                         <button class="control-btn" onclick="updateCart(this, 'H', 1)">+</button>
//                     </div>
//                 </div>
//                 <div class="size-row">
//                     <span>Full (F) - ₹${item.dataset.priceF}</span>
//                     <div class="item-controls">
//                         <button class="control-btn" onclick="updateCart(this, 'F', -1)">−</button>
//                         <span class="quantity" data-size="F">0</span>
//                         <button class="control-btn" onclick="updateCart(this, 'F', 1)">+</button>
//                     </div>
//                 </div>`;
//         }
//     });
// }

// function scrollToCat(id) {
//     const cards = document.querySelectorAll('.menu-card');
//     cards.forEach(card => {
//         if(card.querySelector('h3').innerText.includes(id)) {
//             card.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     });
// }

// // 2. Core Logic (H/F Support)
// function updateCart(btn, size, change) {
//     const item = btn.closest('.menu-item');
//     const name = item.dataset.name;
//     const price = size === 'H' ? item.dataset.priceH : item.dataset.priceF;
//     const qtyEl = item.querySelector(`[data-size="${size}"]`);
//     let qty = Math.max(0, parseInt(qtyEl.textContent) + change);
//     qtyEl.textContent = qty;

//     const key = `${name} (${size})`;
//     if (qty === 0) delete cart[key];
//     else cart[key] = { name, size, qty, price: parseInt(price) };
//     renderCart();
// }

// function updateSingle(btn, change) {
//     const item = btn.closest('.menu-item');
//     const name = item.dataset.name;
//     const price = item.dataset.price;
//     const qtyEl = item.querySelector('.quantity');
//     let qty = Math.max(0, parseInt(qtyEl.textContent) + change);
//     qtyEl.textContent = qty;

//     if (qty === 0) delete cart[name];
//     else cart[name] = { name, size: null, qty, price: parseInt(price) };
//     renderCart();
// }

// function renderCart() {
//     const cartBox = document.getElementById('cartFloat');
//     const items = Object.values(cart);
//     const totalQty = items.reduce((s, i) => s + i.qty, 0);
//     const totalPrice = items.reduce((s, i) => s + (i.qty * i.price), 0);

//     if (totalQty > 0) {
//         cartBox.classList.add('show');
//         document.getElementById('cartCount').textContent = `${totalQty} items`;
//         document.getElementById('cartTotal').textContent = `₹${totalPrice}`;
//         document.getElementById('cartItems').innerHTML = items.map(i => `
//             <div class="cart-line" style="display:flex; justify-content:space-between;">
//                 <span>${i.name} ${i.size ? '('+i.size+')' : ''}</span>
//                 <span>x${i.qty}</span>
//             </div>
//         `).join('');
//     } else {
//         cartBox.classList.remove('show');
//     }
// }

// // 3. Time Gate & WhatsApp (Quantity Only)
// function checkout() {
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMin = now.getMinutes();
//     const totalMins = (currentHour * 60) + currentMin;

//     const openTime = (15 * 60) + 30; // 3:30 PM
//     const closeTime = (22 * 60);     // 10:00 PM

//     if (totalMins < openTime || totalMins > closeTime) {
//         alert("🐼 We're currently closed!\n\nPanda Food Junction serves hot food between 3:30 PM and 10:00 PM. Please visit us then!");
//         return;
//     }

//     let msg = "Hello I want to order this Items:%0A%0A";
//     Object.values(cart).forEach(i => {
//         msg += `• ${i.name} ${i.size ? '('+i.size+')' : ''} x ${i.qty}%0A`;
//     });

//     window.open(`https://wa.me/919693146705?text=${msg}`, '_blank');
// }

// function makeCall() { window.location.href = "tel:+919693146705"; }

// window.onload = initMenu;
