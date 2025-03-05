document.addEventListener("DOMContentLoaded", function () {
    const startDate = Date.UTC(2025, 2, 2, 0, 0, 0);
    const startAmount = 150;
    const increasePerDay = 50;
    const secondsInDay = 86400;
    const increasePerSecond = increasePerDay / secondsInDay;

    function calculateBaseAmount() {
        const nowUTC = Date.now();
        const timePassedInSeconds = Math.floor((nowUTC - startDate) / 1000);
        return startAmount + timePassedInSeconds * increasePerSecond;
    }

    let currentAmount = calculateBaseAmount();
    const amountElement = document.getElementById("amount");

    function updateAmount() {
        const newAmount = calculateBaseAmount();
        gsap.to({ value: currentAmount }, { 
            value: newAmount, 
            duration: 1, 
            ease: "none",
            onUpdate: function () {
                amountElement.textContent = this.targets()[0].value.toFixed(4);
            }
        });
        currentAmount = newAmount;
    }

    updateAmount();
    setInterval(updateAmount, 1000);
});
