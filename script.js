

document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date(2025, 2, 2); // 2 марта 2024 года (месяцы в JS начинаются с 0)
    const today = new Date();
    
    // Разница в днях
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    const startAmount = 150; // Начальная сумма
    const increasePerDay = 50; // Увеличение на 50 рублей в день

    const currentAmount = startAmount + daysPassed * increasePerDay;
    document.getElementById("amount").textContent = currentAmount.toLocaleString();
});