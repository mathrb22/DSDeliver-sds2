package com.devsuperior.dsdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	
	//Dependency injection:
	@Autowired
	private ProductService service;
	
	//Creating the endpoint:
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<ProductDTO> list = service.findAll();
		//Return a object of type ResponseEntity:
		return ResponseEntity.ok().body(list);
	}

}
