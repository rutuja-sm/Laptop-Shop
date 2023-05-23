package LaptopProject.LaptopShop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import LaptopProject.LaptopShop.Dao.ProductDao;
import LaptopProject.LaptopShop.Entity.Product;

@Service
public class ProductServiceImple implements ProductService {
	@Autowired
	private ProductDao productdao;

	@Override
	public List<Product> getProduct() {
		return productdao.findAll();
	}

	@Override
	public Product getProduct(long productId) {
		return productdao.getOne(productId);
	}

	@Override
	public Product addProduct(Product product) {
		productdao.save(product);
		return product;
	}

	@Override
	public Product updateProduct(Product product) {
		productdao.save(product);
		return product;
	}

	@Override
	public void deleteProduct(long parseLong) {
		Product entity=productdao.getOne(parseLong);
		productdao.delete(entity);
	}

	

}
