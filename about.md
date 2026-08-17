# Обо мне

<div class="profile-section">
<img src="/ava.png" alt="Иван Петров" class="profile-avatar" />

Я 10 лет проектирую и внедряю **Docs-as-Code** для enterprise-инфраструктуры, API-порталов и инженерных команд. 
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
  display: flow-root; /* Запирает float внутри блока и не дает ему налезать на ::: tip ::: */
  margin-bottom: 24px;
}

.profile-avatar {
  width: 140px;
  height: 140px;
  border-radius: 16px;
  float: right;
  margin: 0 0 16px 24px;
  object-fit: cover;
  box-shadow: var(--vp-shadow-2);
}

@media (max-width: 640px) {
  .profile-avatar {
    float: none;
    margin: 0 auto 16px;
    display: block;
  }
}
</style>