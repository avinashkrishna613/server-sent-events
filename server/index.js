const http = require("http");

let intervalId;

function handleRequest(req, res) {
    console.log("Received request");
    // setInterval() -> takes function and delay as input. It executes the function for after every delay time
    let count = 1;
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Access-Control-Allow-Origin", "*")
    intervalId = setInterval(() => {
        res.write(`data: This is message ${count}\n\n`);
        count++;
    }, 1000);
}

const server = http.createServer(handleRequest);

server.on("clientError", () => {
    clearInterval(intervalId);
});

server.listen(3000, () => {
    console.log("server listening on port");
});