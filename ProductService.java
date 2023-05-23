package LaptopProject.LaptopShop.Service;

import java.util.List;

import LaptopProject.LaptopShop.Entity.Product;

public interface ProductService
{
	
	public List<Product> getProduct();
	
	public Product getProduct(long productId);
	
	public Product addProduct(Product product);
	
	public Product updateProduct(Product product);
	
	public void deleteProduct(long parseLong);

	

}
