(function () {
    function sortNumbersArrayDescending(numbersArray) {
        return numbersArray.sort((number1, number2) => number2 - number1);
    }

    function getFirstElements(array, elementsCount) {
        return array.slice(0, elementsCount);
    }

    function getLastElements(array, elementsCount) {
        return array.slice(-elementsCount);
    }

    function getEvenNumbersSum(numbersArray) {
        return numbersArray
            .filter(number => number % 2 === 0)
            .reduce((sum, number) => sum + number, 0);
    }

    function getEvenNumbersSquares(numbersArray) {
        return numbersArray
            .filter(number => number % 2 === 0)
            .map(number => number * number);
    }

    const numbersArray1 = [-5, 5, 5, 5, 5, 2, 15, 4, 11, 15];

    console.log("Исходный массив:", numbersArray1);
    console.log("Сортировка по убыванию:", sortNumbersArrayDescending(numbersArray1));
    console.log("Подмассив из первых 5 элементов:", getFirstElements(numbersArray1, 5));
    console.log("Подмассив из последних 5 элементов:", getLastElements(numbersArray1, 5));
    console.log("Сумма чётных чисел:", getEvenNumbersSum(numbersArray1));

    const numbersArray2 = [];

    for (let i = 1; i <= 100; i++) {
        numbersArray2.push(i);
    }

    console.log("Квадраты чётных чисел от 1 до 100:", getEvenNumbersSquares(numbersArray2));
})();