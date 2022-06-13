const numBtnList = document.querySelectorAll(".numBtn");
const opBtnList = document.querySelectorAll(".opBtn");
const output = document.querySelector(".calcOutput");
output.innerHTML = '0';
var prevValue = 0;
var currentValue = 0;
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

        display()
    }
}

function opClicked() {
    switch(this.innerHTML)
    {
        case '+':
        case '-':
        case 'x':
        case 'X':
        case '*':
        case '/':
            prevValue = currentValue;
            currentValue = 0;
            currentOperator = this.innerHTML;

            display()
            break;

        case '.':
        case '=':
            break;

        default: break;
    }
}

// function opClicked() {
//     switch(operator)
//     {
//         case '+':
//             currentValue = 0;

//             display()
//             break;

//         case '-':
//             currentValue = 0;

//             display()
//             break;

//         case 'x':
//         case 'X':
//         case '*':
//             currentValue = 0;

//             display()
//             break;
//         case '/':
//             currentValue = 0;

//             display()
//             break;
        
//         case '.':
//             currentValue = 0;

//             display()
//             break;

//         case '=':
//             currentValue = 0;

//             display()
//             break;

//         default: break;
//     }
// }

function display()
{
    var outputString = "";
    if (prevValue != 0)
    {
        outputString += prevValue.toString();
    }
    outputString += ' ' + currentOperator + ' ';
    outputString += currentValue;
    output.innerHTML = outputString;
}