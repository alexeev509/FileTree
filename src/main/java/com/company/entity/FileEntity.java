package com.company.entity;

import javax.persistence.*;

@Entity
@Table(name="files")
public class FileEntity {
    public FileEntity() {
    }

    @Id
    @GeneratedValue(generator = "increment")
    @Column(name = "id")
    private long id;
    @Column(name = "type")
    private String type;
    @Column(name = "filename")
    private String text;
    @Column(name = "parentid")
    private long parent;

    @Override
    public String toString() {
        return "FileEntity{" +
                "id=" + id +
                ", type=" + type +
                ", text='" + text + '\'' +
                ", parent=" + parent +
                '}';
    }

    public FileEntity(String type, String filename, long parentId) {
        this.type = type;
        this.text = filename;
        this.parent = parentId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getParent() {
        return parent;
    }

    public void setParent(long parent) {
        this.parent = parent;
    }
}
