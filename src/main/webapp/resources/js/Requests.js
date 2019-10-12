function getAllFiles() {
    console.log('Now we will send request!');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/getAll', false);
    xhr.send();
}