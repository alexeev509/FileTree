package com.company.servises;

import com.company.entity.FileEntity;
import com.company.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public List<FileEntity> findAll(){
        System.out.println("All files in database:");
        System.out.println(fileRepository.getFileEntitiesByParentId(1l));
        System.out.println(fileRepository.findAll());
        return fileRepository.findAll();
    }
}
