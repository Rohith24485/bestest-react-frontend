package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/cart")
public class CartController {

@Autowired
private CartRepository cartRepository;

@PostMapping("/save")
public Cart saveCart(@RequestBody Cart cart) {
    return cartRepository.save(cart);
}

@GetMapping("/{email}")
public List<Cart> getCart(@PathVariable String email) {
    return cartRepository.findByEmail(email);
}

@DeleteMapping("/delete/{id}")
public void deleteCart(@PathVariable Long id) {
    cartRepository.deleteById(id);
}

@DeleteMapping("/clear/{email}")
public void clearCart(@PathVariable String email) {
    cartRepository.deleteByEmail(email);
}

}