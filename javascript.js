const display = document.getElementById('display');

// Container three buttons
const zeroBtn = document.getElementById('0');
const dotBtn = document.getElementById('.');
const tenTimesBtn = document.getElementById('x10^x');
const ansBtn = document.getElementById('ans');
const equalsBtn = document.getElementById('=');
const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const plusBtn = document.getElementById('+');
const minusBtn = document.getElementById('-');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const multiplicationBtn = document.getElementById('x');
const divisionBtn = document.getElementById('/');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const delBtn = document.getElementById('DEL');
const acBtn = document.getElementById('AC');
// Container two buttons 
const rclBtn = document.getElementById('RCL');
const engBtn = document.getElementById('ENG');
const leftParenthesisBtn = document.getElementById('(');
const rightParenthesisBtn = document.getElementById(')');
const sdBtn = document.getElementById('SD');
const mPlusBtn = document.getElementById('M+');
const dashBtn = document.getElementById('(-)');
const degreesBtn = document.getElementById('°');
const hyperBtn = document.getElementById('hyp');
const sinBtn = document.getElementById('sin');
const cosBtn = document.getElementById('cos');
const tanBtn = document.getElementById('tan');
const changeDivBtn = document.getElementById('a/b');
const sqrRootBtn = document.getElementById('sqr');
const powerTwoBtn = document.getElementById('x²');
const powerNBtn = document.getElementById('x^n');
const logBtn = document.getElementById('log');
const lnBtn = document.getElementById('ln');
const absBtn = document.getElementById('ABS');
const powerThreeBtn = document.getElementById('x³');
const powerMinusOneBtn = document.getElementById('x⁻¹');
const logaBBtn = document.getElementById('logaB');
// Container one buttons
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const shiftBtn = document.getElementById('SHIFT');
const alphaBtn = document.getElementById('ALPHA');
const upBtn = document.getElementById('up');
const modeBtn = document.getElementById('MODE');
const onBtn = document.getElementById('ON');


let displayString = '';
let displayArray = [];
let previousResult = 0;
display.textContent = displayArray;

// Container three events
zeroBtn.addEventListener('click', () => {
    displayArray.push(0);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
dotBtn.addEventListener('click', () => {
    displayArray.push(".");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
tenTimesBtn.addEventListener('click', () => {
    alert("Hello World");
  });
ansBtn.addEventListener('click', () => {
    display.textContent = previousResult;
  });
equalsBtn.addEventListener('click', () => {
    alert("Hello World");
  });
oneBtn.addEventListener('click', () => {
    displayArray.push(1);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
twoBtn.addEventListener('click', () => {
    displayArray.push(2);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
threeBtn.addEventListener('click', () => {
    displayArray.push(3);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
plusBtn.addEventListener('click', () => {
    displayArray.push("+");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;;
  });
minusBtn.addEventListener('click', () => {
    displayArray.push("-");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
fourBtn.addEventListener('click', () => {
    displayArray.push(4);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
fiveBtn.addEventListener('click', () => {
    displayArray.push(5);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
sixBtn.addEventListener('click', () => {
    displayArray.push(6);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
multiplicationBtn.addEventListener('click', () => {
    displayArray.push("x");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
divisionBtn.addEventListener('click', () => {
    displayArray.push("/");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
sevenBtn.addEventListener('click', () => {
    displayArray.push(7);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
eightBtn.addEventListener('click', () => {
    displayArray.push(8);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
nineBtn.addEventListener('click', () => {
    displayArray.push(9);
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
delBtn.addEventListener('click', () => {
    displayArray.pop();
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
});
acBtn.addEventListener('click', () => {
    displayArray = [];
    display.textContent = displayArray.toString();
  });

// Container two events
rclBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
engBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
leftParenthesisBtn.addEventListener('click', () => {
    displayArray.push("(");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
rightParenthesisBtn.addEventListener('click', () => {
    displayArray.push(")");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
sdBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
mPlusBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
dashBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
degreesBtn.addEventListener('click', () => {
    displayArray.push("°");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
hyperBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
sinBtn.addEventListener('click', () => {
    displayArray.push("sin(");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
cosBtn.addEventListener('click', () => {
    displayArray.push("cos(");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
  tanBtn.addEventListener('click', () => {
    displayArray.push("tan");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
changeDivBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
sqrRootBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
powerTwoBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
powerNBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
logBtn.addEventListener('click', () => {
    displayArray.push("log(");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
lnBtn.addEventListener('click', () => {
    displayArray.push("log(");
    displayString = displayArray.toString().replaceAll(",","");
    display.textContent = displayString;
  });
absBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
powerThreeBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
powerMinusOneBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
logaBBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });

// Container one events
downBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
leftBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
rightBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
shiftBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
alphaBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
upBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
modeBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });
onBtn.addEventListener('click', () => {
    alert("Feature pending, coming soon :).");
  });