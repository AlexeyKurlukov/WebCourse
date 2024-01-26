document.addEventListener("DOMContentLoaded", function () {
    const temperatureForm = document.getElementById("temperature-form");
    const results = document.getElementById("results");
    const celsiusInput = document.getElementById("celsius-input");
    const errorMessage = document.querySelector(".error-message");

    function convertTemperature() {
        const celsiusString = celsiusInput.value.trim();
        errorMessage.style.display = "none";
        celsiusInput.classList.remove("invalid");

        if (celsiusString.length === 0) {
            errorMessage.style.display = "block";
            celsiusInput.classList.add("invalid");
            return;
        }

        const celsiusValue = parseFloat(celsiusString);
        const kelvinValue = celsiusValue + 273.15;
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

        results.innerHTML = celsiusString + " ° Цельсия = " + kelvinValue.toFixed(2) + " ° Кельвина<br>" +
            celsiusString + " ° Цельсия = " + fahrenheitValue.toFixed(2) + " ° Фаренгейта";
    }

    temperatureForm.addEventListener("submit", function (e) {
        e.preventDefault();
        convertTemperature();
    });
});