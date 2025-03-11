document.addEventListener("DOMContentLoaded", function () {
    const startDate = Date.UTC(2025, 2, 11, 0, 0, 0); 
    const startAmount = 600; 
    const increasePerDay = 1000; 
    const secondsInDay = 86400; 
    const increasePerSecond = increasePerDay / secondsInDay; 

    function calculateBaseAmount() {
        const nowUTC = Date.now(); 
        const timePassedInSeconds = Math.floor((nowUTC - startDate) / 1000);
        return startAmount * timePassedInSeconds * increasePerSecond;
    }

    let currentAmount = calculateBaseAmount();
    const amountElement = document.getElementById("amount");

    function formatNumber(value) {
        return value
            .toFixed(2) 
            .replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
    }

    function updateAmount() {
        const newAmount = calculateBaseAmount();
        gsap.to({ value: currentAmount }, { 
            value: newAmount, 
            duration: 1, 
            ease: "none",
            onUpdate: function () {
                amountElement.textContent = formatNumber(this.targets()[0].value);
            }
        });
        currentAmount = newAmount;
    }

    updateAmount();
    setInterval(updateAmount, 1000);
});
