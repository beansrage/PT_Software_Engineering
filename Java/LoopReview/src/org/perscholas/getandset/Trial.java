package org.perscholas.getandset;

public class Trial {
    public static void main(String[] args) {
//        // here we will use that cat class with getters and setters.
//        String name = "Beans";
//        //name
//        Cat catVarName = new Cat();
//        System.out.println(catVarName.age); // -> 0 = nothing.
//        catVarName.setAge(6);
//        catVarName.setColor("Main coon");
//        catVarName.setName("Fat");
//        catVarName.setWeight(200);
//
//        System.out.println(catVarName.getName());
//        System.out.println(catVarName.getColor());

        CarbonBasedLifeForm plant = new CarbonBasedLifeForm();
        plant.setKingdom("Plant");
        System.out.println(plant.getKingdom());
//        plant.setKingdom("Animal");
//        System.out.println(plant.getKingdom());
//        System.out.println(plant.kingdom);

    }
}
