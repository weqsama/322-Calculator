results = [];
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number2</th><th>Result</th></tr>");
while (true) {
    var x = prompt("Enter first value:");
    if (x !== null) { x = x.trim(); }
    if (x === "") { x = null; } // Takes whitespace off input and sets empty strings to null
    var y = prompt("Enter second value:");
    if (y !== null) { y = y.trim(); }
    if (y === "") { y = null; } // For this number too
    var operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator !== null) { operator = operator.trim(); }
    if (operator === "") { operator = null; } // And for the whitespace too you guessed it
    if (x === null || y === null) { // Cancelled numerical input
        alert("Operation cancelled. Missing input for x or y.");
        document.write("<tr><td>" + (x === null ? "null" : x) + "</td><td>" + operator + "</td><td>" + (y === null ? "null" : y) + "</td><td>Operation cancelled</td></tr>");
        break;
    }
    else if (isNaN(x) || isNaN(y)) { // If they aren't numbers you can't do math with them
        alert("Invalid input. Please enter numeric values for x and y.");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Invalid input</td></tr>");
        continue;
    }
    else if (operator === null) { // Cancelled operator input
        alert("Operation cancelled. Missing input for operator.");
        document.write("<tr><td>" + x + "</td><td>null</td><td>" + y + "</td><td>Operation cancelled</td></tr>");
        break;
    }
    else { // Do math
        switch (operator) { 
            case "+": // Addition
                var value = Number(x) + Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} + ${y} = ${value}`);
                results.push(value);
                break;
            case "-": // Subtraction
                var value = Number(x) - Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} - ${y} = ${value}`);
                results.push(value);
                break;
            case "*": // Multiplication
                var value = Number(x) * Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} * ${y} = ${value}`);
                results.push(value);
                break;
            case "/": // Division
                if (Number(y) === 0) {
                    alert("Error: Division by zero is not allowed.");
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Error: Division by zero</td></tr>");
                } else {
                    var value = Number(x) / Number(y);
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                    alert(`${x} / ${y} = ${value}`);
                    results.push(value);
                }
                break;
            case "%": // Modulo
                if (Number(y) === 0) {
                    alert("Error: Modulo by zero is not allowed.");
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Error: Modulo by zero</td></tr>");
                } else { 
                    var value = Number(x) % Number(y);
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                    alert(`${x} % ${y} = ${value}`);
                    results.push(value);
                }
                break;
            default:
                alert("Invalid operator. Please enter one of +, -, *, /, %.");
                break;
        }
    }
}
document.write("</table>");