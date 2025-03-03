document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date(2025, 2, 2, 0, 0, 0); // 2 марта 2024, 00:00:00
    const startAmount = 150; // Начальная сумма
    const increasePerDay = 50; // Сколько рублей добавляется за день
    const secondsInDay = 86400; // Количество секунд в сутках
    const increasePerSecond = increasePerDay / secondsInDay; // Сколько прибавляется за 1 секунду

    function calculateBaseAmount() {
        const now = new Date();
        const timePassedInSeconds = Math.floor((now - startDate) / 1000); // Разница в секундах
        return startAmount + timePassedInSeconds * increasePerSecond;
    }

    let currentAmount = calculateBaseAmount();

    function updateAmount() {
        currentAmount += increasePerSecond;
        document.getElementById("amount").textContent = currentAmount.toFixed(2);
    }

    updateAmount(); // Устанавливаем начальное значение при загрузке
    setInterval(updateAmount, 1000); // Обновляем каждую секунду
});
