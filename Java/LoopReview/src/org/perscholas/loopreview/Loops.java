package org.perscholas.loopreview;

public class Loops {

    //method called looping returns nothing
    // take in a parameter that will dictate when the loop will stop
    //so if parameter = 2-- for loop iterates from 0 - 200
    public static void looping(int rows) {
        //initial var js => let i = 0;
        //conditional
        //action after loop js => i++
        for (int i = 0; i < 5; i++) {
            System.out.println("*");
        }
        for(int x = 0; x<9; x++) {
            System.out.println('*');
        }
    }
    public static void main(String[] args) {
        looping( 10 );
    }
}
