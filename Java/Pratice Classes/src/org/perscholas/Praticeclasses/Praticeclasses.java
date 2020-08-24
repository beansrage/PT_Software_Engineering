package org.perscholas.Praticeclasses;

import java.util.Scanner;

public class Praticeclasses {

    //  Write a Java program that takes two numbers as input and display the product of two numbers.

/*   public static void main(String[] args) {
//        Scanner in = new Scanner(System.in);
//
//        System.out.println("Input first number");
//        int num1 = in.nextInt();
//
//        System.out.println("Input Second number");
//        int num2 = in.nextInt();
//
      System.out.println(num1 + " x " + num2 + " = " + num1 * num2);

} */

    /*   Write a Java program that reads a number in inches, converts it to meters.
Note: One inch is 0.0254 meter. Example: Input a value for inch: 1000 Expected Output: 1000.0 inch is 25.4 meters  */

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Input value for inch");
            double inch = input.nextDouble();
            double meters = inch * 0.0254;
        System.out.println(inch + " inch is " + meters + " meters ");

    }

}
