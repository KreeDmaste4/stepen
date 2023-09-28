


let number = +prompt('Введите число');
let stepen = +prompt('Введите степень');

let sum = 1;

for (let i = 1; i <= stepen;i++){
    sum *= number
    alert(sum)
}

console.log(sum);