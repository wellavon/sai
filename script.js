// Функция для навигации между страницами
function navigateTo(pageId) {
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Показываем нужную страницу
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');

        // Прокручиваем к началу страницы
        window.scrollTo(0, 0);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    // Убедимся, что только главная страница активна
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('main-page').classList.add('active');

    // Добавляем плавную анимацию появления
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Устанавливаем начальную непрозрачность
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Добавляем обработчики для всех навигационных карточек
document.querySelectorAll('.nav-card').forEach(card => {
    card.addEventListener('click', function () {
        // Добавляем анимацию нажатия
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Добавляем обработчики для кнопок "Назад"
document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', function () {
        // Анимация для кнопки назад
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        // Navigation
        navigateTo('main-page');
    });
});
