function startup() {

var freerdp = require('freerdp');

var session = new freerdp.Session({
    host: '51.140.125.102',
    username: 'admin',
    password: 'Pass@azure123',
    domain: '', // optional
    port: 3389, // optional
    width: 1366, // optional
    height: 768, // optional
    certIgnore: true // optional
});

    session.on('connect', function () {
        console.log('connected');

        var x = 10, y = 20; // if x / y are null, will not move mouse
        session.sendPointerEvent(x, y, {
            pressLeft: true // Other options are pressMiddle, pressRight, releaseLeft|Middle|Right
        });

    };    

    startup();
