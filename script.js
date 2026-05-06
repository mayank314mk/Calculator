let expression = "";
let allButtons = document.querySelectorAll(".button");
for (let index = 0; index < Array.from(allButtons).length; index++) {
    const element = Array.from(allButtons)[index];
    element.addEventListener("click", () => {
        if (element.innerHTML == '=') {
            try {
                if (expression != "") {
                    document.querySelector(".result").innerHTML = eval(expression.replaceAll("×", "*"));
                }
            }
            catch {
                document.querySelector(".result").innerHTML = "Invalid Expression"
            }
            expression = "";
        }
        else if (element.innerHTML == 'AC') {
            expression = "";
            document.querySelector(".result").innerHTML = expression;
        }
        else if (element.innerHTML == 'C') {
            expression = expression.slice(0, -1);
            document.querySelector(".result").innerHTML = expression;
        }
        else if (element.innerHTML == '/') {
            if (expression.length != 0) {
                if (expression.at(-1) != '/') {
                    if (expression.at(-1) == '+' || expression.at(-1) == '-' || expression.at(-1) == '×') {
                        expression = expression.slice(0, -1) + '/';
                        document.querySelector(".result").innerHTML = expression;
                    }
                    else {
                        expression = expression + element.innerHTML;
                        document.querySelector(".result").innerHTML = expression;
                    }
                }
            }
        }
        else if (element.innerHTML == '×') {
            if (expression.length != 0) {
                if (expression.at(-1) != '×') {
                    if (expression.at(-1) == '+' || expression.at(-1) == '-' || expression.at(-1) == '/') {
                        expression = expression.slice(0, -1) + '×';
                        document.querySelector(".result").innerHTML = expression;
                    }
                    else {
                        expression = expression + element.innerHTML;
                        document.querySelector(".result").innerHTML = expression;
                    }
                }
            }
        }
        else if (element.innerHTML == '-') {
            if (expression.at(-1) != '-') {
                if (expression.at(-1) == '+' || expression.at(-1) == '/' || expression.at(-1) == '×') {
                    expression = expression.slice(0, -1) + '-';
                    document.querySelector(".result").innerHTML = expression;
                }
                else {
                    expression = expression + element.innerHTML;
                    document.querySelector(".result").innerHTML = expression;
                }
            }
        }
        else if (element.innerHTML == '+') {
            if (expression.length != 0) {
                if (expression.at(-1) != '+') {
                    if (expression.at(-1) == '/' || expression.at(-1) == '-' || expression.at(-1) == '×') {
                        expression = expression.slice(0, -1) + '+';
                        document.querySelector(".result").innerHTML = expression;
                    }
                    else {
                        expression = expression + element.innerHTML;
                        document.querySelector(".result").innerHTML = expression;
                    }
                }
            }
        }
        else {
            expression = expression + element.innerHTML;
            document.querySelector(".result").innerHTML = expression;
        }
    })
}