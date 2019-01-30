import java.util.Scanner;
class Main
{
  public static void main(String[] args)
  {
    int Count, TermCounter = 2, Product = 1, Counter;
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number upto which you want to print the series:");
    Count = sc.nextInt();
    System.out.print("The series upto " + Count + " is 1");
    for(TermCounter = 2; Product <= Count; TermCounter++)
    {
      Product = TermCounter;
      for(Counter = 1; Counter < TermCounter; Counter++)
      {
        Product = Product * TermCounter;
      }
      if(Product < Count)
      {
        System.out.printf(", %d", Product);
      }
    }
    System.out.print(".\n"); 
  }
}