var freerdp = require('freerdp');

var session = new freerdp.Session({
    host: '192.168.1.102',
    username: 'ammar',
    password: '23789',
    domain: '', // optional
    port: 3389, // optional
    width: 1366, // optional
    height: 768, // optional
    certIgnore: true // optional
});

session.on('connect', function () {
    setInterval(function () {
        var b = canvas.toBuffer();
        fs.writeFileSync('screenshot.png', b, 'binary');
    }, 1000);

    console.log('connected');

    var x = 10, y = 20; // if x / y are null, will not move mouse
    session.sendPointerEvent(x, y, {
        pressLeft: true // Other options are pressMiddle, pressRight, releaseLeft|Middle|Right
    });

    var code = 0x23; // letter 'H'
    var isPressed = true;
    session.sendKeyEventScancode(code, isPressed);

    setTimeout(function () {
        session.close(); // end session
    }, 50000);
});

session.on('bitmap', function (bitmap) {
    console.log(`bitmap at ${bitmap.x}, ${bitmap.y}, of dimensions ${bitmap.w}, ${bitmap.h}`);
    // bitmap.data contains RGBA buffer where each pixel is of bitmap.bytesPerPixel size
});

session.on('error', function (err) {

});

session.on('close', function () {
    console.log('connection closed');
});
