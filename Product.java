package LaptopProject.LaptopShop.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {

	@Id

	private long id;
	private String type;
	private String description;
	private String pname;
	private String model;
	private String price;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", type=" + type + ", description=" + description + ", pname=" + pname + ", model="
				+ model + ", price=" + price + "]";
	}
	public Product(long id, String type, String description, String pname, String model, String price) {
		super();
		this.id = id;
		this.type = type;
		this.description = description;
		this.pname = pname;
		this.model = model;
		this.price = price;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
