
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

// Task2

function calculateFutureAge(year){
    const d=new Date();
    let date=prompt("Enter your birth year");
    if(date!=""){
    let age=2025-date;
    console.log(`In ${2050}, you will be ${ag}`)
    }else{
        console.log("Invalid birthyear")
    }
}