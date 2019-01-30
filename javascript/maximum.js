var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
print("Enter any 10 numbers:");
 Number1 = readln();
var Count = new Array(10);
var ref = "";
//var Max = 0;
Count[1] = Number1;
var Max = Number1;
for(Counter = 2; Counter < 11; Counter++)
{
  print("Enter next numbers:")
  Number1 = readln();
  Count[Counter] = Number1;
  ref += " " + Count[Counter];
}
for(Counter = 1; Counter < 11; Counter++)
{
  if( Max < Count[Counter])
  {
    Max = Count[Counter];
  }
}
print("The maximum number of 10 numbers is " + Max + ".");

