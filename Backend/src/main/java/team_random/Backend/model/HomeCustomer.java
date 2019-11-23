package team_random.Backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Home_Customers")
public class HomeCustomer{
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String password;
    private String address;
    private String marriage_status;
    private int age;
    private String gender;
    private int income;
    public HomeCustomer(){
        super();
    }

    public void setId(int id){this.id = id;}

    public int getId(){ return id;}

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getPassword(){
        return this.password;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getAddress(){
        return this.address;
    }

    public void setMarriage_status(String status){
        marriage_status = status;
    }

    public String getMarriage_status(){
        return this.marriage_status;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int getAge(){
        return this.age;
    }

    public void setGender(String gender){
        this.gender = gender;
    }

    public String getGender(){
        return this.gender;
    }

    public void setIncome(int income){
        this.income = income;
    }

    public int getIncome(){
        return this.income;
    }
}