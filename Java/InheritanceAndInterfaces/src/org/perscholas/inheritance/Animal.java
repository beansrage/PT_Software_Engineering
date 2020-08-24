package org.perscholas.inheritance;

public class Animal {
    //turn this animal class to an interface
    // move -> method printing line describing how animal moves
    //walk -> method printing how animal walks (if does)
    //eat -> method printing how animal eats
    //breathe -> method printing how animal breathes
    //natural habitat -> method printing animals natural habitat

    public void eat(String food){
        System.out.println("I am eating this -> " + food);
    }

    public void sleeping(boolean bool){
        if(bool)
            System.out.println("I am sleeping, leave me alone");
        else
            System.out.println("I am awake");
    }

    public void move() {
        System.out.println("I move in some way.");
    }
}
