document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    // Smooth scroll function
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }

    // Home refresh
    document.querySelector('a[href="#"]').addEventListener('click', (e) => {
        e.preventDefault();
        location.reload();
    });

    // Smooth scroll for Skills
    document.querySelector('a[href="#skills"]').addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#skills');
    });

    // Smooth scroll for Achievements
    document.querySelector('a[href="#achievements"]').addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#achievements');
    });

    function startAnimation() {
        // Reset all lines
        [line1, line2, line3].forEach(line => {
            line.style.animation = '';
            line.style.width = '0';
            line.style.borderRight = 'none';
        });

        // Reflow to apply resets
        line1.offsetWidth;
        line2.offsetWidth;
        line3.offsetWidth;

        // Start line1
        line1.style.borderRight = '0.15em solid #00ffff';
        line1.style.animation = 'typing1 1s steps(6) forwards, blink-caret 0.75s step-end infinite';
        line1.addEventListener('animationend', handleLine1End, {once: true});
    }

    function handleLine1End(e) {
        if (e.animationName !== 'typing1') return;
        line1.style.borderRight = 'none';
        line2.style.borderRight = '0.15em solid #00ffff';
        line2.style.animation = 'typing2 3s steps(24) forwards, blink-caret 0.75s step-end infinite';
        line2.addEventListener('animationend', handleLine2End, {once: true});
    }

    function handleLine2End(e) {
        if (e.animationName !== 'typing2') return;
        line2.style.borderRight = 'none';
        line3.style.borderRight = '0.15em solid #00ffff';
        line3.style.animation = 'typing3 3s steps(26) forwards, blink-caret 0.75s step-end infinite';
        line3.addEventListener('animationend', handleLine3End, {once: true});
    }

    function handleLine3End(e) {
        if (e.animationName !== 'typing3') return;
        line3.style.borderRight = 'none';
        setTimeout(startAnimation, 6000); // Pause for 6 seconds then restart
    }

    startAnimation();
});