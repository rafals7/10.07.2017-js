/*
=====================================================
Wszystkie poniższe przykłady, wyświetl w konsoli
=====================================================

0. Podepnij ten plik do pliku index.html
1. Zadeklaruj 3 zmienne typu string

 -----------------------------------------------------
 CODE GOES BELOW */
var name = 'Marek',
    discipline = 'cyklo-cross',
    team = 'Triathlon Trojmiasto';

console.log('Ex.1 - name, discipline, team: ', name, discipline, team);
 /*
 -----------------------------------------------------

2. Zadeklaruj 3 zmienne typu number

  -----------------------------------------------------
  CODE GOES BELOW */
 var etapStartPosition = 40,
     etapEndPosition = 12,
     generalPosition = 30;

console.log('Ex.2 - etapStartPosition, etapEndPosition, generalPosition: ', etapStartPosition, etapEndPosition, generalPosition);
/*
 -----------------------------------------------------

3. Zadeklaruj 3 zmienne typu boolean

 -----------------------------------------------------
 CODE GOES BELOW */
var isActive = true,
    isDisqualified = false,
    hasWildCard = false;

console.log('Ex.3 - isActive, isDisqualified, hasWildCard: ', isActive, isDisqualified, hasWildCard);
/*
 -----------------------------------------------------

4. Zadeklaruj zmienną typu undefined

 -----------------------------------------------------
 CODE GOES BELOW */
// var nickname;
var nickname = undefined;
console.log('Ex.4 - nickname: ', nickname);
/*
 -----------------------------------------------------

5. Zadeklaruj zmienną typu null

 -----------------------------------------------------
 CODE GOES BELOW */
var score = null;
console.log('Ex.5 - score: ', score);
/*
 -----------------------------------------------------

6. Zadeklaruj 3 tablice o dowolnej długości
   - składającą się wyłacznie z wartości typu string
   - składającą się wyłacznie z z wartości typu number
   - mieszaną (różne typy)

 -----------------------------------------------------
 CODE GOES BELOW */

var cities = ['Gdansk','Sopot', 'Gdynia'],
    statusNumbers = [1,2,3,4,5,6,7],
    customValues = ['status', 33, 1.23];


/*
 -----------------------------------------------------

 7. Zadeklaruj obiekt person, posiadający następujace pola:
   - firstName
   - lastName
   - age
   - country

   * Do propercji obiektu person przypisz wybrane przez siebie wartości

 -----------------------------------------------------
 CODE GOES BELOW */
var person = {
    firstName: 'Marek',
    lastName: 'Marecki',
    age: 40,
    country: 'Poland'
};
/*
 -----------------------------------------------------


8. Sprawdź typ co najmniej jednej zmiennej z poprzednich zadań i wyświetl jej
   w konsoli wraz z nazwą zmiennej, którą sprawdzasz

 -----------------------------------------------------
 CODE GOES BELOW */
console.log('type of name is: ', typeof(name));
console.log('type of person is: ', typeof(person));
console.log('type of person age is: ', typeof(person.age));

/*
 -----------------------------------------------------

9. Zadeklaruj dowolną zmienną za pomocą słówka VAR i wyświetl jej wartość w konsoli.
   Następnie nadpisz jej wartość i ponownie użyj console.log do wyświetlenia wartości.

 -----------------------------------------------------
 TUTAJ KOD
 var errorCode = 0;
 console.log('Ex.9 Error Code:', errorCode);
 var errorCode = 5;
 console.log('Ex.9 Error Code:', errorCode);
 -----------------------------------------------------

10.Zadeklaruj dowolną zmienną za pomocą słówka CONST i wyświetl jej wartość w konsoli.
   Następnie nadpisz jej wartość i ponownie użyj console.log do wyświetlenia wartości.

 -----------------------------------------------------
 TUTAJ KOD
 -----------------------------------------------------

 =====================================================
DOBRE PRAKTYKI:
Przy wykonywaniu zadań zwróć uwagę na:

- nazewnictwo:
  * camelCase
  * po angielsku
  * odpowiednio dobrana nazwa do typu zmiennej i jej przeznaczenia:
    - np. var isDisabled = true, zamiast var disabled = true;
    - np. var names = ['Monika'], zamiast var items = ['Monika'] lub var arr = ['Monika'])

- zachowanie odpowiedniego formatowania:
  * ŹLE: var name='Tomek';
  * DOBRZE: var name = 'Tomek';
  * średnik na końcu deklaracji zmiennej

 =====================================================
 */


