document.addEventListener('DOMContentLoaded', function() {
    let currentColor = 'red';

    // Set up palette event listeners
    document.querySelectorAll('.pen').forEach(pen => {
        pen.addEventListener('click', function() {
            currentColor = this.id;
        });
    });

    // Set up pixel event listeners
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.addEventListener('click', function() {
            this.style.backgroundColor = currentColor;
        });
    });
});