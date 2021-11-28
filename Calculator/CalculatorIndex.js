//getting the numbers on the screen and in a var
const numberButtons = document.querySelectorAll(".numbers")
const opratorButtons = document.querySelectorAll(".operator")
const decimalButton = document.querySelector(".decimal")
const acButton = document.querySelector(".all-clear")
const eqButton = document.querySelector(".equal-sign")
const calcScreen = document.querySelector(".calculator-screen")
let equation = ""
    //intalazing the operation
numberButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
        calcScreen.value += e.target.value
        equation = calcScreen.value
    })
)
opratorButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
        if (
            equation[equation.length - 1] !== "/" &&
            equation[equation.length - 1] !== "*" &&
            equation[equation.length - 1] !== "-" &&
            equation[equation.length - 1] !== "+"
        ) {
            calcScreen.value += e.target.value
            equation = calcScreen.value
        }
    })
)

decimalButton.addEventListener("click", (e) => {
    calcScreen.value += e.target.value
    equation = calcScreen.value
})

acButton.addEventListener("click", (e) => {
    calcScreen.value = ""
    equation = ""
})

eqButton.addEventListener("click", (e) => {
    calcScreen.value = eval(equation)
    equation = ""
})