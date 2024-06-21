const myName = document.getElementById('name')
const myAge = document.getElementById('age')
const btn = document.getElementById('btn')
const out = document.querySelector('.output')
const err = document.querySelector('.error')

function dogCalculator() {

    const name = myName.value;
    const age = myAge.value;

    if (name == "" || age < 1) {
        err.textContent = "Please enter your name and/or age, starting from 1"
    } else {
        const earlyYears = 2 * 10.5
        const laterYears = myAge.value - 2
        laterYears = laterYears * 4
        const dogYears = earlyYears + laterYears
        out.textContent = `Hello ${name}, you are ${dogYears} years old in dog years!`
        err.textContent = ""
    }
}

btn.addEventListener('click', dogCalculator)