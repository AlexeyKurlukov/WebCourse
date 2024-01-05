document.addEventListener("DOMContentLoaded", function () {
    const temperatureForm = document.getElementById("temperature-form");
    const results = document.getElementById("results");
    const celsiusInput = document.getElementById("celsius-input");
    const errorMessage = document.querySelector(".error-message");

    function convertTemperature() {
        const celsiusValue = celsiusInput.value.trim();
        errorMessage.style.display = "none";
        celsiusInput.classList.remove("invalid");

        if (celsiusValue.length === 0) {
            errorMessage.style.display = "block";
            celsiusInput.classList.add("invalid");
            return;
        }

        const kelvinValue = parseFloat(celsiusValue) + 273.15;
        const fahrenheitValue = (parseFloat(celsiusValue) * 9 / 5) + 32;

        results.innerHTML = celsiusValue + " ° Цельсия = " + kelvinValue.toFixed(2) + " ° Кельвина<br>" +
            celsiusValue + " ° Цельсия = " + fahrenheitValue.toFixed(2) + " ° Фаренгейта";
    }

    temperatureForm.addEventListener("submit", function (e) {
        e.preventDefault();
        convertTemperature();
    });
});