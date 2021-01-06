package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(element -> new OrderDTO(element)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		//Create a new instance of the Order entity with the attributes:
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
								Instant.now(), OrderStatus.PENDING);
		//For each ProductDTO in the OrderDTO's product list:
		for (ProductDTO p : dto.getProducts()) {
			//Create a new instance of the Product entity and associate it with the respective Order:
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		//Save the order in the database:
		order = repository.save(order);
		//Return the OrderDTO object:
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		//Get the specified Order by id:
		Order order = repository.getOne(id);
		//Set the new status:
		order.setStatus(OrderStatus.DELIVERED);
		//Save the order in the database:
		order = repository.save(order);
		//Return the OrderDTO object:
		return new OrderDTO(order);
	}
	
}
