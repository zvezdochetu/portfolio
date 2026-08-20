# Обо мне

<div class="profile-section">
<img src="/ava.png" alt="Иван Петров" class="profile-avatar" />

Я 10 лет проектирую .и внедряю **Docs-as-Code** для enterprise-инфраструктуры, API-порталов и инженерных команд. 
</div>

::: tip Моя философия
Архитектура документации должна быть такой же чистой, как и архитектура кода.
:::

## Контакты

Связаться со мной можно по почте <writer@example.com> или в соцсетях:
* Профиль с проектами: [GitHub](https://github.com/example "Профиль GitHub")
* Профессиональный трек: [LinkedIn](https://linkedin.com/in/example "Профиль LinkedIn")
* Оперативная связь: [Telegram](https://t.me/example "Написать в Telegram")

<style scoped>
.profile-section {
  display: flow-root;
  margin-bottom: 24px;
}

.profile-avatar {
  width: 140px;
  height: 140px;
  border-radius: 16px;
  float: right;
  margin: 12px 0 16px 24px; /* 12px сверху отделяют фото от заголовка */
  object-fit: cover;
  box-shadow: var(--vp-shadow-2);
}

/* На мобильных сохраняем float, но пропорционально уменьшаем фото */
@media (max-width: 640px) {
  .profile-avatar {
    width: 96px;
    height: 96px;
    margin: 6px 0 12px 14px; /* Компактные отступы для узких экранов */
  }
}
</style>