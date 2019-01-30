var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
print("Enter a number upto which you would like to print natural number");
Count = readln();
Natural_numbers = "";
for (Counter = 1; Counter <= Count; Counter++)
{
  Natural_numbers += " " + Counter;
}
print("The first " + Count + " natural numbers are " + Natural_numbers + ".");

