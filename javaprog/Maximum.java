import java.util.Scanner;
import java.util.Scanner;
class Main
{
  public static void main(String[] args)
  {
    int Counter, Maximum;
    java.util.Scanner in = new java.util.Scanner(System.in);
    int[] array = new int[11];
    System.out.println("To find the maximum of ten numbers,");
    for(Counter = 1; Counter < array.length; Counter++)
    {
      System.out.print("Enter the " + Counter + " number");
      array[Counter] = in.nextInt();
    }
    Maximum = array[0];
    for(Counter = 0; Counter < array.length; Counter++)
    {
      if(Maximum <= array[Counter])
      {
        Maximum = array[Counter];
      }
    }
    System.out.printf("The maximum of given ten numbers is %d.\n", Maximum);
  }
}