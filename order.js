let orderadd = document.querySelector(".orderadd");
let canelorder = document.querySelector(".canelorder");

canelorder.addEventListener('click', () => {
    orderadd.innerHTML = "Your order has been Cancel"
    canelorder.style.display = 'none'
})