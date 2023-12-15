function removeElement(array, item) {
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] === item){
            array.splice(i, 1);
        }
    }
}
//За допомогою циклу for ми перебераємо кожен елемент масиву з кінця і якщо він відповідає item то видаляємо за 
//допомогою методу .splice.
const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];
removeElement(array, 5);
console.log(array);

//Результат буде: [1, '2', 3, '5', 4, 6, '7'];
