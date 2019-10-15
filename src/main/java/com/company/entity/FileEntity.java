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
    private int id;
    @Column(name = "type")
    private String type;
    @Column(name = "filename")
    private String text;
    @Column(name = "parentid")
    private int parent;

    @Override
    public String toString() {
        return "FileEntity{" +
                "id=" + id +
                ", type=" + type +
                ", text='" + text + '\'' +
                ", parent=" + parent +
                '}';
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getParent() {
        return parent;
    }

    public void setParent(int parent) {
        this.parent = parent;
    }
}
