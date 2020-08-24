package org.perscholas.inheritance.Interfaces;
//turn this animal class to an interface
// move -> method printing line describing how animal moves
//walk -> method printing how animal walks (if does)
//eat -> method printing how animal eats
//breathe -> method printing how animal breathes
//natural habitat -> method printing animals natural habitat
public interface Animal {
    public void move();
    public void walk();
    public void eat(String nameOfParam);
    public void breathe();
    public void naturalHabitat();
}
