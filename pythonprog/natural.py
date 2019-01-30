Number = int(input("Enter the number upto which you want to print natural numbers:"))
print("The first {0} natural numbers are" .format(Number), end = '')
for i in range(1, Number + 1):
  print('',i, end = '')
print(end = '.\n')