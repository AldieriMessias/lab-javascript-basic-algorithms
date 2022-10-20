let hacker1 = "Henrique"

console.log("The driver's name is " +hacker1)


let hacker2 = "Rodrigo"

console.log("The navigator's name is " + hacker2)


if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}

else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

newHacker1 = ""

for (let i = 0; i<hacker1.length;i++){
    newHacker1 = newHacker1 + hacker1[i] + " "
   
}

console.log(newHacker1)

newHacker2 = ""

for (let i = 6; i>=hacker2.length-7 ;i--){
    newHacker2 = newHacker2 + hacker2[i]
}

console.log(newHacker2)

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}

else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
}

else if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}