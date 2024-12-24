document.getElementById("RegForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\+7\d{10}$/;
    const agePattern = /^(1[89]|[2-8]\d|90)$/;

    if (!emailPattern.test(email)) {
        alert('Email введен некорректно.');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Пожалуйста, введите номер телефона корректно(например, +79001234567).');
        return;
    }

    if (!agePattern.test(age)) {
        alert('Возраст от 18 до 90 лет.');
        return;
    }

    alert('Форма успешно отправлена!');
});
