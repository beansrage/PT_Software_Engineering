package org.perscholas.objectpractice;

import org.perscholas.getandset.CarbonBasedLifeForm;

public class Runner {
    public static void main(String[] args) {
//        char character = 'a';
//        String s = "something";
//        Bob nameOfVar = new Bob();
//        System.out.println(nameOfVar.age);
        Wolf w = new Wolf(1200, "Black", "Howl" );
        System.out.println(w.color);
        Cat c = new Cat("Fat", "Main Coon", 12, 6 );
        System.out.println(c.name);

        CarbonBasedLifeForm carbonLife = new CarbonBasedLifeForm();
        carbonLife.setKingdom("plant kingdom");
        System.out.println(carbonLife.kingdom);

    }
}
