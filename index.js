// Calculate function Starts
function cal() {
  // Get Elements by their Id's
  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  var operator = document.getElementById("operator").value;
  var result = document.getElementById("res").value;

  // Addition
  if (operator == "+") {
    var res = parseInt(first) + parseInt(second);
  }

  // Subtraction
  if (operator == "-") {
    var res = parseInt(first) - parseInt(second);
  }

  // Multiplication
  if (operator == "×") {
    var res = parseInt(first) * parseInt(second);
  }

  // Division
  if (operator == "/") {
    var res = parseInt(first) / parseInt(second);
  }

  // Modulo Division
  if (operator == "%") {
    var res = parseInt(first) % parseInt(second);
  }

  // Power Calculation
  if (operator == "pow") {
    var res = Math.pow(parseInt(first), parseInt(second));
  }

  // Square Root of first input box
  if (operator == "sqrt") {
    var res = Math.sqrt(parseInt(first));
  }

  // Age Calculation
  if (operator === "age") {
    var birthDate = new Date(first);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    var res = "You Are " + age + " Year Old";
  }

  // Discount Calculation
  if (operator == "disc") {
    var res =
      parseFloat(first) - (parseFloat(first) * parseFloat(second)) / 100;
    var youSave = parseFloat(first) - res;
    document.getElementById("savePrice").innerText =
      "You Saved " + youSave + "/-";
  } else {
    document.getElementById("savePrice").innerText = "";
  }

  // Absolute Calculatation
  if (operator == "abso") {
    var res = Math.abs(parseFloat(first));
  }

  // GST Calculatation
  if (operator == "gst") {
    var gstAmount = (parseFloat(first) * parseFloat(second)) / 100;
    var res = parseFloat(first) + gstAmount;
  }

  // Date Calculation
  if (operator == "date") {
    const daysToAdd = parseInt(document.getElementById("first").value);
    const dateInput = document.getElementById("second").valueAsDate;

    if (!isNaN(daysToAdd) && dateInput) {
      const resultDate = new Date(dateInput);
      resultDate.setDate(resultDate.getDate() + daysToAdd);
      var res = resultDate.toDateString();
      document.getElementById("clc").innerText =
        first + " Days After Your Date";
    } else {
      var res = "Please enter valid values.";
    }
  }

  // Loan Calculation
  if (operator == "loan") {
    const loanAmount = parseFloat(document.getElementById("first").value);
    const interestRate =
      parseFloat(document.getElementById("second").value) / 100;
    const loanTermMonths = parseFloat(document.getElementById("res").value);

    if (
      !isNaN(loanAmount) &&
      !isNaN(interestRate) &&
      !isNaN(loanTermMonths) &&
      loanAmount > 0 &&
      interestRate > 0 &&
      loanTermMonths > 0
    ) {
      const monthlyInterestRate = interestRate / 12;
      const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
      document.getElementById("savePrice").textContent =
        "Monthly Payment: " + monthlyPayment.toFixed(2) + "/-";
    } else {
      document.getElementById("savePrice").textContent =
        "Please enter valid values.";
    }
  }

  // Date to Date Calculation
  if (operator == "dte") {
    // Get the values of the two date input boxes
    const date1Input = document.getElementById("first").value;
    const date2Input = document.getElementById("second").value;

    // Parse the input values into JavaScript Date objects
    const date1 = new Date(date1Input);
    const date2 = new Date(date2Input);

    // Calculate the difference in years, months, and days
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    let monthsDiff = date2.getMonth() - date1.getMonth();
    let daysDiff = date2.getDate() - date1.getDate();

    // Adjust for cases where the day of date2 is earlier than date1
    if (daysDiff < 0) {
      monthsDiff--;
      daysDiff += new Date(
        date1.getFullYear(),
        date1.getMonth() + 1,
        0
      ).getDate();
    }

    // Adjust for cases where the month of date2 is earlier than date1
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    // Display the result
    const resultElement = document.getElementById("result");
    var res = `${yearsDiff} Years, ${monthsDiff} Months, ${daysDiff} Days.`;
  }

  // Print the result to the web page
  document.getElementById("res").value = res;
  document.getElementById("res").style.color = "green";
}
// Calculate function Ends

// Dark & Light Mode function Starts
const toggle = document.getElementById("theme");
const body = document.body;
const container = document.querySelector(".container");
const footer = document.querySelector("footer");

let isLightTheme = true;

toggle.addEventListener("click", function () {
  isLightTheme = !isLightTheme;

  if (isLightTheme) {
    setLightTheme();
    toggle.innerText = "Dark";
  } else {
    setDarkTheme();
    toggle.innerText = "Light";
  }
});

function setLightTheme() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  toggle.style.color = "white";
  container.style.borderColor = "black";
  body.style.transition = "1s";
}

function setDarkTheme() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  toggle.style.color = "white";
  container.style.borderColor = "white";
  footer.style.color = "white";
  body.style.transition = "1s";
}

// Set initial theme
setLightTheme();
// Dark & Light Mode function Ends

// Function to change Elements according to user selection Starts
function changeInputType() {
  var operator = document.getElementById("operator").value;
  var firstInput = document.getElementById("first");
  var secondInput = document.getElementById("second");
  var save = document.getElementById("savePrice");
  var resInput = document.getElementById("res");

  // Onchange according to Age
  if (operator == "age") {
    firstInput.type = "date";
    document.getElementById("sc").innerText = "Avoid This Input Box";
    secondInput.readOnly = true;
    document.getElementById("fs").innerText = "Enter Full Date of Birth";
    document.getElementById("clc").innerText = "Your Age";
  }

  // Else part
  else {
    firstInput.type = "number";
    secondInput.readOnly = false;
    document.getElementById("sc").innerText = "Enter Second Addend";
    document.getElementById("clc").innerText = "Sum";
    document.getElementById("fs").innerText = "Enter First Addend";
  }

  // Onchange according to Absolute
  if (operator == "abso") {
    document.getElementById("sc").innerText = "Avoid This Input Box";
    document.getElementById("fs").innerText = "Enter Absolute Value";
    secondInput.readOnly = true;
    document.getElementById("clc").innerText = "Absolute Value";
  }

  // Onchange according to Square Root
  if (operator == "sqrt") {
    document.getElementById("sc").innerText = "Avoid This Input Box";
    document.getElementById("fs").innerText = "Enter Positive Number";
    secondInput.readOnly = true;
    document.getElementById("clc").innerText = "Square Root Value";
  }

  // Onchange according to Discount
  if (operator == "disc") {
    document.getElementById("sc").innerText = "Enter Discount (% off)";
    document.getElementById("fs").innerText = "Enter Original Price";
    document.getElementById("clc").innerText = "Final Price";
    document.getElementById("savePrice").style.color = "green";
  }

  // Onchange according to Pow
  if (operator == "pow") {
    document.getElementById("sc").innerText = "Enter Exponent";
    document.getElementById("fs").innerText = "Enter Base";
    document.getElementById("clc").innerText = "Power";
  }

  // Onchange according to Modulo
  if (operator == "%") {
    document.getElementById("sc").innerText = "Enter Divisior";
    document.getElementById("fs").innerText = "Enter Divident";
    document.getElementById("clc").innerText = "Remainder";
  }

  // Onchange according to Division
  if (operator == "/") {
    document.getElementById("sc").innerText = "Enter Divisior";
    document.getElementById("fs").innerText = "Enter Divident";
    document.getElementById("clc").innerText = "Quotient";
  }

  // Onchange according to Multiplication
  if (operator == "×") {
    document.getElementById("sc").innerText = "Enter Multiplier";
    document.getElementById("fs").innerText = "Enter Multiplicand";
    document.getElementById("clc").innerText = "Product";
  }

  // Onchange according to Subtraction
  if (operator == "-") {
    document.getElementById("sc").innerText = "Enter Subtrahend";
    document.getElementById("fs").innerText = "Enter Minuend";
    document.getElementById("clc").innerText = "Difference";
  }

  // Onchange according to GST
  if (operator == "gst") {
    document.getElementById("sc").innerText = "Enter GST (%)";
    document.getElementById("fs").innerText = "Enter Original Price";
    document.getElementById("clc").innerText = "Final Price";
  }

  // Onchange according to Date
  if (operator == "date") {
    document.getElementById("sc").innerText = "Enter Your Date";
    document.getElementById("fs").innerText = "How Many Days After";
    document.getElementById("clc").innerText = "Your Date";
    secondInput.type = "date";
  } else {
    secondInput.type = "number";
  }

  // Onchange according to Loan
  if (operator == "loan") {
    document.getElementById("sc").innerText = "Interest Rate (% per year)";
    document.getElementById("fs").innerText = "Loan Amount (Principal)";
    document.getElementById("clc").innerText = "Loan Tenure (Type Months Only)";
    resInput.type = "number";
    resInput.readOnly = false;
    document.getElementById("res").style.color = "black";
    document.getElementById("res").style.borderLeftColor = "blue";
    document.getElementById("res").style.borderRightColor = "blue";
    document.getElementById("res").style.borderTopColor = "blue";
    document.getElementById("res").style.borderBottomColor = "blue";
    document.getElementById("res").style.color = "black";
    document.getElementById("savePrice").style.color = "green";
    const inputElement = document.getElementById("res");
    inputElement.placeholder = "Enter Terms";
  } else {
    resInput.readOnly = true;
    const inputElement = document.getElementById("res");
    inputElement.placeholder = "Result Box";
    document.getElementById("res").style.color = "black";
    document.getElementById("res").style.borderLeftColor = "green";
    document.getElementById("res").style.borderRightColor = "green";
    document.getElementById("res").style.borderTopColor = "green";
    document.getElementById("res").style.borderBottomColor = "green";
    document.getElementById("res").style.color = "green";
  }

  if (operator == "dte") {
    document.getElementById("sc").innerText = "Current Date";
    document.getElementById("fs").innerText = "Date Of Birth";
    document.getElementById("clc").innerText = "Your Age Data";
    secondInput.type = "date";
    firstInput.type = "date";
    // document.getElementById('res').style.fontSize = '10px';
  }
}
// Function to change Elements according to user selection Ends

// Function to handle Enter key press starts
function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    // Trigger the "Calculate" button click event
    document.getElementById("btn").click();
  }
}

// Add an event listener to the document to listen for Enter key press
document.addEventListener("keyup", handleEnterKeyPress);
// Function to handle Enter key press ends

document.addEventListener("keypress", function (event) {
  // Get the pressed key
  const keyPressed = event.key;

  // Define a mapping of keys to operators
  const operatorMapping = {
    "+": "+",
    "-": "-",
    "*": "×",
    "/": "/",
    s: "sqrt",
    d: "disc",
    a: "age",
    A: "abso",
    g: "gst",
    l: "loan",
    p: "pow",
  };

  // Check if the pressed key corresponds to an operator
  if (operatorMapping.hasOwnProperty(keyPressed)) {
    // Set the selected operator in the dropdown
    const operatorDropdown = document.getElementById("operator");
    operatorDropdown.value = operatorMapping[keyPressed];

    // Optionally, you can trigger the changeInputType function to update the UI
    changeInputType();
  }
});

// Clock Function Starts
function showTime() {
  //Time Import
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var session = "PM";
  // Daily Time 12
  if (h > 12) {
    h = h - 12;
  }
  // AM PM Formating
  if (h >= 12) {
    session = "AM";
  }
  // Add 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  // time
  var time = "TIME [ " + h + " : " + m + " : " + s + " " + session + " ]";
  // Time Print in the body
  document.getElementsByTagName("h1")[0].innerText = time;
  setTimeout(showTime, 1000);
}

// function modify() {
//   document.getElementById("clock").style.color = "red";
// }
// function unmodify() {
//   document.getElementById("clock").style.color = "rgb(6, 134, 31)";
// }
// Clock Function Ends
