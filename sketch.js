function setup() {
    createCanvas(800, 800);
    pixelDensity(1)
}

var inc = 0.005;
var rinc = 0.1
var zoff = 0;

function draw() {

    var yoff = 0;

    loadPixels();

    for (var x = 0; x < width; x++) {
        var xoff = 0;
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff, zoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r + 100;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    noiseDetail(25)
    zoff += 0.06

}