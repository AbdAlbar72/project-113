let capture;

function setup() {
    createCanvas(800, 600); 
    capture = createCapture(VIDEO);
    capture.hide(); 
}

function draw() {
    background(220);

    
    fill(255, 0, 0); 
    ellipse(random(width), random(height), 50, 50);

    fill(0, 255, 0); 
    rect(random(width), random(height), 50, 50);

    fill(0, 0, 255); 
    circle(random(width), random(height), 50);

    image(capture, 0, 0, 640, 480);
}
