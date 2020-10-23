/*Task 1.
При нажатии кнопки b-1 срабатывает функция f1.
Функция должна прочитать содержимое i-1 и
сравнить его с числом 4 (сравнение ==).
Результат сравнения - true или false выведите в out-1.*/
let out1 = document.querySelector('.out1');
const but1 = document.querySelector('.b-1');
but1.onclick =function f1(){
    let ii1 = 4;
/*    let i1=3;
    i1  == 4;
        out1.innerHTML='true';
    i1 != 4;
            out1.innerHTML='false';*/
out1.innerHTML=(ii1==4);
}
/*
Task 2.
Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2.
Функция должна сравнить переменные с помощью if else и вывести в out-2 число,
которое больше. Вариант равенства переменных не рассматриваем.*/

let a21 = 3;
let a22 = 5;
let out2 = document.querySelector('.out2');
const but2=document.querySelector('.b-2');
but2.onclick=function f2 () {
    if ( a21 < a22){
        out2.innerHTML=a22;
    }else {
        out2.innerHTML=a22;
    }
}

/*
Task 3.
Даны 2 input - i-31 и i-32, оба - input[type=number].
При нажатии кнопки b-3 срабатывает функция f3. Функция должна
прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.
Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 29 и 22, 5 и 111.*/

const but3 =document.querySelector('.b-3');
let inp31 =document.querySelector('.i-31');
let inp32=document.querySelector('.i-32');
let outp3=document.querySelector('.out3');

but3.onclick= () =>{
  let vain31=+inp31.value;
  let vain32=+inp32.value;
  if (vain31 < vain32){
    outp3.innerHTML='число- ' +inp32.value +' больше';
  }else {
             outp3.innerHTML=`число- ${vain31} больше`;
     }
  }
/*
Task 4.
Создайте на странице input[type=number] с классом i-4, куда пользователь
может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4.
Функция должна вывести в .out-4 число 1 если пользователю больше или
равно 18 лет, и 0 если меньше.*/

const but4=document.querySelector('.b-4');
let  inpI4=document.querySelector('.i-4');
let out4=document.querySelector('.out4');
but4.onclick =()=>{
    let age = 18;
    let inva4 = inpI4.value;

    if (inva4 >= age){
        out4.innerHTML='1';
    }else {
        out4.innerHTML='0';
    }

}
/*
Task 5.
Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число.
Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если
число меньше нуля, 0 если число равно нулю и 1 если больше.*/

const but5=document.querySelector('.b-5');
let inp5 = document.querySelector('.i-5');
let  out5=document.querySelector('.out5');

but5.onclick = ()=>{
    let df=0;
    let vain5=+inp5.value;
            if (vain5 == df){
               out5.innerHTML='0';
            }else if (vain5 < df){
               out5.innerHTML='m';
            }else if (vain5 > df){
               out5.innerHTML='1';
                 }
}
/*Task 6.
Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число.
Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово
если число четное и odd если нечетное. Для проверки четности используется целочисленный
остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.*/

/*const but6=document.querySelector('.b-6');
let inp6= document.querySelector('.i-6');
let  out6=document.querySelector('.out6');

but6.onclick = ()=> {
let  vain6=+inp6.value;
if (vain6%2==0){
    out6.innerHTML='even';
   }
    if (vain6%2!=0) {
        out6.innerHTML = 'odd';
    }
}*/
let inp6=document.querySelector('.i-6');
let out6=document.querySelector('.out6');

function f6() {
    let valuIn6 = inp6.value;
    if (valuIn6 % 2 == 0) {
        out6.innerHTML = `число ${valuIn6} even`         /// правельный вариант записи
    } else {
        out6.innerHTML = `число ${valuIn6} odd`

    }
}
document.querySelector('.b-6').onclick = f6;




/*
Task 7.
Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает
функция f7.Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7.
Для возведения в степень можно использовать **, или Math.pow.*/

const but7 =document.querySelector('.b-7');
let inp71 =document.querySelector('.i-71');
let inp72=document.querySelector('.i-72');
let outp7=document.querySelector('.out7');

but7.onclick= () => {
    let vain71 = +inp71.value;
    let vain72 = +inp72.value;
    // let step = vain71 ** vain72;
    // outp7.innerHTML = 'Степень=  ' + step ;
    let step1 = (Math.pow(vain71, vain72));
    outp7.innerHTML = ` ${vain71} на ${vain72} Степень равна = ${step1}` ;
}
/*
Task 8.
Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8.
При ее нажатии срабатывает функция f8. Функция должна получить
выбранное в select число, потом с помощью switch case сравнить его
поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1,
то вывести в out-8 строку one, если 2 - two, если 3 - three.*/
const but8 =document.querySelector('.b-8');
const selr=document.querySelector('.s-8');
let out8 = document.querySelector('.out8');

but8.onclick=function f8() {


let seleNumb = selr.value;
    switch (parseInt(seleNumb)) {
        case 1:
            if (seleNumb==1){
            out8.innerHTML='one';
            break;}
        case  2:
            out8.innerHTML='two';
            break;
        case  3:
            out8.innerHTML='three';
            break;
             out8.innerHTML='Select otion';
    }
}
/*
Task 9.
Создайте на странице input[type=number] с классом i-9,
куда пользователь может ввести номер квартиры. Есть кнопка
b-9 которая запускает функцию f9. Функция должна вывести
в .out-9 номер подъезда, в котором находится квартира.

если от 1 до 32 - то вывести цифру 1
если от 33 до 43 - то вывести 2
если от 44 до 64 - то 3.
В противном случае, вывести 0.*/
const but9 =document.querySelector('.b-9');
let imp9=document.querySelector('.i-9');
let out9 = document.querySelector('.out9');

but9.onclick=function f9() {
    let vaim9=+imp9.value;
    if (vaim9 >= 1 && vaim9<=32){
        out9.innerHTML=`квартира с номером ${vaim9} находиться в подькзде номер : 1`;
    }else if (vaim9 >= 33 && vaim9<=42){
        out9.innerHTML=`квартира с номером ${vaim9} находиться в подькзде номер : 2`;
    }else if (vaim9 >= 43 && vaim9<=64){
        out9.innerHTML=`квартира с номером ${vaim9} находиться в подькзде номер : 3`;
    }else if (vaim9 <= 0 || vaim9>64){
        out9.innerHTML = `Нет квартира с номером ${vaim9} `;

    }
}
/*
Task 10.
Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.*/
const but10=document.querySelector('.b-10');
let sele110=document.querySelector('.s110');
let out10=document.querySelector('.out10');
but10.onclick=function () {
    let voluse110=sele110.value;
    out10.innerHTML=(voluse110);
}

/*
Task 11.
Дан select s-110. По изменению состояния select (событие onchange) выведите value
выбранного option в out-11.*/

let sele111=document.querySelector('.s111');
let out11=document.querySelector('.out11');
onchange=function () {
    let voluse111 = sele111.value;
    out11.innerHTML = (voluse111);
}

/*
Task 12.

Дан input i-120. По нажатию кнопки получите значение из input в переменную,
а затем выведите в out-12 typeof полученной переменной. Typeof позволяет
определить тип данных. Обратите внимание, данная задача уже решена, нужно
убрать комментарии и изучить работу.*/
let i120 = document.querySelector('.i-120');

function f12(){
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number.
// По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof
// полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали -
// то удивительно, но тип данных будет string! Подумайте почему так?
let inp130=document.querySelector('.i-130');
let  out130=document.querySelector('.out-13');

function f13(){
    let valIn130=+inp130.value;
    out130.innerHTML=(typeof valIn130);
}
document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит
// операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14.
// Функция выводит в out-14 результат операций выбранной в 3-м select  к числам введенным в
// первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let inp141=document.querySelector('.i-141');
let inp142=document.querySelector('.i-142');
let seleTab=document.querySelector('.s-143');
let out14=document.querySelector('.out-14');

function f14(){
    let valuSel1=seleTab.value;
    let inpVal141=parseInt(inp141.value);
    let inpVal142=parseInt(inp142.value);
    out14.innerHTML=''
    console.log(valuSel1);
    switch (valuSel1) {
        case '+':
            out14.innerHTML+=(inpVal141 + inpVal142);
            break;
        case '-':
            out14.innerHTML+=(inpVal141 - inpVal142);
            break;
        case '*':
            out14.innerHTML+= (inpVal141 * inpVal142);
            break;
        case '/':
            out14.innerHTML+= (inpVal141 / inpVal142);
            break;
        default:
            out14.innerHTML='error';
    }

}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153,
// который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую
// срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных
// в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно
// вывести результат операции 1&&1 т.е. 1 или 0.
let sel151=document.querySelector('.s-151');
let sel152=document.querySelector('.s-152');
let sel153=document.querySelector('.s-153');
let  out15=document.querySelector('.out-15');
function f15(){
    out15.innerHTML='';
    let val151=parseInt(sel151.value);
    let val152=parseInt(sel152.value);
    let val153=sel153.value;
    switch (val153){
        case '&&':
            out15.innerHTML+= val151 && val152;
            break
        case '||':
            out15.innerHTML+= val151 || val152;
            break
        default:
            out15.innerHTML='error'
    }
}

document.querySelector('.b-15').onclick = f15;
