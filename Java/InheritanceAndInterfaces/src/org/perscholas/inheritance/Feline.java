package org.perscholas.inheritance;
//make feline class
//extends from animal
// extend from feline class itself

//Animal
    //Feline
        //new class
public class Feline extends Animal{
    public static void main(String[] args) {
        Feline cat = new Feline();
        cat.meow();
        cat.eat("catNip");
    }

    public void meow(){
        System.out.println("MEOW");
    }

    public void hiss(){
        System.out.println("HISSSSSS");
    }

}
