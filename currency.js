document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        // Надіслати запит GET до URL
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        // Перетворити відповідь у формат json
        .then(response => response.json())
        .then(data => {
            // Отримати валюту від користувача та перевести у верхній регістр 
            const currency = document.querySelector('#currency').value.toUpperCase();

            // Отримати курс з даних
            const rate = data.rates[currency];

            // Перевірити, чи валюта дійсна:
            if (rate !== undefined) {
                // Показати курс обміну на екрані
                document.querySelector('#result').innerHTML = `1 долар дорівнює ${rate.toFixed(3)} ${currency}.`;
            }
            else {
                // Показати помилку на екрані
                document.querySelector('#result').innerHTML = 'Недійсна валюта.';
            }
        })
        // Спіймати всі помилки та вивести їх до консолі
        .catch(error => {
            console.log('Помилка:', error);
        });
        // Запобігти надсиланню за замовчуванням
        return false;
    }
});
