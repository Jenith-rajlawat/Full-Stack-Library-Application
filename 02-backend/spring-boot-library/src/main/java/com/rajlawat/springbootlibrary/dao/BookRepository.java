package com.rajlawat.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rajlawat.springbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
