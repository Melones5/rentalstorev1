insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36703180,'Alejandro', 'Perez', 'Uchitel 203', 3445-251463,'prueba1_otp@gmail.com', 'Usuario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36705241,'Daniel', 'Rosales', 'Lucia Lopez 203', 3445-625142,'prueba2_otp@gmail.com', 'Usuario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36706325,'Luis', 'Mista', 'klauss 12', 3445-965245, 'prueba3_otp@gmail.com', 'Usuario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36715975,'Pedro', 'Mista', 'blv. irigoyen 504', 3445-635284, 'prueba4_otp@gmail.com', 'Usuario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36712856,'Javier', 'Trevisan', 'ernesto zarate 202', 3445-987561, 'prueba5_otp@gmail.com', 'Alquilario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36795362,'Rogelio', 'Lopez', 'Pte. Peron 501', 3445-794631, 'prueba6_otp@gmail.com', 'Alquilario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36732546,'Jose', 'Miguel', 'Pueyrredon 100', 3445-932871, 'prueba7_otp@gmail.com', 'Usuario');
insert into cliente (id_cliente, nombre, apellido, direccion, telefono, mail, rol) values (36728934,'Micaela', 'Lopez', 'Avenida cachabamba 12', 3445-359575, 'prueba8_otp@gmail.com', 'Alquilario');

insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (1, 'articulos de playa', 'asientos, mesas, sombrillas,..');
insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (2, 'articulos de pesca', 'cañas, baldes, asientos..');
insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (3, 'articulos de acampada', 'carpas, parrilas, juegos..');
insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (4, 'articulos de montañismo', 'arnes, ropa, sapatillas..');
insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (5, 'articulos deportivos', 'pelotas, conos, arcos..');
insert into categoria (id_categoria, nombre_categoria, descripcion_categoria) values (6, 'articulos recreativos', 'pelotas, mesas, metegol..');

insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (1,'Pelota "Nike" ', 150 , 'Pelota de futbol marca "NIKE" ', 12,'perfecto estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (2,'mesa estandar ', 130 , 'mesa de caoba para 4 personas" ', 5,'perfecto estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (3,'silleta azul ', 80 , 'silleta tipo playera de tela azul ', 22,'buen estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (4,'juego de tejo ', 45 , 'juego de tejo estandar ', 3,'buen estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (5,'conj. de pelota + arco', 200 , 'Pelota de futbol + arco blanco 12x20 ', 2,'buen estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (6,'juego de raquetas + pelota', 140 , '2 raquetas de playa con una pelota ', 5,'perfecto estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (7,'herramientas de montaña', 97 , 'arnes, mochila, zapatillas con tacos, sudadera, mapa', 1,'perfecto estado');
insert into producto (id_producto, nombre_producto, precio, descripcion_producto, cantidad, estado) values (8,'camara de fotos "kodak 30p"', 322 , 'camara de fotos para imagenes en movimiento o vista panoramica', 1,'boton gastado');

insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (1, '2020-05-11', '2020-05-21', '2020-05-22');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (2, '2021-03-10', '2021-03-15', '2021-03-16');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (3, '2021-04-11', '2021-04-21', '2021-04-25');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (4, '2021-04-21', '2021-05-1', '2021-05-2');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (5, '2021-03-1', '2021-05-21', '2021-05-22');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (6, '2021-05-5', '2021-05-6', '2021-05-7');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (7, '2021-04-20', '2021-05-21', '2021-05-22');
insert into alquiler (id_alquiler , fecha_inicio_alquiler, fecha_fin_alquiler, fecha_devolucion_alquiler) values (8, '2021-05-6', '2021-05-8', '2021-05-9');

insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (1,'{1,2,3}', 1, 360);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (2,'{4}', 2, 45);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (3,'{1,6}', 3, 290);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (4,'{1,8}', 4, 472);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (5,'{3,7}', 5, 177);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (6,'{1,5}', 6, 350);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (7,'{2,3}', 7, 260);
insert into carrito (id_carrito, id_producto, id_alquiler, total_carrito) values (8,'{4,3}', 8, 125);

insert into pago (id_pago, id_carrito, estado_pago) values (1, 1, true );
insert into pago (id_pago, id_carrito, estado_pago) values (2, 2, true );
insert into pago (id_pago, id_carrito, estado_pago) values (3, 3, true );
insert into pago (id_pago, id_carrito, estado_pago) values (4, 4, true );
insert into pago (id_pago, id_carrito, estado_pago) values (5, 5, true );
insert into pago (id_pago, id_carrito, estado_pago) values (6, 6, true );
insert into pago (id_pago, id_carrito, estado_pago) values (7, 7, true );
insert into pago (id_pago, id_carrito, estado_pago) values (8, 8, true );

insert into extensionAlquiler (id_extension, id_alquiler, fecha_inicion_extension, fecha_fin_extension) values (1,1,'2020-05-22', '2020-06-2');
insert into extensionAlquiler (id_extension, id_alquiler, fecha_inicion_extension, fecha_fin_extension) values (2,2,'2021-03-15', '2021-03-20');
insert into extensionAlquiler (id_extension, id_alquiler, fecha_inicion_extension, fecha_fin_extension) values (3,6,'2021-05-6', '2021-05-20');
insert into extensionAlquiler (id_extension, id_alquiler, fecha_inicion_extension, fecha_fin_extension) values (4,7,'2021-05-21', '2021-06-21');
insert into extensionAlquiler (id_extension, id_alquiler, fecha_inicion_extension, fecha_fin_extension) values (5,8,'2021-05-8', '2021-06-2');

insert into devolucion (id_devolucion, id_alquiler, estado_devolucion, calificacion) values (1,3 , 'perfecto estado', 5);
insert into devolucion (id_devolucion, id_alquiler, estado_devolucion, calificacion) values (2,4 , 'buen estado', 4.5);
insert into devolucion (id_devolucion, id_alquiler, estado_devolucion, calificacion) values (3,5 , 'mal estado', 3);

select * from producto
select * from pago
select * from extensionAlquiler
select * from devolucion

select * from cliente
select * from producto

--INSERTS NUEVOS 

--categorias
insert into categoria (categoria) values ('PLAYA');
insert into categoria (categoria) values ('CAMPING');
insert into categoria (categoria) values ('DEPORTIVOS');
insert into categoria (categoria) values ('HERRAMIENTAS');

--articulos de playa-
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto,categoria) values ('Sombrilla Playa Playera', 150 , 'Sombrilla playera de excelente calidad, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_691068-MLA48754634335_012022-O.jpg', 1);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto,categoria) values ('Sombrilla Playa Playera', 150 , 'Sombrilla playera de excelente calidad, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_691068-MLA48754634335_012022-O.jpg', 1);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto,categoria) values ('Sombrilla Playa Playera', 150 , 'Sombrilla playera de excelente calidad, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_691068-MLA48754634335_012022-O.jpg', 1);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto,categoria) values ('Sombrilla Playa Playera', 150 , 'Sombrilla playera de excelente calidad, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_691068-MLA48754634335_012022-O.jpg', 1);

--articulos de camping-
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Carpa Camping Ottawa', 160 , 'Modelo: CNG 417 Ottawa IV, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_608040-MLA48923827009_012022-O.jpg',2);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Carpa Camping Ottawa', 160 , 'Modelo: CNG 417 Ottawa IV, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_608040-MLA48923827009_012022-O.jpg',2);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Carpa Camping Ottawa', 160 , 'Modelo: CNG 417 Ottawa IV, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_608040-MLA48923827009_012022-O.jpg',2);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Carpa Camping Ottawa', 160 , 'Modelo: CNG 417 Ottawa IV, IDEAL para tus vacaciones.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_608040-MLA48923827009_012022-O.jpg',2);


--articulos deportivos-
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Paleta de pádel', 160 , 'Esta paleta de pádel compuesta por soft eva te permitirá conseguir una mayor estabilidad, duplicando la capacidad de respuesta en todo tipo de golpes.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_812253-MLA48995446364_022022-O.jpg',3);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Paleta de pádel', 170 , 'Esta paleta de pádel compuesta por soft eva te permitirá conseguir una mayor estabilidad, duplicando la capacidad de respuesta en todo tipo de golpes.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_812253-MLA48995446364_022022-O.jpg',3);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Paleta de pádel', 170 , 'Esta paleta de pádel compuesta por soft eva te permitirá conseguir una mayor estabilidad, duplicando la capacidad de respuesta en todo tipo de golpes.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_812253-MLA48995446364_022022-O.jpg',3);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado,urlfoto,categoria) values ('Paleta de pádel', 170 , 'Esta paleta de pádel compuesta por soft eva te permitirá conseguir una mayor estabilidad, duplicando la capacidad de respuesta en todo tipo de golpes.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_812253-MLA48995446364_022022-O.jpg',3);

--herramientas--
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria) values ('Taladro percutor inalámbrico', 160 , 'Con el taladro eléctrico Lüsqtoff ATL18-8B podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_923962-MLA44666427411_012021-O.jpg',4);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria) values ('Taladro percutor inalámbrico', 180 , 'Con el taladro eléctrico Lüsqtoff ATL18-8B podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_923962-MLA44666427411_012021-O.jpg',4);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria) values ('Taladro percutor inalámbrico', 180 , 'Con el taladro eléctrico Lüsqtoff ATL18-8B podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_923962-MLA44666427411_012021-O.jpg',4);
insert into producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria) values ('Taladro percutor inalámbrico', 180 , 'Con el taladro eléctrico Lüsqtoff ATL18-8B podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.', 12,'perfecto estado', 'https://http2.mlstatic.com/D_NQ_NP_923962-MLA44666427411_012021-O.jpg',4);

