package LaptopProject.LaptopShop.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import LaptopProject.LaptopShop.Entity.Product;

public interface ProductDao extends JpaRepository<Product, Long>
{

}
