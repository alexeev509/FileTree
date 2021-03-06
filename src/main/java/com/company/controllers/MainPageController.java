package com.company.controllers;

import com.company.entity.FileEntity;
import com.company.servises.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainPageController {
    @Autowired
    private FileService fileService;


    @RequestMapping(value = "/main")
    public String getMainPage(){
        return "MainPage";
    }

    @RequestMapping(value = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<FileEntity> getAllFiles(){
        return fileService.findAll();
    }

    @RequestMapping(value = "/add",
            method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public FileEntity addNewFile(@RequestBody FileEntity fileEntity) {
        return fileService.addNewFile(fileEntity);
    }

    @RequestMapping(value = "/edit",
            method = RequestMethod.POST)
    @ResponseBody
    public void editFile(@RequestBody FileEntity fileEntity) {
        fileService.editFile(fileEntity);
    }

    @RequestMapping(value = "/delete",
            method = RequestMethod.POST)
    @ResponseBody
    public void deleteFile(@RequestBody FileEntity fileEntity) {
        fileService.delete(fileEntity);
    }
}
