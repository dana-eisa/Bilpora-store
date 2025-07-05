
    document.addEventListener('DOMContentLoaded', () => {
      const cartItemsDiv = document.getElementById('cart-items');
      const totalPriceEl = document.getElementById('total-price');
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      function renderCart() {
        cartItemsDiv.innerHTML = '';

        if (cart.length === 0) {
          cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
          totalPriceEl.textContent = '';
          
          return;
        }
                
        
     
        let totalPrice = 0;

        cart.forEach((item, index) => {
          const itemTotal = item.price * item.quantity;
          totalPrice += itemTotal;
         
          const card = document.createElement('div');
          card.className = 'card mb-3 p-3 cart-item';

          card.innerHTML = `
            <div class="row align-items-center">
  <div class="col-3">
    <img src="${item.img}" alt="${item.name}" class="img-fluid"/>
   </div>
  <div class="col-3">
    <h5>${item.name}</h5>
     <p>Price: ${item.price} NIS</p>
   </div>
   <div class="col-2 quantity-controls">
     <button class="btn btn-secondary btn-sm decrease" data-index="${index}">-</button>
     <span class="mx-2">${item.quantity}</span>
    <button class="btn btn-secondary btn-sm increase" data-index="${index}">+</button>
   </div>
  <div class="col-2">
     <strong>Total: ${itemTotal} NIS</strong>
  </div>
    <div class="col-2">
    <button class="btn btn-primary m-4 remove-btn">remove</button> 
  </div>
  </div>
  `;

          cartItemsDiv.appendChild(card);
    
        });

        totalPriceEl.textContent = `Total Price: ${totalPrice} NIS`;
        
              if (cart.length > 0) {
                    const checkdiv=document.createElement('div')
                    const button=document.createElement('button')
                     button.className="btn btn-primary fst-italic fs-3  hover-effect"
                     button.innerText="checkout"
                      checkdiv.appendChild(button)
                     cartItemsDiv.appendChild(checkdiv)
                       checkdiv.className=('text-center ')
                       button.onclick = function() {
                      location.href = "checkout.html"; 
}

                }
      }

      function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
      }


function removecart(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      Swal.fire("Deleted!", "Item has been removed from your cart.", "success");
    }
  });
}

   
function updateCartCount(){
 const cartcount = document.getElementById('cart-count');
 if (cartcount) {
    let totalcount=0
for ( let i = 0;i<cart.length;i++){
  totalcount += cart[i].quantity 
}
  cartcount.textContent=totalcount
}

}




      cartItemsDiv.addEventListener('click', e => {
        if (e.target.classList.contains('increase')) {
          const index = Number(e.target.dataset.index);
          cart[index].quantity++;
          saveCart();
          renderCart();
        } else if (e.target.classList.contains('decrease')) {
          const index = Number(e.target.dataset.index);
          if (cart[index].quantity > 1) {
            cart[index].quantity--;
          }
         
          
          else {
            cart.splice(index, 1);
          }    
       
          saveCart();
          renderCart();
      
        }
         else if (e.target.classList.contains('remove-btn')) {
          const index = Number(e.target.dataset.index);
             removecart(index);}
      });

      renderCart();
updateCartCount()

    });

