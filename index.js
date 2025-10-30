const characters = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let mainBtEl = document.getElementById("main-btn")
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")

mainBtEl.addEventListener("click", function() {
  passwordOneEl.value = getPassword(15)
  passwordTwoEl.value = getPassword(15)
})

function getPassword(len) {
  return Array.from({ length: len }, () => {
    let password = Math.floor(Math.random() * characters.length)
    return characters[password]
  }).join('')
}