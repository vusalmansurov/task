
//User 2 eded daxil edir. Yoxlanilmalidirki 1ci eded 2ci ededin kvadratina bolunur ya yox. Eger bolunurse hemin ededi 16 say sisteminde gosterin
/*let value1 =prompt("Birinci ededi daxil edin:");
let value2 =prompt("Ikinci ededi daxil edin:");

if(value1%(value2 ** value2)==0) {
    let result= value1/value2 ** value2;
    hexString = result.toString(16);
    console.log(hexString)
}
*/

//Daxil olunan 2 ayri reqemin EKOB ve EBOB unu tapin;
/*const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');


let min = (num1 > num2) ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}

function gcd(a, b) {
    while(a != b){
        if(a > b) {
            a -= b;
        }
        else {
            b -= a;
        }
    }
    return a;
}

var result = gcd(20, 30);
console.log(result)
*/

//User istenilen soz ve ya reqem daxil edir. Hemin ededin Polindrom olub olmadigini yoxlayaraq neticeni Alertde bildirmek lazimdir. Eger Palindromdursa "Eded polindromdur" deyilse "Polindrom deyil" yazdirin.;
/*function checkPalindrome(string) {


    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);
*/

//User tempratur daxil edir. Hemin tempraturun Selsi, Farenheit , Kelvin ile console de gosterin

/*let input = prompt("Enter templrature");
function myFunction(){
    return (input*9/5) + 32;
    
}
function myFunction2(){
    return (+input + 273.15);
}

console.log(myFunction());
console.log(myFunction2());
*/
