var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
print("Upto how many series do you want to print?");
count = readln();
var ref = "";
var term1 = 1;
var Termcounter = 1;
var term2 = (Termcounter + 1);
var final = 1;
while(final <= count)
{
  for(Loopcounter = 1; Loopcounter <= Termcounter; Loopcounter++)
  {
    term1 = Termcounter * term1;
    term2 = term2 * (Termcounter + 1) ;
  }
  final = term2;
  ref +=  " " + term1 ;
  term1 = 1;
  Termcounter += 1;
  term2 = (Termcounter + 1);
}
print("The series upto " + count + " are " + ref + ".");