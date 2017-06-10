/*
 =====================================================
 CUSTOM FUNCTIONS
 =====================================================
 
1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem

 -----------------------------------------------------
 CODE GOES BELOW */

/*
 -----------------------------------------------------

2. Napisz funkcję, która przyjmuje dwie liczby, oraz zwraca sumę tych liczb
    - input:  2, 3
    - output: 5

 -----------------------------------------------------
 CODE GOES BELOW */
function sum(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}

console.log('Suma: ',sum(2,3));
/*
 -----------------------------------------------------

3. Napisz funkcję, która przyjmuje jeden parametr (string) i następnie ZWRACA wartość tego stringa jako upperCase i jednocześnie wycina whitespaces
    - input: "  rambo  "
    - output: "RAMBO"

 -----------------------------------------------------
 CODE GOES BELOW */
function getUpperTrim(firstString) {
    return firstString.trim().toUpperCase();
}

console.log('Wielkie znaki: ',getUpperTrim("   rambo   "));

/*
 -----------------------------------------------------

4. Napisz funkcję, która przyjmuje dwa parametry, pierwszy to liczba a drugi to jej dokładność w rozwinięciu dzisiętnym i ZWRACA odpowiednią wartość:
    - input:  11, 3
    - output: 11.000

 -----------------------------------------------------
 CODE GOES BELOW */
function getDecimalNumber(inputNumber, inputPrecision) {
    return inputNumber.toFixed(inputPrecision);

}

console.log('Liczba : ',getDecimalNumber(11,3));

/*
 -----------------------------------------------------

5. Napisz funkcję, która przyjmuje imię i ZWRACA nowego stringa o postaci: "Hello, my name is TUTAJ_IMIE". Następnie wywołanie funkcji
    przypisz do zmiennej o nazwie "greeting".
    - input:  "Tomek"
    - output: "Hello my name is Tomek"

 -----------------------------------------------------
 CODE GOES BELOW */
function sayHello(name) {
    return "Hello, my name is " + name;
}

var greeting = sayHello('Tomek');

console.log('Powitanie: ',greeting);
/*
 -----------------------------------------------------

6. Stwórz IIFE i wywołaj w niej dowolnego console.log
 -----------------------------------------------------
 CODE GOES BELOW */
(function printDatetime() {
    var now = new Date();
    console.log('Current date and time: ', now);
}) ();


/*
 -----------------------------------------------------

 =====================================================
TIPS:
- pamiętaj o wywołaniu funkcji
- nazewnictwo funkcji
  * camelCase
  * nazwa ma wskazywać co funkcja wykonuje
- odpowiednie formatowanie

ŹLE:
function uppercaseitem(item){
  return item.toUpperCase();
}

DOBRZE:
function getUpperCasedName(name) {
  return name.toUpperCase();
}

 =====================================================
 */