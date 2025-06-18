const search=document.getElementById('search')
search.addEventListener('click',()=>{
  const input=document.createElement('input')
  input.type='text'
  input.placeholder='search for'
  input.className='search-inp'
search.parentNode.replaceChild(input,search);
  input().focus

})
//its nessery to complete it [hidden input box and make a search]