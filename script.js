console.log('we are making windows 11');

// start.style.display = "block";

let win = document.getElementById('sel')
let start = document.getElementById('start')


win.addEventListener('click', () => {
    if (start.style.display === "block") {
        start.style.display = "none";
    } else {
        start.style.display = "block";
    }
})