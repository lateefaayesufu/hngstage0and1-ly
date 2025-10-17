
function updateTime() {
        const el = document.getElementById('userTime');
        if (el) {
            el.style.opacity = 0.5;
            setTimeout(() => {
                el.textContent = Date.now();
                el.style.opacity = 1;
            }, 100);
        }
    }

        updateTime();
        setInterval(updateTime, 500);

