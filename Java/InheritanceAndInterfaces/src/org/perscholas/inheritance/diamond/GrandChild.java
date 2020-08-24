package org.perscholas.inheritance.diamond;

//public class GrandChild implements Interface1, Interface2

public class GrandChild extends DrHouse {
    public static void main(String[] args) {
        GrandChild grandChild = new GrandChild();
        grandChild.walk();
    }
}
