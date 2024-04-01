
CREATE TABLE `tbl_amigos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` int(20) DEFAULT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `tbl_amigos` (`id`, `nombre`, `email`, `telefono`, `avatar`)
VALUES
	(1,'Abelardo','abelardo@gmail.com',1212,'390f3c20c8.png'),
	(2,'Camilo','camilo@gmail.com',1313,'b6893f0094.png'),
	(3,'Ana','ana@gmail.com',414,'53af5d0df8.png'),
	(4,'Carlos','carlos@gmail.com',1515,'7187cdbfb0.jpg'),
	(5,'Camila','camila@gmail.com',1616,'7d478be736.png'),
	(6,'Vanessa','vanessa@hotmail.com',1717,'93f1ce0635.jpg'),
	(7,'Urian','urian@gmail.com',1818,'a3e0a6ae56.jpg');