const myarray=["banan","pomme","cerise",4] 
console.log(myarray,"mon tableau de fruits")
myarray.length
console.log(myarray[0])
console.log(myarray[1])
myarray[1]="fraise"
console.log(myarray,)


// 2éme methode pour la déclaration
const cars = new Array("bmw","lion","polo")
console.log(cars,"tableau de voitures")

const nombres=[2,3,4]
console.log(nombres)
// crée une copie pour le tableau
const copienombres = [...nombres]
console.log(copienombres,"la copie de tableau nombres")
const copie = [1,...nombres,5]
console.log(copie)
console.log(myarray.toString())
console.log(myarray.join("/"))
// suprimer la derniére case dans le tableau 'pop'
let voitures= cars.pop()
console.log(voitures)
console.log(cars)
// ajouter un element a la fin de tableau 'push'
let fruits= myarray.push("kiwi")
console.log(fruits)
console.log(myarray)

const boys =[ "rida" ,"yanis ","said"]
const girls =["ines","ichrak","dyhia"]
console.log(boys)
console.log(girls)
const children =boys.concat(girls)
console.log(children)
// exercice
// let semaine=["lun","mra","mer","jeu","ven","sam","ddi"]

const semaine =["lun","mra","mer","jeu","ven","sam","ddi"]
console.log(semaine)
let days= semaine.pop()
console.log(days)
console.log(semaine)
let day= semaine.push("dim")
console.log(day)
console.log(semaine)

console.log(semaine[1])
semaine[1]="mar"
console.log(semaine)

semaine.length
console.log("la longeure de tableau est",semaine.length)
// la fin d'exercice

// 'le 1er paramaitre'pour ajouter et 'le 2eme paramaitre' pour suprimer des elements 
const fruitsplice =["banane","orange","pomme","mangue"]
fruitsplice.splice(2,0,"citron","kiwi")
console.log(fruitsplice)
// pour seprimer un element
fruitsplice.splice(3,2)
console.log(fruitsplice)

// il ramaine des element a partire de lindice
const fruitslice = ["banane","orange","citron","pomme","mangue"]
const slicex = fruitslice.slice(2)
console.log(slicex)
console.log(fruitslice)

// il ramaine n-1 elements ex:3 , il ramaine 2 elements
const fruity = ["banane","orange","citron","pomme","mangue"]
const slicey =fruity.slice(1,3)
console.log(slicey)
console.log(fruity)