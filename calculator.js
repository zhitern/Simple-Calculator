const numBtnList = document.querySelectorAll(".numBtn");
const opBtnList = document.querySelectorAll(".opBtn");
const output = document.querySelector(".calcOutput");
output.innerHTML = '0';
var currentValue;

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
        output.innerHTML = number;
    }
}

function opClicked() {
    switch(operator)
    {
        case '+':
            break;

        case '-':
            break;

        case 'x':
        case 'X':
        case '*':

            break;
        case '/':
            break;
        
        case '.':
            break;

        case '=':
            break;

        default: break;
    }
}