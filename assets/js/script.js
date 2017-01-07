document.addEventListener('DOMContentLoaded', function () {

    // References to all the element we will need.
    var video = document.querySelector('#camera-stream'),
        image = document.querySelector('#snap'),
        start_camera = document.querySelector('#start-camera'),
        controls = document.querySelector('.controls'),
        take_photo_btn = document.querySelector('#take-photo'),
        delete_photo_btn = document.querySelector('#delete-photo'),
        download_photo_btn = document.querySelector('#download-photo'),
        error_message = document.querySelector('#error-message');


    // The getUserMedia interface is used for handling camera input.
    // Some browsers need a prefix so here we're covering all the options
    navigator.getMedia = ( 
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    );


    if(!navigator.getMedia){
        displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
    }
    else{
        // Request the camera.
        navigator.getMedia(
            {
                video: true
            },
            // Success Callback
            function(stream) {

                // Create an object URL for the video stream and
                // set it as src of our HTLM video element.
                video.src = window.URL.createObjectURL(stream);

                // Play the video element to start the stream.
                video.play();
                video.onplay = function() {
                    showVideo();
                };
                             
                
                
            },
            // Error Callback
            function(err) {
                displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
            }
        );
    }



    // Mobile browsers cannot play video without user input,
    // so here we're using a button to start it manually.
    start_camera.addEventListener("click", function(e) {

        e.preventDefault();

        // Start video playback manually.
        video.play();
        showVideo();

    });


    take_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        var snap = takeSnapshot();

        // Show image. 
        image.setAttribute('src', snap);
        image.classList.add("visible");

        // Enable delete and save buttons
        delete_photo_btn.classList.remove("disabled");
        download_photo_btn.classList.remove("disabled");

        // Set the href attribute of the download button to the snap url.
        download_photo_btn.href = snap;

        // Pause video playback of stream.
        video.pause();

    });


    delete_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        // Hide image.
        image.setAttribute('src', "");
        image.classList.remove("visible");

        // Disable delete and save buttons
        delete_photo_btn.classList.add("disabled");
        download_photo_btn.classList.add("disabled");

        // Resume playback of stream.
        video.play();

    });



    function takeSnapshot() {
        // Here we're using a trick that involves a hidden canvas element.  

        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');

        var width = video.videoWidth,
            height = video.videoHeight;

        if (width && height) {

            // Setup a canvas with the same dimensions as the video.
            hidden_canvas.width = width;
            hidden_canvas.height = height;

            // Make a copy of the current frame in the video on the canvas.
            context.drawImage(video, 0, 0, width, height);

            // Turn the canvas image into a dataURL that can be used as a src for our photo.
            return hidden_canvas.toDataURL('image/png');
        }
    }


    function showVideo() {
        hideUI();
        video.classList.add("visible");
        controls.classList.add("visible");
    }


    function displayErrorMessage(error_msg, error) {
        error = error || "";
        if(error){
            console.error(error);
        }

        error_message.innerText = error_msg;

        hideUI();
        error_message.classList.add("visible");
    }

   
    function hideUI() {
        // Helper function for clearing the app UI.

        controls.classList.remove("visible");
        start_camera.classList.remove("visible");
        video.classList.remove("visible");
        snap.classList.remove("visible");
        error_message.classList.remove("visible");
    }

});











function setup() {

var i;
var r1;
var r2;
var r3;
var a1;
var dx, dy, ds;
var nx, ny,ns;
var x0, y0;
var x1, y1;
var s1;
var wid, hei;
var w;
var preloadbt;
noLoop();
  
}

function draw() {
    wid=960;
    hei=1600;

  createCanvas(960, 1600);
  frameRate(30);
  stroke(255, 204, 0);
  strokeWeight(10);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  //preloadbt= loadImage("reload.png");
  
  colorMode(HSB, 100);
  
  s = "Click and drag anywhere to draw RAINBOWS, Refresh to start over";
  fill(50);
  text(s, 10, 10, 270, 80);
  
}


function mousePressed() {
  x0=mouseX;
  y0=mouseY;
  
}


function mouseDragged() {
 //   clear();
  stroke(240);
  strokeWeight(2);
//  line(x0, y0, mouseX, mouseY);
      x1=mouseX;
      y1=mouseY;
        
   

//for (var n=0; n<=4; n++) {


//     x1=int(random(0, wid));

//     y1=int(random(0, hei));
        
for (var k=0; k<10; k++) {
        r1=int(random(0,100));
        r2=int(random(70,100));
        r3=int(random(70,100));
        w=int(random(4,8));
        
        strokeWeight(4);        
        stroke(k*10, 100, 100);
        line(x0+k*3, y0+k*3, x1+k*3, y1+k*3);
        noFill();

    }
    
//} 
 // background(20);
//  redraw(); 

  x0=mouseX;
  y0=mouseY;
  
  return false;
}
