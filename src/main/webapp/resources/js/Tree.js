function createJSTree(jsondata) {

    createEventsForTree();

    $('#SimpleJSTree').jstree({
        "core": {
            "check_callback": true,
            'data': jsondata,
            'animation': 2000
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
        "plugins": ["contextmenu", "types", "dnd"],
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
                                    last_id++;
                                    $node = tree.create_node($node, {
                                        id: last_id,
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
                                    last_id++;
                                    $node = tree.create_node($node, {
                                        id: last_id,
                                        text: 'New Folder', type: 'folder'
                                    });
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

function createEventsForTree() {
    $('#SimpleJSTree').on("open_node.jstree", function (e, data) {
        data.instance.set_icon(data.node, "fa fa-spinner fa-spin");
    });

    $('#SimpleJSTree').on("after_open.jstree", function (e, data) {
        data.instance.set_icon(data.node, "jstree-icon jstree-folder");
    });

    $('#SimpleJSTree').on("create_node.jstree", function (e, data) {
        sendRequestForCreatingNewFileInDataBase(data);
    });

    $('#SimpleJSTree').on("rename_node.jstree", function (e, data) {
        sendRequestForEditingFileInDataBase(data);
    });

    $('#SimpleJSTree').on("delete_node.jstree", function (e, data) {
        sendRequestForDeletingFileInDataBase(data);
    });

    $('#SimpleJSTree').on("move_node.jstree", function (e, data) {
        sendRequestForEditingFileInDataBase(data);
    });
}