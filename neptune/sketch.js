const model_url = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

let pitch;
let audioContext;
let mic;
let freq = 0;
let array = [];

function setup() {
    audioContext = getAudioContext();
    mic = new p5.AudioIn();
    mic.start(listening);
}

function listening() {
    console.log("listening");
    pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
}

function gotPitch(error, frequency) {
    if (error) {
        console.error(error);
    } else {
        if (frequency) {
            freq = frequency;
            if (array.length >= 10) {
                array.shift(); // Remove the oldest frequency if array size exceeds 10
            }
            array.push(freq); // Add the new frequency to the array
            console.log(array);
            updateGraph(); // Update the graph
        }
        pitch.getPitch(gotPitch);
    }
}

function modelLoaded() {
    console.log("model loaded");
    pitch.getPitch(gotPitch);
}

function updateGraph() {
    var svgWidth = 1000, svgHeight = 300, barPadding = 5;
    var barWidth = svgWidth / array.length;

    var svg = d3.select("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    // Remove old bars if they exist
    svg.selectAll("rect").remove();

    svg.selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("y", function(d) {
            return svgHeight - d;
        })
        .attr("width", barWidth - barPadding)
        .attr("height", function(d) {
            return d;
        })
        .attr("transform", function(d, i) {
            var translate = [barWidth * i, 0];
            return "translate(" + translate + ")";
        });
}

function draw() {}
