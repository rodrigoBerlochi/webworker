function log (msg) {
    console.log(msg);
}

log('2nd thread running');

// worker script have 2 methods in scope: onmessage tp listen main
// and postMessage to send data to main
onmessage = (e) => {
    log('Worker for message from main: ' + e.data);

    var counter = 0;

    for (let i = 0; i <= e.data[0]; i++) {
        counter += 3;
    }

    postMessage(counter);
}