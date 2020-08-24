package org.perscholas.inheritance;

public class Wolf extends Dog{
    public static void main(String[] args) {
        Wolf wolf = new Wolf();
        wolf.eat("carrion");
    }

    public void howl() {
        System.out.println("Awooooooo");
    }
    public void hunt() {
        System.out.println("We scavenge for food");
    }
    public void packs() {
        System.out.println("I am with group");
    }
}
