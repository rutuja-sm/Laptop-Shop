package LaptopProject.LaptopShop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import LaptopProject.LaptopShop.Entity.Product;
import LaptopProject.LaptopShop.Service.ProductService;



@RestController
@CrossOrigin(allowedHeaders = "*")
public class ProductController {
	@Autowired
	private ProductService productservice;

	@GetMapping("/home")
	public String Home() {
		return "Welcome to Courses Application";
	}

	// get all the courses using GET Request
	@GetMapping("/product")
	public List<Product> getProduct() {
		return this.productservice.getProduct();
	}

	// get single course using GET Request
	@GetMapping("/product/{productId}")
	public Product getProduct(@PathVariable String productId) {
		return this.productservice.getProduct(Long.parseLong(productId));
	}

	// add course using POST Request
		@PostMapping("/product")
		public Product addProduct(@RequestBody Product product) {
			return this.productservice.addProduct(product);

	}

	// update course using PUT Request
	@PutMapping("/product")
	public Product updateProduct(@RequestBody Product product) {
		return this.productservice.updateProduct(product);
	}

	// delete the course using DELETE Request
	@DeleteMapping("/product/{productId}")
	public void deleteProduct(@PathVariable String productId) {
		this.productservice.deleteProduct(Long.parseLong(productId));
	}

}
