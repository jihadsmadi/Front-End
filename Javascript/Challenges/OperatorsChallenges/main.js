//Challenge 1

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(a,b,c);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(a,b,c);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/* 
    [++a] [+] [+b++] [+] [+c++] [c] [+a++]
    [++a]
        value: 11
        explain: pre increment
    [+]
        explain: Plus Operator]
    [+b++]
        value: 20 //20 then ==> b = 21
        explain: first + will return a number form string then 
        we have ++ after b it's called post increment
    [+]
        explain: Plus Operator
    [+c++]
        value: 80 //80 then ==> b = 81
        explain: first + will return a number then post increment
    [-]
        explain: minus Operator
    [+a++]
        value: 11 //11 then ==> b = 12
        explain: first + will return a number then post increment
*/
// a = 12,b=21,c=81 | Finel Result = 100

/* 
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    [++a]
        value:13
        explain:pre increment
    [+]
        explain: plus Operator
    [-b]
        value: -21
        explain: it's return to number the Multibly with -1]
    [+]
        explain: plus Operator
    [+c++]
        value: 81
        explain: post increment
    [-]
        explain: minus Operator
    [-a++]
        value: -13
        explain: post incremetn then it will be -13 + 1 = -12
    [+]
        explain: plus Operator
    [+a]
        value:-13
        explain = -13 * 1 = -13
*/
// a =14 ,b =-21 ,c =82 | Finel Reslut = 100

//Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e);//2000
console.log();//173