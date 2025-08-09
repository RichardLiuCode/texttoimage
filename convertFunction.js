function convertSVGtoPngThenDownload(input) {
    console.log("download button clicked")
    var svgBlob = new Blob([input], { type: "image/svg+xml;charset=utf-8" })
    var blobURL = URL.createObjectURL(svgBlob)
    var image = new Image();
    image.crossOrigin = "anonymous";
    console.log("-")
    image.onload = function () {
        console.log("image load success")
        var canvas = document.createElement("canvas");
        canvas.width = image.width
        canvas.height = image.height
        var ctx = canvas.getContext("2d")
        ctx.drawImage(image, 0, 0);
        var pngURL = canvas.toDataURL("image/png")
        var downloadURL = document.createElement("a")
        downloadURL.href = pngURL;
        downloadURL.download = "image.png";
        downloadURL.click();
        URL.revokeObjectURL(blobURL)
    }
    image.src = blobURL;
}
