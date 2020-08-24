package org.perscholas.arrayexercises;

public class ArraysAndStuff {
//    public static void main(String[] args) {
//        /*
//        js => const arr = [1,2,3]
//        int[] arr = new int[] {}
//        datatype[] arr = new datatype[] {datatype,datatype,datatype};
//        */
//        int[] arr = new int[] {1,2,3};
//        //arr [0];
//        for(int i =0; i < arr.length; i++){
//            System.out.println(arr[i]);
//        }
//        String[] arrOfStrings = new String[] {"This", "Is", "It!" };
//        for(int j = 0; j < arrOfStrings.length; j++){
//            System.out.println(arrOfStrings[j]);
//        }
//    }


    /*  write a program that creates an array of integers with length of 3
    *   assign the values 1,2,3 to the indexes. print out each index
    *   using these values calculate the average value of array elements.
        *20,30,25,35,-16,60,-100   */
public static void main(String[] args) {
    int[]avgArr = new int[]{20, 30, 25, 35, -16, 60, -100};
    int avg = 0;
    for (int i = 0; i < avgArr.length; i++) {
        avg += avgArr[i];
    }
    System.out.println(avg/avgArr.length);
}

}
