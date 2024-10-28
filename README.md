# Strapi-приложения для HR Work Solutions

## Для работы необходимо:
 - **nodejs**: 20.\*.\*;
 - **npm**: 10.\*.\*;

## Запуск сервера

```bash
npm run start:server
```

## Запуск клиента

```bash
npm run start:client
```

## Первичная настройка сервера

Для работы плагина необходимо выполнить следующие действия:
- Перейдите в **Settings** -> **Users & Permissions Plugin** -> **Roles**;
- Установите для роли **Public** права:
  - **Speciality**:
    - **find**- ;
  - **Task**:
    - **find**;
  - **Task Link**:
    - **findOne**;
    - **create**.