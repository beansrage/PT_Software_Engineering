package org.perscholas.inheritance.diamond;
//human class already has a walk method

public class DrHouse extends Human{
    @Override
    public void walk() {
        System.out.println(" I use a cane to walk");
    }

}
