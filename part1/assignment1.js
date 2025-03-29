
let name=prompt("Enter your name:");
let age=prompt("Enter your age:");
let ans=prompt("Are you a student? (yes/no):")==true;

age=Number(age);

if(!name || isNaN(age)){
    console.log("Invalid input. Please enter a valid name and age.");
}
else{
    console.log("Name: "+name+" ("+typeof name+")");
    console.log("Age: "+age+" ("+typeof age+")");
    console.log("Student: "+ans+" ("+typeof ans+")");
}
