// 1. POSITIVE / NEGATIVE / ZERO
function checkNumber() {
  let num = document.getElementById("num").value;

  if (num > 0) {
    document.getElementById("numResult").innerText = "Positive Number";
  } else if (num < 0) {
    document.getElementById("numResult").innerText = "Negative Number";
  } else {
    document.getElementById("numResult").innerText = "Zero";
  }
}

// 2. VOTING
function checkVoting() {
  let age = document.getElementById("age").value;

  if (age >= 18) {
    document.getElementById("voteResult").innerText = "Eligible";
  } else {
    document.getElementById("voteResult").innerText = "Not Eligible";
  }
}

// 3. LARGEST NUMBER
function largest() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  if (a > b) {
    document.getElementById("largestResult").innerText = "A is larger";
  } else {
    document.getElementById("largestResult").innerText = "B is larger";
  }
}

// 4. GRADE SYSTEM
function grade() {
  let marks = document.getElementById("marks").value;

  if (marks >= 90) {
    result = "Grade A";
  } else if (marks >= 70) {
    result = "Grade B";
  } else if (marks >= 50) {
    result = "Grade C";
  } else {
    result = "Fail";
  }

  document.getElementById("gradeResult").innerText = result;
}

// 5. LEAP YEAR
function leapYear() {
  let year = document.getElementById("year").value;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.getElementById("yearResult").innerText = "Leap Year";
  } else {
    document.getElementById("yearResult").innerText = "Not Leap Year";
  }
}

// 6. GREETING (TIME BASED)
function greet() {
  let hour = new Date().getHours();

  if (hour < 12) {
    msg = "Good Morning ☀️";
  } else if (hour < 18) {
    msg = "Good Afternoon 🌤️";
  } else {
    msg = "Good Evening 🌙";
  }

  document.getElementById("greetResult").innerText = msg;
}
