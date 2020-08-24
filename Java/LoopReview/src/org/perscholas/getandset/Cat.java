package org.perscholas.getandset;

public class Cat {
    public String name;
    public String color;
    public int weight;
    public int age;
    //constructor here

    // getters and setters
    // method that takes in a param
    // then use that param and set it equal to the name
    // variable within this class
    public void setName(String nameParam) {
        this.name = nameParam;
    }

    public String getName() {
        return name;
    }

    public void setColor(String colorParam) {
        this.color = colorParam;
    }

    public String getColor() {
        return color;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getWeight() {
        return weight;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}