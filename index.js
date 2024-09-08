// get things
const form = document.querySelector("#form")
const inputUrl = document.querySelector("#input-url")
const selectSize = document.querySelector("#select-size")
const generateBtn = document.querySelector("#generate-btn")
// Output QR Code
const printQRCode = document.querySelector("#qrcode")

function handleFormSubmit(e) {
  // Prevent Form Submission
  e.preventDefault()
  // Clean UI
  cleanUI()
  // Getting Values
  const url = inputUrl.value
  const size = selectSize.value

  if (url === "") {
    alert("please insert a url")
    return
  }

  // Show Spinner Animation
  showSpinner()

  setTimeout(() => {
    // Remove Spinner Animation
    removeSpinner()
    // Create QR Code
    generateQRCode(url, size)

    setTimeout(() => {
      // Get save url
      const saveUrl = printQRCode.querySelector("img").src
      // Create Download Link
      createDownloadLink(saveUrl)
    }, 50)
  }, 1000)
}

// Generate QRCode and append it into its area
function generateQRCode(url, size) {
  const qrcode = new QRCode(printQRCode, {
    text: url,
    width: size,
    height: size,
  })
}

// Append a Link for Downloading QRCode
function createDownloadLink(url) {
  const image = printQRCode.querySelector("img")
  const link = document.createElement("a")
  link.id = "download-link"
  link.className = "btn donwload-link"
  link.href = url
  link.innerHTML = "Save QR Code"
  link.download = "qrcode"
  printQRCode.insertAdjacentElement("afterend", link)
}

// Helpers Function
function showSpinner() {
  const spinner = document.querySelector("#spinner")
  spinner.classList.add("show")
}
function removeSpinner() {
  const spinner = document.querySelector("#spinner")
  spinner.classList.remove("show")
}
function cleanUI() {
  printQRCode.innerHTML = ""
  const link = document.querySelector("#download-link")
  if (link) {
    link.remove()
  }
}

// event listener
form.addEventListener("submit", handleFormSubmit)
