const array = [-5, 5, 5, 5, 5, 2, 15, 4, 11, 15];

const sortArray = (array) => {
    return array.slice().sort((element1, element2) => element2 - element1);
};

const getSubArray = (array) => {
    const firstFive = array.slice(0, 5);
    const lastFive = array.slice(-5);
    return {firstFive, lastFive};
};

const getEvenNumbersSum = (array) => {
    return array.filter(element => element % 2 === 0).reduce((accumulated, current) => accumulated + current, 0);
};

const hundredElementArray = Array.from({length: 100}, (_, i) => i + 1);

const getEvenNumbersSquares = (hundredElementArray) => {
    return hundredElementArray.filter(element => element % 2 === 0).map(element => Math.pow(element, 2));
};

console.log("Исходный массив:", array);
console.log("Сортировка по убыванию:", sortArray(array));
console.log("Подмассив из первых 5 элементов:", getSubArray(array).firstFive);
console.log("Подмассив из последних 5 элементов:", getSubArray(array).lastFive);
console.log("Сумма чётных чисел:", getEvenNumbersSum(array));
console.log("Квадраты чётных чисел от 1 до 100:", getEvenNumbersSquares(hundredElementArray));