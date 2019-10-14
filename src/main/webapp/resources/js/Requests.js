// alert("fff")
// window.onload=function () {
//     alert("hi");
// };

var xhr = new XMLHttpRequest();
var data;

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

function normalizeData(responseTxt) {
    data = JSON.parse(responseTxt);
    for (var i = 0; i < data.length; i++) {
        //For tree format
        if (data[i].parent == -1) {
            data[i].parent = "#";
        }
    }
    console.log("data after replacing: " + data);
}


function createJSTree(jsondata) {


    // $('#SimpleJSTree').on("changed.jstree", function (e, data) {
    //     console.log("The selected nodes are:");
    //     console.log(data.selected);
    // });
    //
    //
    $('#SimpleJSTree').on("create_node.jstree", function (e, data) {
        data.node.id=
        console.log(data.node.id);
    });

    $('#SimpleJSTree').jstree({
        "core": {
            "check_callback": true,
            'data': jsondata,
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
                "icon": "jstree-icon jstree-file"
            }
        },
        "plugins": ["contextmenu", "types"],
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