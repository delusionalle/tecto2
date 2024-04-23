const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware для разбора тела POST запросов
app.use(bodyParser.urlencoded({ extended: true }));

// Указываем серверу, где находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Роут для обработки POST запроса с формы
app.post('/save_billing_info', (req, res) => {
    const { fullName, cardNumber, expMonth, expYear, cvv } = req.body;
    // Здесь логика для сохранения данных
    console.log('Billing Information:', fullName, cardNumber, expMonth, expYear, cvv);
    res.send('Данные успешно сохранены');
});

// Запускаем сервер
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
