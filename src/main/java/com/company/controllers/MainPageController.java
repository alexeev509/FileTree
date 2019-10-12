package com.company.controllers;

import com.company.servises.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainPageController {
    @Autowired
    private FileService fileService;


    @RequestMapping(value = "/main")
    public String getMainPage(){
        System.out.println("hello");
        return "MainPage";
    }

    @RequestMapping(value = "/getAll")
    @ResponseBody
    public String getAllFiles(){
        return fileService.findAll().toString();
    }
}
