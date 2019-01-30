print("Enter the number upto which you want to print the series:", end = '')
Count = int(input())
print("The series upto {0} is 1 " .format(Count), end ="")
TermCounter = 2
Product = 1
while(Product <= Count):
  Product = TermCounter
  for Counter in range (1, TermCounter):
    Product = Product * TermCounter
  if(Product < Count):
    print(", {0}".format(Product), end = ' ')
  TermCounter = TermCounter + 1
print('.\n', end = "")  
