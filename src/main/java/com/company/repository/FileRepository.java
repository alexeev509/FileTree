package com.company.repository;


import com.company.entity.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileRepository extends JpaRepository<FileEntity, Integer> {

}
