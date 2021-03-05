function RandomCards(){
    const cards = document.getElementsByClassName("arcanos");
    const random = Math.floor(Math.random() * cards.length);
    console.log(random);
    console.log(cards[random]);
    document.getElementById("imagen").appendChild(cards[random]);
    console.log(document.getElementById("imagen"));
}


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
    modal.classList.toggle("open-modal");
});


const modalBtn1 = document.querySelector(".modal-btn1");
const modal1 = document.querySelector(".modal-overlay1");
const closeBtn1 = document.querySelector(".close-btn1");

modalBtn1.addEventListener("click", function () {
    modal1.classList.toggle("open-modal1");
});
closeBtn1.addEventListener("click", function () {
    modal1.classList.toggle("open-modal1");
});