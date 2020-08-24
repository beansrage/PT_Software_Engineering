package org.perscholas.inheritance.Interfaces;

// animal interface
// aquatic animal interface which inherits animal
// fish implements aquatic animal interface
public class AquaticAnimal implements Animal {
    @Override
    public void move() {
        System.out.println("I move with fins");
    }
    @Override
    public void walk() {
        System.out.println("I don't walk. I have fins");
    }
    @Override
    public void eat(String nameOfParam) {
        System.out.println("I eat " + nameOfParam);
    }
    @Override
    public String breathe() {
        return "I release carbon dioxide";
    }
    @Override
    public void naturalHabitat() {
        System.out.println("any body of water");
    }
}
