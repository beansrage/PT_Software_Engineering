package org.perscholas.inheritance.diamond;

import org.perscholas.inheritance.Animal;

public class Human extends Animal {
    //method overriding
    //we are going to override the move method
    // move method -> souts -> "string"
    //change the move method -> to be a little particular
//    @Override // called annotations in java // -> metadata = information about information
//    public void move(){
//        System.out.println("Bi-pedal");
//    }
//
//    @Override // this lets you know if you're
//    // correctly overriding the method
//    public void eat(String food){
//        System.out.println("I cook, then eat my food");
//    }

    public void walk() {
        System.out.println("I can walk");
    }

    public static void main(String[] args) {
        Human human = new Human();
        human.move();
        human.eat("tacos");
    }


}
