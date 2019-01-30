/* Hello World program */

#include<stdio.h>
int main(void) 
{
 int Count, TermCounter = 2, Product, Counter;
 printf("Enter the number upto which you want to print the series:");
 scanf("%d", &Count);
 printf("The series upto %d is 1", Count);
 for(TermCounter = 2; Product <= Count; TermCounter++)
 {
   Product = TermCounter;
   for(Counter = 1; Counter < TermCounter; Counter++)
   {
     Product = Product * TermCounter;
   }
   if(Product < Count)
   {
     printf(", %d", Product);
   }
 }
 printf(".\n"); 
 return 0;
}


