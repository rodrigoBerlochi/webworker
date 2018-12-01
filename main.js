function log (msg) {
    console.log(msg);
}

document.addEventListener('DOMContentLoaded', function () {
    log('Starting Process');

    // workers need of the app running on a server
    // create the worker object and pass it a script path
    var bgThread = new Worker('./bgProcess.js');

    // define a function for onmessage, it will capture messages from worker to main
    bgThread.onmessage = (e) => {
        log('Main got message from worker');

        var data = e.data;
        log(data);
    }

    // send a msg from main to worker, to trigger some process based on some data
    bgThread.postMessage([120]);
});