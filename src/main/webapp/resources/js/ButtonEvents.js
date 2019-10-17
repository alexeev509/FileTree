function createNewNode(text, typeOfFile) {

    var tree = $("#SimpleJSTree").jstree();
    var currentNode = tree.get_selected(true)[0];
    last_id++;
    if (currentNode == undefined) {
        tree.create_node('#', {id: last_id, text: text, type: typeOfFile});
    } else {
        tree.create_node(currentNode, {id: last_id, text: text, type: typeOfFile});
    }
    tree.deselect_all();
    tree.select_node(currentNode);
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