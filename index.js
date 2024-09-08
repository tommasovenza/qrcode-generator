// get things
const inputUrl = document.querySelector("#input-url")
const generateBtn = document.querySelector("#generate-btn")
const selectSize = document.querySelector("#select-size")
const printQRCode = document.querySelector("#qrcode")
const generated = document.querySelector("#generated")
const form = document.querySelector("#form")

function generateQRCode(url, size) {
  const qrcode = new QRCode(printQRCode, {
    text: url,
    width: size,
    height: size,
  })
}

function createDownloadLink(url) {
  const printedQRCode = document.querySelector("#qrcode")
  const image = printedQRCode.querySelector("img")
  const link = document.createElement("a")
  link.id = "download-link"
  link.style =
    "background-color: #3b28cc; border: none; color: white; font-weight: semibold; border-radius: 0.2em; cursor: pointer; font-family: Poppins, sans-serif; text-decoration: none; width: 100%; padding: 0.5em 1em; margin: 1em 0; display: block; text-align:center"
  link.href = url
  link.src = image.src
  link.innerHTML = "Save QR Code"
  link.download = "qrcode.png"
  generated.appendChild(link)
}

function handleFormSubmit(e) {
  e.preventDefault()
  cleanUI()
  console.log("generate")

  const url = inputUrl.value
  const size = selectSize.value

  showSpinner()

  setTimeout(() => {
    removeSpinner()
    generateQRCode(url, size)
    generated.appendChild(qrcode)

    setTimeout(() => {
      // Get save url
      const saveUrl = printQRCode.querySelector("canvas").toDataURL()
      createDownloadLink(saveUrl)
    }, 500)
  }, 1000)
}

function showSpinner() {
  const spinner = document.querySelector("#spinner")
  spinner.classList.add("show")
}

function removeSpinner() {
  const spinner = document.querySelector("#spinner")
  spinner.classList.remove("show")
}

function cleanUI() {
  const outputQRcode = document.querySelector("#qrcode")
  outputQRcode.innerHTML = ""
}

// event listener
form.addEventListener("submit", handleFormSubmit)
