document.addEventListener("DOMContentLoaded", function () {
    const temperatureForm = document.getElementById("temperature-form");
    const results = document.getElementById("results");
    const celsiusInput = document.getElementById("celsiusInput");
    const errorMessage = document.querySelector(".error-message")

    function convertTemperature() {
        const celsius = celsiusInput.value.trim();
        errorMessage.style.display = "none";

        if (celsius.length === 0) {
            errorMessage.style.display = "block";
            return;
        }

        const kelvin = parseFloat(celsius) + 273.15;
        const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;

        results.innerHTML = celsius + " ° Цельсия = " + kelvin.toFixed(2) + " ° Кельвина<br>" +
            celsius + " ° Цельсия = " + fahrenheit.toFixed(2) + " ° Фаренгейта";
    }

    temperatureForm.addEventListener("submit", function (e) {
        e.preventDefault();
        convertTemperature();
    });
});