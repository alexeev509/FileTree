var xhr = new XMLHttpRequest();
var xhrDeleteAndEdit = new XMLHttpRequest();
var xhrCreate = new XMLHttpRequest();
var data;
var last_id = -1;
window.onload = function () {
    xhr.open('GET', '/getAll', false);
    xhr.send();
};
xhr.onreadystatechange = function () {
    if (xhr.status == 200) {
        console.log("We had receive: " + xhr.responseText);
        normalizeData(xhr.responseText);
        createJSTree(data);
    }
};

//Better to sort on server by id!!
function normalizeData(responseTxt) {
    data = JSON.parse(responseTxt);
    for (var i = 0; i < data.length; i++) {
        //For tree format
        if (data[i].parent == -1) {
            data[i].parent = "#";
        }
        //find and set last id
        if (data[i].id > last_id) {
            last_id = data[i].id;
        }
    }
    console.log("data after replacing: " + data);
}