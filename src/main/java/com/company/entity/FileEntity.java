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
    @Column(name = "isdirectory")
    private boolean isDirectory;
    @Column(name = "filename")
    private String filename;
    @Column(name = "parentid")
    private long parentId;

    @Override
    public String toString() {
        return "FileEntity{" +
                "id=" + id +
                ", isDirectory=" + isDirectory +
                ", filename='" + filename + '\'' +
                ", parentId=" + parentId +
                '}';
    }

    public FileEntity(boolean isDirectory, String filename, long parentId) {
        this.isDirectory = isDirectory;
        this.filename = filename;
        this.parentId = parentId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isDirectory() {
        return isDirectory;
    }

    public void setDirectory(boolean directory) {
        isDirectory = directory;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public long getParentId() {
        return parentId;
    }

    public void setParentId(long parentId) {
        this.parentId = parentId;
    }
}
