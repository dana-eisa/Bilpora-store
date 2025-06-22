const search=document.getElementById('search')
search.addEventListener('click',()=>{
  const input=document.createElement('input')
  input.type='text'
  input.placeholder='search for'
  input.className='search-inp'
search.parentNode.replaceChild(input,search);
  input().focus

})

let cartcount = Number(localStorage.getItem('cartcount')) || 0;
document.getElementById('cart-count').innerText = cartcount;
const buy = document.querySelectorAll('.buy');
buy.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    cartcount++;
    localStorage.setItem('cartcount', cartcount);
    document.getElementById('cart-count').innerText = cartcount;
  });
});
