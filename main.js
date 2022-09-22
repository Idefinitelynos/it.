leftwristX=0
rightwristX=0
difference=0

function setup() {
    canvas=createCanvas(500, 500)
    canvas.position(560, 150)
    video=createCapture(VIDEO)
    video.size(500, 550)

    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}
function modelloaded() {
    console.log("*We got the model* 🤓")
}
function gotposes(results) {
    if (results.length > 0)
    {
        console.log(results)
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        difference=floor(leftwristX-rightwristX)
    }
}
function draw() {
    background("#a0cf42")
    fill("#2D54E2")
    stroke("#2D54E2")
    textSize(difference/2)
    text("just a sentence.", 10, 250 )
    document.getElementById("controller").innerHTML="textSize=" + difference + "px"
}
