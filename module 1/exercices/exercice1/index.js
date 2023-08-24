
alert(addDateTime());

function addDateTime() {
    const date = new Date();
    let message = 'This is the best moment to have a look at this website !';
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ' ' + message;
}