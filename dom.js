const titre=document.getElementsByClassName("title")
console.log(titre, "la récupération de tous les elements qui contiennent le nom de la classe title")
const demo=document.getElementById("demo")
console.log(demo,"la récupération de tous les elements dont le id demo")
const tag=document.getElementsByTagName("h2")
console.log(titre, "la récupération de tous les elements dont le tag")
document.getElementById("demo").style.color="red"
// demo.innerHTML="Salut"
// demo.innerHTML="<h1 >Mon titre</h1>"
// demo.innerText="Hello"

function salut() {
    console.log("bonjour")
    if (demo.innerHTML==="Libre pour tout le monde") {
        demo.innerHTML="bonjour tout le monde"
    }else{
        demo.innerHTML="Libre pour tout le monde"
    }
}
demo.onclick=salut

const booklist=document.querySelectorAll("#liste-livres li .name")
console.log(booklist, "My book list")
const myselector=document.querySelector("#liste-livres li:nth-child(2) .name")
console.log(myselector,"My selector")