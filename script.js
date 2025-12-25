const productsData=[
 {id:1,name:'Laptop Gaming ASUS',price:25990000,cat:'laptop'},
 {id:2,name:'PC Gaming RTX 4060',price:18490000,cat:'pc'},
 {id:3,name:'Màn hình 27 inch 165Hz',price:4590000,cat:'monitor'}
];

const productsEl=document.getElementById('products');
let cart=JSON.parse(localStorage.getItem('cart'))||[];

function render(list){
 productsEl.innerHTML='';
 list.forEach(p=>{
  productsEl.innerHTML+=`
  <div class="product">
   <img src="https://via.placeholder.com/300x200">
   <h4>${p.name}</h4>
   <div class="price">${p.price.toLocaleString()}₫</div>
   <button onclick="addCart(${p.id})">Mua</button>
  </div>`;
 });
}
render(productsData);

function filter(cat){
 render(cat==='all'?productsData:productsData.filter(p=>p.cat===cat));
}

search.oninput=()=>{
 render(productsData.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase())));
};

function addCart(id){
 cart.push(productsData.find(p=>p.id===id));
 localStorage.setItem('cart',JSON.stringify(cart));
 updateCart();
}

function updateCart(){
 cartCount.innerText=cart.length;
}
updateCart();

function openCart(){
 cartModal.style.display='block';
 cartItems.innerHTML='';
 let total=0;
 cart.forEach(c=>{
  total+=c.price;
  cartItems.innerHTML+=`${c.name}<br>`;
 });
 totalEl.innerText=total.toLocaleString()+'₫';
}
function closeCart(){cartModal.style.display='none'}

const banners=['🔥 Sale','💻 Laptop tốt','🎮 PC mạnh'];
let i=0;
setInterval(()=>banner.innerText=banners[i++%banners.length],3000);
