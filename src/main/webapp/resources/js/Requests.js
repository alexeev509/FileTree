function sendRequestForCreatingNewFileInDataBase(data) {
    sentRequest('add', data, false);
}

function sendRequestForEditingFileInDataBase(data) {
    sentRequest('edit', data, true);
}

function sendRequestForDeletingFileInDataBase(data) {
    sentRequest('delete', data, true);
}

function sentRequest(type, data, async) {
    var parentTd = getParentId(data);
    xhr2.open('POST', '/' + type, async);
    xhr2.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    var obj = {
        "id": data.node.id,
        "type": data.node.type,
        "text": data.node.text,
        "parent": parentTd
    };
    xhr2.send(JSON.stringify(obj));
}

function getParentId(data) {
    var parentTd;
    if (data.node.parent == "#") {
        parentTd = -1;
    } else {
        parentTd = data.node.parent;
    }
    return parentTd;
}

