-- добавление ролей
INSERT INTO roles (role_id, role_name)
VALUES (1, 'ROLE_ADMIN');

INSERT INTO roles (role_id, role_name)
VALUES (2, 'ROLE_USER');

-- добавление периодичности
INSERT INTO repetition (repetition_id, value)
VALUES (1, 'on the day');
INSERT INTO repetition (repetition_id, value)
VALUES (2, 'on the weak');

-- добавление пользователей
INSERT INTO users (user_id, email, name, password, tg)
VALUES (1, 'khalimendik@example.com', 'Коля Халимендик', 'user', 'kolya_kha');

-- добавление связки пользователя с ролями
INSERT INTO user_roles (role_id, user_id)
VALUES (1, 1);

INSERT INTO user_roles (role_id, user_id)
VALUES (2, 1);

-- добавление привычек
INSERT INTO habits (name, end_date, start_date, repetition_id, count_executions, user_id)
VALUES ('Бег по утрам', '2024-11-22', '2024-10-22', 1, 1, 1);

INSERT INTO habits (name, description, end_date, start_date, repetition_id, count_executions, user_id)
VALUES ('Прием таблеток', 'Утром витамины, вечером глицин', '2024-11-22', '2024-10-22', 1, 2, 1);

INSERT INTO habits (name, end_date, start_date, repetition_id, count_executions, user_id)
VALUES ('Ходить в зал', '2024-11-22', '2024-10-22', 2, 3, 1);

-- добавление выполнений по привычке (HabitStatistic)
INSERT INTO habit_statistic (due_date, habit_id) VALUES ('2024-11-16', 1);
INSERT INTO habit_statistic (due_date, habit_id) VALUES ('2024-11-15', 1);


-- добавление