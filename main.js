
var object = [];

function preload() {
    alarm = loadSound("gio_alarm0610.mp3")
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Identifying Object";
}

function modelLoaded() {
    console.log("Model loaded");
    document.getElementById("status").innerHTML = "Identifying Object";

}


function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        object = results;
    }
}


function draw() {
    image(video, 0, 0, 400, 400);
    objectDetector.detect(video, gotResults);


    objectDetector.detect(video, gotResults);
    for (i = 0; i < object.length; i++) {
        if (object[i].label == "person") {
            alarm.stop();
            document.getElementById("true").innerHTML = "Baby found";
        }
        else{
            alarm.play();
        }

    }
}
