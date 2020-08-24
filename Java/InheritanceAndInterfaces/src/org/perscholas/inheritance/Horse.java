package org.perscholas.inheritance;

//Animal
    //Horse
        //ponies
    //Doge

public class Horse extends Animal {

    public static void main(String[] args) {
        Horse horseObject = new Horse();
        horseObject.prance();
        horseObject.eat("apples");
    }

    public void run() {
        System.out.println("I am a horse that runs");
    }
    public void trots() {
        System.out.println("I am a horse that trots");
    }
    public void gallop() {
        System.out.println("I am a horse that gallops");
    }
    public void prance() {
        System.out.println("I am a horse that prances");
    }

}
