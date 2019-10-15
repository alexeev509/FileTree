// alert("fff")
// window.onload=function () {
//     alert("hi");
// };

var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
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

function getParentId(data) {
    var parentTd;
    if (data.node.parent == "#") {
        parentTd = -1;
    } else {
        parentTd = data.node.parent;
    }
    return parentTd;
}

function sendRequestForCreatingNewFileInDataBase(data) {
    var parentTd = getParentId(data);
    console.log(parentTd);
    xhr2.open('POST', '/add', false);
    xhr2.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    var obj = {
        "id": data.node.id,
        "type": data.node.type,
        "text": data.node.text,
        "parent": parentTd
    };
    xhr2.send(JSON.stringify(obj));
}

function sendRequestForEditingFileInDataBase(data) {
    var parentTd = getParentId(data);
    xhr2.open('POST', '/edit', true);
    xhr2.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    var obj = {
        "id": data.node.id,
        "type": data.node.type,
        "text": data.node.text,
        "parent": parentTd
    };
    xhr2.send(JSON.stringify(obj));
}

function sendRequestForDeletingFileInDataBase(data) {
    var parentTd = getParentId(data);
    xhr2.open('POST', '/delete', true);
    xhr2.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    var obj = {
        "id": data.node.id,
        "type": data.node.type,
        "text": data.node.text,
        "parent": parentTd
    };
    xhr2.send(JSON.stringify(obj));
}

function createJSTree(jsondata) {


    $('#SimpleJSTree').on("open_node.jstree", function (e, data) {
        data.instance.set_icon(data.node, "fa fa-spinner fa-spin");
    });

    $('#SimpleJSTree').on("after_open.jstree", function (e, data) {
        data.instance.set_icon(data.node, "jstree-icon jstree-folder");
    });

    $('#SimpleJSTree').on("create_node.jstree", function (e, data) {
        last_id++;
        $('#SimpleJSTree').jstree(true).set_id(data.node, last_id);
        console.log(data.node.id + " " + data.node.parent + " " + data.node.text + " " + data.node.type);
        sendRequestForCreatingNewFileInDataBase(data);
    });

    $('#SimpleJSTree').on("rename_node.jstree", function (e, data) {
        console.log(data.node.id + " " + data.node.parent + " " + data.node.text + " " + data.node.type);
        sendRequestForEditingFileInDataBase(data);
    });

    $('#SimpleJSTree').on("delete_node.jstree", function (e, data) {
        console.log(data.node.id + " " + data.node.parent + " " + data.node.text + " " + data.node.type);
        sendRequestForDeletingFileInDataBase(data);
    });

    $('#SimpleJSTree').on("move_node.jstree", function (e, data) {
        console.log("Drop node " + data.node.id + " to " + data.node.parent);
        sendRequestForEditingFileInDataBase(data);
    });

    $('#SimpleJSTree').jstree({
        "core": {
            "check_callback": true,
            'data': jsondata,
            'animation': 2000,
            "__init": function ($node) {
                alert($node)
            },
        },
        "types": {
            "default": {
                "icon": "jstree-icon jstree-file"
            },
            "folder": {
                "icon": "jstree-icon jstree-folder"
            },
            "file": {
                "icon": "jstree-icon jstree-file",
                "valid_children": []
            }
        },
        "plugins": ["contextmenu", "types", "dnd", ""],
        "contextmenu": {
            "items": function ($node) {
                var tree = $("#SimpleJSTree").jstree(true);
                return {
                    "Create": {
                        "separator_before": false,
                        "separator_after": true,
                        "label": "Create",
                        "action": false,
                        "type": "folder",
                        "_disabled": function () {
                            return $node.type == "file";
                        },
                        "submenu": {
                            "File": {
                                "seperator_before": false,
                                "seperator_after": false,
                                "label": "File",
                                action: function (obj) {
                                    $node = tree.create_node($node, {
                                        text: 'New File',
                                        type: 'file',
                                        icon: 'jstree-icon jstree-file'
                                    });
                                    tree.deselect_all();
                                    tree.select_node($node);
                                }
                            },
                            "Folder": {
                                "seperator_before": false,
                                "seperator_after": false,
                                "label": "Folder",
                                action: function (obj) {
                                    $node = tree.create_node($node, {text: 'New Folder', type: 'folder'});
                                    tree.deselect_all();
                                    tree.select_node($node);
                                }
                            }
                        }
                    },
                    "Rename": {
                        "separator_before": false,
                        "separator_after": false,
                        "label": "Rename",
                        "action": function (obj) {
                            tree.edit($node);
                        }
                    },
                    "Remove": {
                        "separator_before": false,
                        "separator_after": false,
                        "label": "Remove",
                        "action": function (obj) {
                            tree.delete_node($node);
                        }
                    }
                };
            }
        }
    });
}