document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    const speed = document.getElementById('clicker__speed');
    
    let clicks = 0;
    let lastClickTime = new Date();
    let isIncreasing = true; // Флаг для чередования увеличения и уменьшения
    
    // Обработчик клика
    cookie.onclick = function() {
        // Увеличиваем счётчик
        clicks++;
        counter.textContent = clicks;
        
        // Определяем текущее время и вычисляем время, прошедшее с последнего клика
        const now = new Date();
        const timeElapsed = (now - lastClickTime) / 1000; // Время в секундах
        
        // Вычисляем скорость кликов и обновляем значение
        const clickSpeed = timeElapsed > 0 ? (1 / timeElapsed) : 0;
        speed.textContent = clickSpeed.toFixed(2) + ' clicks/sec';
        
        // Сохраняем время последнего клика
        lastClickTime = now;
        
        // Получаем текущий размер печенья
        const currentWidth = parseFloat(cookie.getAttribute('width'));
        console.log('Current width:', currentWidth); // Отладочное сообщение
        
        // Устанавливаем новый размер печенья
        const newSize = isIncreasing ? currentWidth * 1.1 : currentWidth / 1.1;
        console.log('New size:', newSize); // Отладочное сообщение
        cookie.setAttribute('width', newSize); // Обновляем атрибут width
        cookie.style.width = newSize + 'px';
        cookie.style.height = newSize + 'px';
        
        // Переключаем флаг для следующего клика
        isIncreasing = !isIncreasing;
    };
});
