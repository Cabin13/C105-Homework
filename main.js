Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
})

var webcam= document.getElementById("camera")

Webcam.attach(webcam)

function takeimg() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= "<img id='snapshot' src='" + data_uri + "'>"
    })
}

console.log("ml5", ml5.version)

classifier= ml5.imageClassifier("put link here", modelLoaded)

function modelLoaded() {
    console.log("model loaded")
}

function identifyimg() {
    img= document.getElementById("snapshot")
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById("object").innerHTML= result[0].label
        document.getElementById("accuracy").innerHTML= (result[0].confidence.toFixed(2))*100+"%"
    }
}
