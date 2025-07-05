document.addEventListener( "DOMContentLoaded",()=>{
const cartcount=document.getElementById('cart-count')
const addtocart=document.querySelectorAll('.btncollection')
let cart=JSON.parse(localStorage.getItem('cart')) ||[]
function saveitem()
{
  localStorage.setItem('cart',JSON.stringify(cart))
}
function updatingcount (){
let totalcount=0
for(let i=0;i<cart.length;i++){
  totalcount+=cart[i].quantity
  cartcount.innerText=totalcount
}

}

addtocart.forEach(btn => {
    btn.addEventListener('click', e =>{
    e.preventDefault()
     const cardBody = btn.closest('.card-body');
    if (!cardBody) return;
 const name=cardBody.querySelector('.card-title')?.innerText.trim()
 const pricetext=cardBody.querySelector('.card-text')?.innerText.trim() ||'';
 const price=parseInt(pricetext)||0
 const imgElement=btn.closest('.card').querySelector('.imgcollection')
 const imgsrc = imgElement ? imgElement.src : '';
 if(!name||!price||!imgsrc){
  alert('Item Cannot Found')
  return
 }
const existitem=cart.find(item => item.name===name)
if(existitem)
  existitem.quantity++
else
cart.push({name,price,quantity:1,img:imgsrc})
updatingcount();
saveitem()
})
 });
updatingcount();
saveitem()
   

} )
window.addEventListener('load', function () {
  setTimeout(() => {
    let loading1 = document.getElementById('loading');
    if (loading1) {
      loading1.style.display = 'none';
      let content = document.getElementById('main-content');
      if (content) content.style.display = 'block';
    }
  }, 500);



});

  const toggler = document.querySelector('.navbar-toggler');
  const collapse = document.getElementById('navbarSupportedContent');
  const notifIcon = document.getElementById('notifBell');
  const cartIcon = document.getElementById('cart-icon');

  toggler.addEventListener('click', () => {
    const isShown = collapse.classList.contains('show');

    if (!isShown) {

      notifIcon.style.display = 'none';
      cartIcon.style.display = 'none';
    } else {
    
      notifIcon.style.display = 'inline-block';
      cartIcon.style.display = 'inline-block';
    }
  });
  collapse.addEventListener('hidden.bs.collapse', () => {
    notifIcon.style.display = 'inline-block';
    cartIcon.style.display = 'inline-block';
  });



