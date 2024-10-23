const myWife = "Ayomide";

const myAge = 18;

const isMarried = true;

let  myFuturewife;

 myFuturewife = "Grace"

let mywhatever = null;





let students = ["kimi", "victor", "ella", "precious", "jomi"];

let updatestudents = students.push("destiny");

let removeLastStudent = students.pop();

let removestudent = students.splice(2, 1);

console.log("students:", students);

function numberAdder (a, b){
    return (a + b);
}

console.log(numberAdder(6,100))


function multiplynumberAdder (...numbers){
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(multiplynumberAdder(6,100,50,100,))

const userName = "princess taraba";

const firstName = userName.split(' ')[0];

const lastname = userName.split(' ')[1];

const initials = `${firstName[1].toUpperCase()}${lastname[1].toUpperCase()}`

console.log('firstName:', firstName)
console.log('lastname:', lastname)
console.log('initials:',initials)




const myNav = document.getElementById('myNav');
const openNav = document.getElementById('openBtn');
const closeNav = document.getElementById('closeBtn');

function hidenav(){
    if(myNav.style.display === "flex"){
        myNav.style.style = "none"
    }

    else{
        myNav.style.display = "flex"
    }
}

openNav.addEventListener('click', hideNav);
closeNav.addEventListener('click',hideNav)