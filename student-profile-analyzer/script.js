function analyzeStudent(){
let name=(document.getElementById("name").value);
let age=(document.getElementById("age").value);
let marks =(document.getElementById("marks").value);
let grade;
let result;

if (marks>=90){
    grade="A";
    result="Pass";
}else if (marks>=70){
    grade="B";
    result="Pass"; 
}else if(marks>=50){
    grade="C";
    result="Pass";
}else{
    grade="F";
    result="Fail";
}

let ageStatus = (age>=18)? "Adult": "Minor";
let evenOdd = (marks%2===0)? "Even" : "Odd";

//Show in browser

document.getElementById("output").innerHTML=`
<h3>Student Profile</h3>
<p><b>Name:</b>${name}</p>
<p><b>Age:</b>${age} (${ageStatus})</p>
<p><b>Marks:</b> ${marks}</p>
<p><b>Grade:</b> ${grade}</p>
<p><b>Result:</b> ${result}</p>
`;
}
