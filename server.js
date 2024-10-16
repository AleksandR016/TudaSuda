document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановить стандартное поведение формы
    
    const userId = document.getElementById('userId').value;
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;

    // Отправка данных на сервер
    fetch('add_order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, itemName, quantity })
    })
    .then(response => response.json())
    .then(data => {
        alert('Заказ добавлен: ' + data.message);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});
