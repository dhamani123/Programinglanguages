Number = []
print("To find maximum among ten numbers")
for Counter in range(1,11):
  Number.append(int(input("Enter the {0} number:" .format(Counter))))
Maximum = Number[0]
for Counter in range(0, 10):
  if(Maximum < Number[Counter]):
    Maximum = Number[Counter]
print("The maximum of given ten numbers is {0}." .format(Maximum))
