function sendRequestForCreatingNewFileInDataBase(data) {
    sentRequest('add', data, true, xhrCreate);
}

function sendRequestForEditingFileInDataBase(data) {
    sentRequest('edit', data, true, xhrDeleteAndEdit);
}

function sendRequestForDeletingFileInDataBase(data) {
    sentRequest('delete', data, true, xhrDeleteAndEdit);
}

function sentRequest(type, data, async, xhr) {
    var parentTd = getParentId(data);
    xhr.open('POST', '/' + type, async);
    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    var obj = {
        "id": data.node.id,
        "type": data.node.type,
        "text": data.node.text,
        "parent": parentTd
    };
    xhr.send(JSON.stringify(obj));
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

xhrCreate.onreadystatechange = function () {
    if (xhrCreate.readyState == 4 && xhrCreate.status == 200) {
        data = JSON.parse(xhrCreate.responseText);
        normalize(data);
        var tree = $("#SimpleJSTree").jstree();
        var currentNode = tree.create_node(data.parent, {id: data.id, text: data.text, type: data.type});
        tree.deselect_all();
        tree.select_node(currentNode);
    }
};

function normalize(data) {
    if (data.parent == -1) {
        data.parent = "#";
    }
}

