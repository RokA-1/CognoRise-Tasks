let countdownInterval;

function startCountdown(event) {
    event.preventDefault();

    // Clear any previous countdown
    clearInterval(countdownInterval);

    const targetDateTime = new Date(document.getElementById("targetDateTime").value);
    const countdownDisplay = document.getElementById("countdownDisplay");

    if (isNaN(targetDateTime)) {
        countdownDisplay.textContent = "Please enter a valid date and time.";
        return;
    }

    countdownInterval = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = targetDateTime - currentTime;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Countdown Complete!";
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
        }
    }, 1000);
}
