package org.perscholas.inheritance;

public class Dog extends Animal{
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat("bones");
    }
    public void growl() {
        System.out.println("I growl when upset");
    }

    public void bark() {
        System.out.println("I bark at all");
    }

}
