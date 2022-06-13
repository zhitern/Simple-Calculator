const numBtnList = document.querySelectorAll(".numBtn");
const opBtnList = document.querySelectorAll(".opBtn");
const output = document.querySelector(".calcOutput");
output.innerHTML = '0';
var prevValue = 0; //in calculation, this will be the lhs. the a of a + b
var currentValue = 0; //in calculation, this will be the rhs. the b of a + b
var currentOperator = '';

var i;
for (i = 0; i < numBtnList.length; ++i) 
{
    numBtnList[i].addEventListener('click', numClicked);
}
for (i = 0; i < opBtnList.length; ++i)
{
    opBtnList[i].addEventListener('click', opClicked);
}

function numClicked() {
    number = parseInt(this.innerHTML);
    if (number != NaN)
    {
        currentValue *= 10;
        currentValue += number;

        updateDisplay()
    }
}

function opClicked() {
    opr = this.innerHTML;
    switch(opr)
    {
        case '+':
        case '-':
        case 'x':
        case 'X':
        case '*':
        case '/':
            if (currentOperator != '' && currentValue != 0) //if a previous operation exists, e.g. 1+2+3+...
            {
                prevValue = calculate(prevValue, currentValue, currentOperator);
            }
            else if (currentValue != 0)
            {
                prevValue = currentValue;
            }
            currentValue = 0;
            currentOperator = opr;

            updateDisplay()
            break;

        case '.':
        case '=':
            if (currentOperator == '/' && currentValue == 0)
            {
                alert('Error, attempting to divide by zero. Please dont. please.')
            }
            else if (currentOperator != '')
            {
                currentValue = calculate(prevValue, currentValue, currentOperator);
                prevValue = 0;
                currentOperator = '';

                updateDisplay();
            }
            break;

        default: break;
    }
}

function calculate(a, b, operator)
{
    switch (operator)
    {
        case '+': return a + b;
        case '-': return a - b;
        case '*': 
        case 'x':
        case 'X':
            return a * b;
        case '/': return a / b;

        default: break;
    }
}

function updateDisplay()
{
    var outputString = "";
    if (currentOperator != '')
    {
        outputString += prevValue.toString();
    }
    outputString += ' ' + currentOperator + ' ';
    outputString += currentValue;
    output.innerHTML = outputString;
}