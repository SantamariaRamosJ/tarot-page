function RandomCards(){
    const cards = document.getElementsByClassName("arcanos");
    const random = Math.floor(Math.random() * cards.length);
    console.log(random);
    console.log(cards[random]);
    document.getElementById("imagen").appendChild(cards[random]);
    console.log(document.getElementById("imagen"));
}