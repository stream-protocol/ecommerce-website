
const buttons=document.querySelectorAll('.button-light');
const indicator = document.querySelector(".indicator");
const homeImg=document.querySelector('.home__img');
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const carticon=document.querySelector('.nav__shop');
const cart=document.querySelector('.cart-wrp');
const cartContent=document.querySelector('.cart-content');
let amountValue = 0;
let currentImg=1;

function openCart()
{
    cart.classList.toggle('invisible');
}

buttons.forEach(b => b.addEventListener('click',() =>{
    console.log('hi')
    amountValue++;
    if (amountValue > 0) {
        const total = 149.99 * amountValue;
        cartContent.classList.remove("empty");
        cartContent.innerHTML = `<div class="product">
                           <h1>Items added</h1>
                    <div>
                    <img src="/img/imghome.png" class="product-img" alt="product">
                       <div class="product-info">
                       <p class="product-title">Yeezy Sply - 350</p>
                       <p><span>$149.00</span> × <span class="number">${amountValue}</span> <b>  $${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="/img/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="button-light">Checkout</button>
                  </div>`;
                }
    indicator.style.display="initial";
    indicator.innerText=amountValue;
}))
function deleteItem() {
    cartContent.classList.add("empty");
    cartContent.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}
function nextImage() {
    if (currentImg == 3) {
        currentImg = 1;
        homeImg.src = `/img/imghome.png`;
    } else {
        currentImg++;
        homeImg.src = `/img/featured${currentImg}.png`;
    }
   
}



indicator.style.display = "none";

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    console.log(toggle);
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu ('nav-toggle', 'nav-menu');
//remove menu
const navlink=document.querySelectorAll('.nav__link');
const menu=document.getElementById('nav-menu')
function link()
{
    menu.classList.remove('show');

}
navlink.forEach(n =>n.addEventListener('click', link));
window.onscroll=()=>{
    const nav=document.getElementById('header');
    if(scrollY>=200)
    {
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header');
        }
}
nextBtn.addEventListener("click", nextImage);
carticon.addEventListener('click' , openCart);
