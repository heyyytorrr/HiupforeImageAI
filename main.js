Webcam.set({
 width:350,
 height:300,
 Image_format:"png",
 png_quality:90,
})

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log("ml5 versão:", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kY0RxFK7J/model.json", modelLoaded);

function modelLoaded() {
    console.log("Modelo Carregado")
}

function check() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult)
}
function gotResult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}