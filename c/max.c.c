#include <stdio.h>
int main(void)
{
  int Counter, Number[10], Maximum;
  printf("To find the maximum of ten numbers, enter the numbers:");
  for(Counter = 1; Counter <= 10; Counter++)
  {
    scanf("%d", &Number[Counter]);
  }
  Maximum = Number[Counter];
  for(Counter = 1; Counter <= 10; Counter++)
  {
    if(Maximum <= Number[Counter])
    {
      Maximum = Number[Counter];
    }
  }
  printf("The maximum of given ten numbers is %d.", Maximum);
  return 0;
}