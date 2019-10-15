package com.company.repository;


import com.company.entity.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Integer> {

    @Transactional
    @Query(value = "DELETE FROM files WHERE id IN \n" +
            "(WITH RECURSIVE r AS (\n" +
            "        SELECT id, type, filename, parentid\n" +
            "        FROM files\n" +
            "                WHERE parentid = :id\n" +
            "\n" +
            "                UNION\n" +
            "\n" +
            "                SELECT files.id, files.type, files.filename, files.parentid\n" +
            "                FROM files\n" +
            "                JOIN r\n" +
            "                ON files.parentid = r.id\n" +
            ")\n" +
            " SELECT id FROM r\n" +
            "UNION\n" +
            "SELECT id FROM files WHERE id=:id)",
            nativeQuery = true)
    @Modifying
    void deleteAllChildsOfTheCurrentNode(@Param("id") int id);
}
