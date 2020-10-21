const  fruit =['ananas','cherry','pear'];

function showArr(arr, elm) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!== undefined) {
            out += `<div><img src="img/${arr[i]}.png" width="60px" <span>${i}</span></div>`;
        }
    }
    document.querySelector(elm).innerHTML = out;
    document.querySelector('.out-1-source-length').innerHTML = 'Длина массива ' + fruit.length;
    document.querySelector('.out-1-source').innerHTML='const fruit=[' + fruit + ']';

}
showArr(fruit,'.out-1-source-image');


function addToArray(){
    if (!Number.isInteger(+document.querySelector('.array-index').value)){
        alert('Ввести можно только целые числа');
        return false;                                                           // или это
    }
    let index= +document.querySelector('.array-index').value;           //или эта функция
    // let index= parseInt(document.querySelector('.array-index').value);
    if (index >50){
        alert('Ограничения (Максимально 50)');
return false;
    }else  if (index < 0){
        alert('Индекс Должен быть больше нуля');
        return false;
    }
    fruit[index]= document.querySelector('.array-element').value;
    showArr(fruit,'.out-1-source-image');
    console.log(fruit)
}
document.querySelector('.add-to-array').onclick = addToArray;