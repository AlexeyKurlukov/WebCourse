(function () {
    function getDescendingSortedArray(numbersArray) {
        return numbersArray.slice()
            .sort((number1, number2) => number2 - number1);
    }

    function getFirstNumbers(numbersArray, numbersCount) {
        return numbersArray.slice(0, numbersCount);
    }

    function getLastNumbers(numbersArray, numbersCount) {
        return numbersArray.slice(-numbersCount);
    }

    function getEvenNumbersSum(numbersArray) {
        return numbersArray.filter(number => number % 2 === 0)
            .reduce((sum, number) => sum + number, 0);
    }

    function getEvenNumbersSquares(numbersArray) {
        return numbersArray.filter(number => number % 2 === 0)
            .map(number => Math.pow(number, 2));
    }

    const numbersArray1 = [-5, 5, 5, 5, 5, 2, 15, 4, 11, 15];

    console.log("Исходный массив:", numbersArray1);
    console.log("Сортировка по убыванию:", getDescendingSortedArray(numbersArray1));
    console.log("Подмассив из первых 5 элементов:", getFirstNumbers(numbersArray1, 5));
    console.log("Подмассив из последних 5 элементов:", getLastNumbers(numbersArray1, 5));
    console.log("Сумма чётных чисел:", getEvenNumbersSum(numbersArray1));

    const numbersArray2 = [];

    for (let i = 1; i <= 100; i++) {
        numbersArray2.push(i);
    }

    console.log("Квадраты чётных чисел от 1 до 100:", getEvenNumbersSquares(numbersArray2));
})();