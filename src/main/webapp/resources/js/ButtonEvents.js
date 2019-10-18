function createNewNode(text, typeOfFile) {

    var tree = $("#SimpleJSTree").jstree();
    var currentNode = tree.get_selected(true)[0];
    last_id++;
    var data;
    if (currentNode == undefined) {
        data = {node: {parent: '#', id: last_id, text: text, type: typeOfFile}};
        sendRequestForCreatingNewFileInDataBase(data);
    } else if (currentNode.type != 'file') {
        data = {node: {parent: currentNode.id, id: last_id, text: text, type: typeOfFile}};
        sendRequestForCreatingNewFileInDataBase(data);
    }
}

function editNode() {
    var tree = $("#SimpleJSTree").jstree();
    var currentNode = tree.get_selected(true)[0];
    if (currentNode != undefined) {
        tree.edit(currentNode);
    }
}

function remove() {
    var tree = $("#SimpleJSTree").jstree();
    var currentNode = tree.get_selected(true)[0];
    if (currentNode != undefined) {
        tree.delete_node(currentNode);
    }
}