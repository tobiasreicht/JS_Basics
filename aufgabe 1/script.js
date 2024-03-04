//Write a program that prints the numbers from 1 to 222 except for multiples of 5 where you have to print "Foo" and for the multiples of 7 where you have to print "Bar". For numbers which are multiples of both 5 and 7 print "FooBar". 

for (index = 1; index <=222; index++) 
{   

    if (index % 5 == 0 && index % 7 ==0) {
        console.log("foobar");
    }
    else if ((index % 5) ==0) {
        console.log("foo");
    }
    else if ((index % 7) ==0) {
        console.log("bar");
    }
    
    else {
        console.log(index);
    }

}