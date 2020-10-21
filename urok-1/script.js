//1
let a = 7;
let b = 9;
console.log(a+b);
//2
let c =7;
let d =9;
console.log(c/d)
//3
let e=3;
let f=5;
console.log(e+f);
//4
let e1="3";
let f1=5;
console.log(e1+f1);
//5

let e2 =3;
let f2=0;
console.log(e2/f2);
//6
let e3 = 3;
let f3 = " hello "
console.log(e3+f3);
//7
let e4 = 3;
let f4 = 'Hello';
console.log(e4*f4);
//8
let inpIN = document.querySelector('.inputIn');
let but1 = document.querySelector('.but1');
but1.onclick = function () {
console.log(inpIN.value)
};
//9
let inpIN1 = document.querySelector('.inputIn1');
let but2 = document.querySelector('.but2');
but2.onclick = function () {
    console.log(inpIN1.value);
inpIN1.value="";
};
//10
let div = document.querySelector('.out');
let inputNumber = document.querySelector('.inputNumber');
let butUmnogenie = document.querySelector('.umnogenieNaDesat');
butUmnogenie.onclick=function () {
    let a =+inputNumber.value;
    let b = 10;
    let ab= a*b;
    div.innerHTML=ab;
    console.log(ab);
    inputNumber.value="";
}
//11
let div1 = document.querySelector('.outPlus');
let inputNumb1 = document.querySelector('.inputNumb1');
let butunPlusDesat = document.querySelector('.plusDesat');
butunPlusDesat.onclick=function () {
    let a1=+inputNumb1.value;
    let b1= 10;
    let ab1=a1+b1;
    div1.innerHTML=ab1;
    console.log(ab1);
    // inputNumb1.value="";
    }
//12
let name = document.querySelector('.name');
let familia = document.querySelector('.famelia');
let butSenden = document.querySelector('.priwed');
butSenden.onclick=function () {
    let x = name.value;
    let y = familia.value;
    console.log('PriweD - '+ x +' '+y);
}
//13
let otwet = document.querySelector('.otwet');
let numb1 = document.querySelector('.num1');
let numb2=document.querySelector('.num2');
let  summa =document.querySelector('.summa');
summa.onclick=function () {
    let nu1 =+numb1.value;
    let nu2 =+numb2.value;
    let nu3 =+nu1+nu2;
  otwet.innerHTML='Summa rowna ='+nu3;
}
//14
let hh=document.querySelector('.hhwlow');
let hh1=hh.value='Hello';
 //15
let y = document.querySelector('.bor');
y.style.border='2px solid red';
//16
let ooo=document.querySelector('.ooo');
let nnn1=document.querySelector('.nnn1');
let nnn2=document.querySelector('.nnn2');
let wiches=document.querySelector('.butnn1');
wiches.onclick=function () {
 let n1=+nnn1.value;
 let n2=+nnn2.value;
 let nn12 = n1+n2;
 ooo.innerHTML=nn12;
}
//17 - 18
let t = document.querySelector('.chsStrok');
let butT=document.querySelector('.start');
butT.onclick=function () {
    let tz=t.value;
    tz=parseInt(tz);
    // tz=parseFloat(tz);
    console.log(tz);
}
//19
let numdew1= document.querySelector('.dewat');
let numbdew2=document.querySelector('.dewat2');
let  divotwdew=document.querySelector('.wiwodDewot');
let butdewat = document.querySelector('.butOtwDewat');
butdewat.onclick=function () {
    let otd1 =+ numdew1.value;
    let otd2=+ numbdew2.value;
    let sumerh =+ otd1+otd2;
    let z = +sumerh.value;
    z=parseInt(z);
    divotwdew.innerHTML=z;
}
//20
let namenn = document.querySelector('.iname');
let fami = document.querySelector('.fami');
let god = document.querySelector('.wozw');
let rabot = document.querySelector('.rabot');
let opros = document.querySelector('.wiwodOpros');
let butD = document.querySelector('.butDwatz');
butD.onclick=function () {
    let xnamenn = namenn.value;
    let xfami = fami.value;
    let xgod = god.value;
    let xrabot = rabot.value;
    opros.innerHTML='Уважаемый(ая) '+xnamenn+' '+xfami+' ваш возраст '+xgod +' По професси вы ' +xrabot;



}
