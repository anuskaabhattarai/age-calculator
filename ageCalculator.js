function calculateAge() {
    let year = document.getElementById("birthYear").value;
    let currentYear = 2026;

    let age = currentYear - year;

    document.getElementById("result").innerText = "Your age is " + age;
}