//Random cards//
function RandomCards(){
    const cards = document.getElementsByClassName("arcanos");
    const random = Math.floor(Math.random() * cards.length);
    console.log(random);
    console.log(cards[random]);
    document.getElementById("imagen").appendChild(cards[random]);
    console.log(document.getElementById("imagen"));
}

//Modals//
//El Loco//
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
    modal.classList.toggle("open-modal");
});

//El Mago//
const modalBtn1 = document.querySelector(".modal-btn1");
const modal1 = document.querySelector(".modal-overlay1");
const closeBtn1 = document.querySelector(".close-btn1");

modalBtn1.addEventListener("click", function () {
    modal1.classList.toggle("open-modal1");
});
closeBtn1.addEventListener("click", function () {
    modal1.classList.toggle("open-modal1");
});

//La Papisa//
const modalBtn2 = document.querySelector(".modal-btn2");
const modal2 = document.querySelector(".modal-overlay2");
const closeBtn2 = document.querySelector(".close-btn2");

modalBtn2.addEventListener("click", function () {
    modal2.classList.toggle("open-modal2");
});
closeBtn2.addEventListener("click", function () {
    modal2.classList.toggle("open-modal2");
});

//La Emperatriz//
const modalBtn3 = document.querySelector(".modal-btn3");
const modal3 = document.querySelector(".modal-overlay3");
const closeBtn3 = document.querySelector(".close-btn3");

modalBtn3.addEventListener("click", function () {
    modal3.classList.toggle("open-modal3");
});
closeBtn3.addEventListener("click", function () {
    modal3.classList.toggle("open-modal3");
});

//El Emperador//
const modalBtn4 = document.querySelector(".modal-btn4");
const modal4 = document.querySelector(".modal-overlay4");
const closeBtn4 = document.querySelector(".close-btn4");

modalBtn4.addEventListener("click", function () {
    modal4.classList.toggle("open-modal4");
});
closeBtn4.addEventListener("click", function () {
    modal4.classList.toggle("open-modal4");
});

//El Papa//
const modalBtn5 = document.querySelector(".modal-btn5");
const modal5 = document.querySelector(".modal-overlay5");
const closeBtn5 = document.querySelector(".close-btn5");

modalBtn5.addEventListener("click", function () {
    modal5.classList.toggle("open-modal5");
});
closeBtn5.addEventListener("click", function () {
    modal5.classList.toggle("open-modal5");
});

//Los Enamorados//
const modalBtn6 = document.querySelector(".modal-btn6");
const modal6 = document.querySelector(".modal-overlay6");
const closeBtn6 = document.querySelector(".close-btn6");

modalBtn6.addEventListener("click", function () {
    modal6.classList.toggle("open-modal6");
});
closeBtn6.addEventListener("click", function () {
    modal6.classList.toggle("open-modal6");
});

//El Carro//
const modalBtn7 = document.querySelector(".modal-btn7");
const modal7 = document.querySelector(".modal-overlay7");
const closeBtn7 = document.querySelector(".close-btn7");

modalBtn7.addEventListener("click", function () {
    modal7.classList.toggle("open-modal7");
});
closeBtn7.addEventListener("click", function () {
    modal7.classList.toggle("open-modal7");
});

//La Justicia//
const modalBtn8 = document.querySelector(".modal-btn8");
const modal8 = document.querySelector(".modal-overlay8");
const closeBtn8 = document.querySelector(".close-btn8");

modalBtn8.addEventListener("click", function () {
    modal8.classList.toggle("open-modal8");
});
closeBtn8.addEventListener("click", function () {
    modal8.classList.toggle("open-modal8");
});

//El Ermitaño//
const modalBtn9 = document.querySelector(".modal-btn9");
const modal9 = document.querySelector(".modal-overlay9");
const closeBtn9 = document.querySelector(".close-btn9");

modalBtn9.addEventListener("click", function () {
    modal9.classList.toggle("open-modal9");
});
closeBtn9.addEventListener("click", function () {
    modal9.classList.toggle("open-modal9");
});

//La Rueda de la Fortuna//
const modalBtn10 = document.querySelector(".modal-btn10");
const modal10 = document.querySelector(".modal-overlay10");
const closeBtn10 = document.querySelector(".close-btn10");

modalBtn10.addEventListener("click", function () {
    modal10.classList.toggle("open-modal10");
});
closeBtn10.addEventListener("click", function () {
    modal10.classList.toggle("open-modal10");
});

//La Fuerza//
const modalBtn11 = document.querySelector(".modal-btn11");
const modal11 = document.querySelector(".modal-overlay11");
const closeBtn11 = document.querySelector(".close-btn11");

modalBtn11.addEventListener("click", function () {
    modal11.classList.toggle("open-modal11");
});
closeBtn11.addEventListener("click", function () {
    modal11.classList.toggle("open-modal11");
});

//El Colgado//
const modalBtn12 = document.querySelector(".modal-btn12");
const modal12 = document.querySelector(".modal-overlay12");
const closeBtn12 = document.querySelector(".close-btn12");

modalBtn12.addEventListener("click", function () {
    modal12.classList.toggle("open-modal12");
});
closeBtn12.addEventListener("click", function () {
    modal12.classList.toggle("open-modal12");
});

//Arcano XIII//
const modalBtn13 = document.querySelector(".modal-btn13");
const modal13 = document.querySelector(".modal-overlay13");
const closeBtn13 = document.querySelector(".close-btn13");

modalBtn13.addEventListener("click", function () {
    modal13.classList.toggle("open-modal13");
});
closeBtn13.addEventListener("click", function () {
    modal13.classList.toggle("open-modal13");
});

//La Templanza//
const modalBtn14 = document.querySelector(".modal-btn14");
const modal14 = document.querySelector(".modal-overlay14");
const closeBtn14 = document.querySelector(".close-btn14");

modalBtn14.addEventListener("click", function () {
    modal14.classList.toggle("open-modal14");
});
closeBtn14.addEventListener("click", function () {
    modal14.classList.toggle("open-modal14");
});

//El Diablo//
const modalBtn15 = document.querySelector(".modal-btn15");
const modal15 = document.querySelector(".modal-overlay15");
const closeBtn15 = document.querySelector(".close-btn15");

modalBtn15.addEventListener("click", function () {
    modal15.classList.toggle("open-modal15");
});
closeBtn15.addEventListener("click", function () {
    modal15.classList.toggle("open-modal15");
});

//La Casa Dios//
const modalBtn16 = document.querySelector(".modal-btn16");
const modal16 = document.querySelector(".modal-overlay16");
const closeBtn16 = document.querySelector(".close-btn16");

modalBtn16.addEventListener("click", function () {
    modal16.classList.toggle("open-modal16");
});
closeBtn16.addEventListener("click", function () {
    modal16.classList.toggle("open-modal16");
});

//La Estrella//
const modalBtn17 = document.querySelector(".modal-btn17");
const modal17 = document.querySelector(".modal-overlay17");
const closeBtn17 = document.querySelector(".close-btn17");

modalBtn17.addEventListener("click", function () {
    modal17.classList.toggle("open-modal17");
});
closeBtn17.addEventListener("click", function () {
    modal17.classList.toggle("open-modal17");
});

//La Luna//
const modalBtn18 = document.querySelector(".modal-btn18");
const modal18 = document.querySelector(".modal-overlay18");
const closeBtn18 = document.querySelector(".close-btn18");

modalBtn18.addEventListener("click", function () {
    modal18.classList.toggle("open-modal18");
});
closeBtn18.addEventListener("click", function () {
    modal18.classList.toggle("open-modal18");
});

//El Sol//
const modalBtn19 = document.querySelector(".modal-btn19");
const modal19 = document.querySelector(".modal-overlay19");
const closeBtn19 = document.querySelector(".close-btn19");

modalBtn19.addEventListener("click", function () {
    modal19.classList.toggle("open-modal19");
});
closeBtn19.addEventListener("click", function () {
    modal19.classList.toggle("open-modal19");
});

//El Juicio//
const modalBtn20 = document.querySelector(".modal-btn20");
const modal20 = document.querySelector(".modal-overlay20");
const closeBtn20 = document.querySelector(".close-btn20");

modalBtn20.addEventListener("click", function () {
    modal20.classList.toggle("open-modal20");
});
closeBtn20.addEventListener("click", function () {
    modal20.classList.toggle("open-modal20");
});

//El Mundo//
const modalBtn21 = document.querySelector(".modal-btn21");
const modal21 = document.querySelector(".modal-overlay21");
const closeBtn21 = document.querySelector(".close-btn21");

modalBtn21.addEventListener("click", function () {
    modal21.classList.toggle("open-modal21");
});
closeBtn21.addEventListener("click", function () {
    modal21.classList.toggle("open-modal21");
});




