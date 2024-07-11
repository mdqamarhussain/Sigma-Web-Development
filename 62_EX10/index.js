/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

//Using objects and converting them to values of array

let adejctive = {
    adjective1: "Crazy",
    adjective2: "Amazing",
    adjective3: "Fire",
}

let shopName = {
    shopName1: "Engine",
    shopName2: "Food",
    shopName3: "Garments",
}

let anotherWord = {
    anotherWord1: "Bros",
    anotherWord2: "Limited",
    anotherWord3: "Hub",
}

let valueArray1=Object.values(adejctive)
let valueArray2=Object.values(shopName)
let valueArray3=Object.values(anotherWord)

let Index1= Math.floor(Math.random()*3)
let Index2= Math.floor(Math.random()*3)
let Index3= Math.floor(Math.random()*3)

let randomValue1=valueArray1[Index1]
let randomValue2=valueArray2[Index2]
let randomValue3=valueArray2[Index3]

console.log(`${randomValue1} ${randomValue2} ${randomValue3}`)



