document.getElementById("confirmMake").addEventListener("click", function () {
    var svgSourceCode =
        "<svg height=\"180\" width=\"180\" xmlns=\"http://www.w3.org/2000/svg\"  > " +
        "<rect width=\"180\" height=\"180\" fill=\"" + document.getElementById("ImageBackgroundColorSelect").value + "\"/>" +
        "<text x=\"" + document.getElementById("textXPositionInput").value + "\" y=\"" + document.getElementById("textYPositionInput").value + "\"  fill=\"" + document.getElementById("ImageTextColorSelect").value + "\" font-size=\"" +
        document.getElementById("font-size-input").value + "\" rotate=\"" + document.getElementById("rotate-input").value + "\" font-family=\"" + document.getElementById("fontSelect").value + "\" >" +
        document.getElementById("input").value +
        "</text>" +
        "</svg>"
    document.getElementById("display").srcdoc = svgSourceCode
})
window.onload = function () {
    document.getElementById("confirmMake").click()
}
var isInput = false
var allInput = document.querySelectorAll("input, textarea");
console.log(allInput)
for (let i = 0; i < allInput.length; i = i + 1) {
    allInput[i].addEventListener("input", function () {
        isInput = true;
        document.getElementById("confirmMake").click()
    })
}
document.getElementById("fontSelect").addEventListener("click", function () {
    document.getElementById("confirmMake").click()
})
window.addEventListener("beforeunload", function (e) {
    if (isInput) {
        e.preventDefault()
        e.returnValue = ""
    }
})

document.getElementById("downloadButton").addEventListener("click", function () {
    isInput = false;
    var SVG = document.getElementById("display").srcdoc
    console.log(SVG)
    convertSVGtoPngThenDownload(SVG)
})
