1. Создаем таблицу (MySQL)

CREATE TABLE `table_for_test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `count` int(21) DEFAULT NULL,
  `distance` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

3. Запоняем таблицу
3. устонавливаем зависимости "table/server/package.json" (npm install || yarn install)
4. редактируем файл 'index.js' (имя и пароль)
5. устонавливаем зависимости frontend  "table/package.json"
6. запускаем проект (yarn start || npm start)

