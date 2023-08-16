document.addEventListener("DOMContentLoaded", function () {
    const selectTitlesButton = document.getElementById("select-titles-button");
    const resultTable = document.getElementById("result-table");
    const valueInputs = document.querySelectorAll(".value-input");
    const decisionCells = document.querySelectorAll(".decision-cell");
    const totalResultElement = document.getElementById("total-result");

    selectTitlesButton.addEventListener("click", function () {
        resultTable.style.display = "table";
    });


    // Sonuçları hesapla ve göster
    const calculateButton = document.getElementById("sonuc-button");
    calculateButton.textContent = "Sonuçları Hesapla";
    calculateButton.addEventListener("click", function () {
        let title1Total = 0;
        let title2Total = 0;

        valueInputs.forEach(function (input) {
            const title = input.getAttribute("data-title");
            const value = parseFloat(input.value);

            if (title === "title1") {
                title1Total += value;
            } else {
                title2Total += value;
            }
        });

        if (title1Total > title2Total) {
            totalResultElement.textContent = "İlk üniversite senin için daha iyi.";
        } else if (title2Total > title1Total) {
            totalResultElement.textContent = "İkinci üniversite senin için daha iyi.";
        } else {
            totalResultElement.textContent = "İki üniversite de senin için uygun gözüküyor.";
        }

        totalResultElement.style.display = "block";
    });

    resultTable.parentNode.insertBefore(calculateButton, resultTable.nextSibling);
});

document.addEventListener("DOMContentLoaded", function () {
    const compareButton = document.getElementById("select-titles-button");
    const h1 = document.getElementById("anabaslik");
    const h2 = document.getElementById("altbaslik");
    const hiddenButton = document.getElementById("sonuc-button");
    const resultElement = document.getElementById("result");

    compareButton.addEventListener("click", function () {
        // ... Karşılaştırma işlemleri ...

        compareButton.style.display = "none"; // Düğme kayboldu
        h1.style.display = "none";
        h2.style.display = "none";
        hiddenButton.style.display = 'block';
    });
});