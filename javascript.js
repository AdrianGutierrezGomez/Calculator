const display = document.getElementById('display');
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

let displayString = '';
let displayArray = [];
let previousResult = 0;
display.textContent = displayArray;

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