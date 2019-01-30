import java.util.Scanner;
class Main
{
  public static void main(String[] args)
  {
    int Count, Counter;
    
    System.out.print("Enter the number upto which you want to print natural numbers:");
    Scanner in = new Scanner(System.in);
    Count = in.nextInt();
    System.out.print("The first " + Count + " natural numbers are");
    for(Counter = 1; Counter <= Count; Counter++)
    {
      System.out.print(" " + Counter);
    }
    System.out.print(".\n");
  }
}