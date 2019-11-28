package team_random.DBProject.model;

import org.w3c.dom.Text;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.File;

@Entity
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private int price;
    private String category;
    private int inventory;
    private String description;
    private byte[] picture;

    public int getId(){
        return id;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public void setPrice(int price){
        this.price = price;
    }

    public int getPrice(){
        return price;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public String getCategory(){
        return this.category;
    }

    public void setInventory(int inventory){
        this.inventory = inventory;
    }

    public int getInventory(){
        return inventory;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getDescription(){
        return description;
    }

    public void setPicture(byte[] picture){
        this.picture = picture;
    }

    public byte[] getPicture(){
        return picture;
    }

    public String toString(){
        return "Name:" + getName()+",Price:"+getPrice()+",Category:"+getCategory()+",Inventory:"+getInventory();
    }
}
