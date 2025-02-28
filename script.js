let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
let del = document.getElementById("#del")
let displayValue = "";
let a = 0, b = 0, opr = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let buttonText = button.innerText;

        if (buttonText === "AC") {
            displayValue = "";
            a = b = 0;
            opr = null;
            display.innerText = "0";
        } else if (buttonText === "+" || buttonText === "-" || buttonText === "x" || buttonText === "/" || buttonText === "%") {
            a = parseFloat(displayValue);
            opr = buttonText;
            displayValue = "";
        }

        else if (buttonText === "DEL") {
          displayValue =  displayValue.slice(0, -1);
          display.innerText = displayValue;

        }

        
        
        else if (buttonText === "=") {
            b = parseFloat(displayValue);
            if (opr === "+") {
                displayValue = (a + b).toString();
            } else if (opr === "-") {
                displayValue = (a - b).toString();
            } else if (opr === "x") {
                displayValue = (a * b).toString();
            } else if (opr === "/") {
                displayValue = (a / b).toString();
            }  else if (opr === "%") {
                displayValue = (a / b).toString();
            }
            display.innerText = displayValue;
            a = b = 0;
            opr = null;
        } else {
            displayValue += buttonText;
            display.innerText = displayValue;
            

        }
    });
});
