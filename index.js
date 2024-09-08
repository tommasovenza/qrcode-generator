// get things
const input = document.querySelector("#input-url")
const generateBtn = document.querySelector("#generate-btn")
const select = document.querySelector("#select-size")
const form = document.querySelector("#form")

function generateQRCode(e) {
  e.preventDefault()
  console.log("generate")
}

// event listener
form.addEventListener("submit", generateQRCode)
