const countries = [
    {
        name: "Россия",
        cities: [
            {name: "Новосибирск", population: 1625631},
            {name: "Бердск", population: 102850},
            {name: "Барнаул", population: 690100},
            {name: "Москва", population: 13104177},
            {name: "Владивосток", population: 625000}
        ]
    },
    {
        name: "Казахстан",
        cities: [
            {name: "Астана", population: 1409497},
            {name: "Павлодар", population: 367700},
            {name: "Алматы", population: 2211198},
            {name: "Караганда", population: 515835}
        ]
    },
    {
        name: "Белоруссия",
        cities: [
            {name: "Минск", population: 1995471},
            {name: "Гомель", population: 501802},
            {name: "Брест", population: 342461}
        ]
    }
];

const findCountryWithMaxCitiesCount = () => {
    const countryWithMaxCitiesCount = Math.max(...countries.map(country => country.cities.length));
    return countries.filter(country => country.cities.length === countryWithMaxCitiesCount);
};

const getPopulationByCountry = () => {
    const populationByCountry = {};

    countries.forEach(country => {
        populationByCountry[country.name] = country.cities.reduce((accumulated, city) => accumulated + city.population, 0);
    });

    return populationByCountry;
};

console.log("Страна с максимальным количеством городов:", findCountryWithMaxCitiesCount());
console.log("Информация о численности населения по каждой стране:", getPopulationByCountry());