let myName = document.getElementById('name')
let myAge = document.getElementById('age')
let btn = document.getElementById('btn')
let out = document.querySelector('.output')
let err = document.querySelector('.error')

function dogCalculator() {

    let n = myName.value;
    let a = myAge.value;

    if (n == "" || a < 1) {
        err.textContent = "Please enter a name and/or age starting from 1"
    } else {
        let earlyYears = 2 * 10.5
        let laterYears = myAge.value - 2
        laterYears = laterYears * 4
        let dogYears = earlyYears + laterYears
        out.textContent = `Hello ${n}, you are ${dogYears} years old in dog years!`
        err.textContent = ""
    }
}

btn.addEventListener('click', dogCalculator)