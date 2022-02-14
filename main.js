song = "";

function preload()
{
	song = loadSound("music.mp3");
}


function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw() {
	image(video, 0, 0, 600, 500);
}

function  modelLoaded() {
	console.log('Mostly no errors, PoseNet is initialized so be happy about the first step');
}


function  play() {
    song.play();
	song.setVolume(1);
	song.rate(1);

}
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;

function  gotPoses(results) {
	if (results.length>0) {
		console.log(results);
		left_wrist_x=results[0].pose.leftWrist.x;
		left_wrist_y=results[0].pose.leftWrist.y;
		console.log("left wrist x = "+ left_wrist_x+" left wrist y= " + left_wrist_y);
		right_wrist_x=results[0].pose.rightWrist.x;
		right_wrist_y=results[0].pose.rightWrist.y;
		console.log("right wrist x = "+ right_wrist_x+" right wrist y= " + right_wrist_y);
	}
}