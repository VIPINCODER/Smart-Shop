const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img")

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var cardNumber = document.getElementById("cardNumber").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    var amount = document.getElementById("amount").value;

    alert("Payment Successful!\nAmount: $" + amount);
    document.getElementById("paymentForm").reset();
});