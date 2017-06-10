24/*
 =====================================================
 DATE: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
 =====================================================
 1. Napisz funkcję, która obliczy ile mineło godzin pomiędzy dwoma datami.
    przykład: getHours("1995,12,01", "2000,03,04") - 37320H
    Do wyniku dodaj odpowiednią jednostkę.

 -----------------------------------------------------
 CODE GOES BELOW */

function getHours(startDate, endDate) {
    var startDate = new Date(startDate);
    var endDate = new Date(endDate);
    var HOUR_IN_MILISECONDS = 1000*3600;
     var hoursDiff = (endDate - startDate) / HOUR_IN_MILISECONDS;
     console.log(hoursDiff);
     return hoursDiff.toString()+'H'

}

console.log("Diff: ", getHours("1995,12,01", "2000,03,04"));

/*
 -----------------------------------------------------

 2. Napisz funkcję, której podasz datę swoich urodzin, a ona zwróci Twój wiek z dokładnością
    do dwóch liczb po przecinku

 -----------------------------------------------------
 CODE GOES BELOW */

function getAge(birthDay) {
    var birthDay = new Date(birthDay);
    var now = new Date();
    var YEAR_IN_MILISECONDS = 1000 * 60 * 60 * 24 * 365;
    var age = ((now - birthDay)/YEAR_IN_MILISECONDS).toFixed(2);
    console.log(age);
    // var age = ((now.getTime() - birthDay.getTime())/YEAR_IN_MILISECONDS).toFixed(2);
    // console.log(age);
    return age.toString()+' lat'
}

console.log("Diff: ", getAge("1977,03,04"));
/*
 -----------------------------------------------------
*/
