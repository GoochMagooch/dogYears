const myName = document.getElementById('name')
const myAge = document.getElementById('age')
const btn = document.getElementById('btn')
const out = document.querySelector('.output')
const err = document.querySelector('.error')

function dogCalculator() {

    const nameValue = myName.value.trim();
    const ageValue = myAge.value;

    if (nameValue == "" || ageValue < 1) {
        err.textContent = "Please enter your name and/or age, starting from 1"
    } else {
        const earlyYears = 2 * 10.5
        let laterYears = ageValue - 2
        laterYears = laterYears * 4
        const dogYears = earlyYears + laterYears
        out.textContent = `Hello ${nameValue}, you are ${dogYears} years old in dog years!`
        err.textContent = ""
    }
}

btn.addEventListener('click', dogCalculator)