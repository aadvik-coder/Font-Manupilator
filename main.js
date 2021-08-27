noseX = 0;
noseY = 0;
text1 = "";
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(1100, 400);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);


}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background("#ff872b");
    textSize(difference);
    if(difference <= 10){
        fill("#42ffff");
    } else if(difference <= 100 && difference > 10) {
        fill("#4281ff");
    } else if (difference <= 200 && difference > 100){
        fill("#4942ff");
    } else if (difference > 200){
        fill("#8b42ff");
    }
    if(1){
    text1 = document.getElementById("text_holder").value;
    text(text1, noseX - 100, noseY - 15);
    
    }
}
function gotPosses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + ", nose y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + ", right wrist x = " + rightWristX + ", difference = " + difference);
    }
}