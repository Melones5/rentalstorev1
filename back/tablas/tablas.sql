create table cliente(
	id_cliente SERIAL not null,
	uuid VARCHAR(100) not null unique,
	nombre varchar(30) not null,
	apellido varchar(30) not null,
	direccion varchar(50),
	telefono VARCHAR(30) not null,
	email varchar(55) not null,
	password varchar (30) not null,
	rol varchar (20) not null,
	constraint nombre_rol check (rol in
	('ARRENDADOR','PROPIETARIO')),
	constraint pk_email primary key (email)
);

create table producto(
	id_producto serial not null,
	nombre_producto varchar(50) not null,
	precio float not null check (precio>0),
	descripcion_producto varchar(255) not null,
	cantidad integer not null check (cantidad>=0),
	estado varchar(15) not null,
	urlfoto varchar(2083),
	categoria serial not null,
	cliente varchar(55) not null,
	constraint pk_id_producto primary key (id_producto),
	constraint fk_id_categoria foreign key (categoria) references categoria(id_categoria),
	constraint fk_email foreign key (cliente) references cliente(email)
);

create table categoria(
	id_categoria serial not null,
	categoria varchar(30) not null,
	constraint nombre_categoria check (categoria in('PLAYA','CAMPING','DEPORTIVOS','HERRAMIENTAS')),
	constraint pk_id_categoria primary key (id_categoria)
);

create table alquiler(
	id_alquiler integer not null,
	fecha_inicio_alquiler date not null,
	fecha_fin_alquiler date not null,
	fecha_devolucion_alquiler date not null,
	primary key (id_alquiler)
);

create table carrito(
	id_carrito integer not null,
	id_producto integer[] not null,
	id_alquiler integer not null,
	total_carrito int not null,
	primary key (id_carrito),
	foreign key (id_carrito) REFERENCES producto(id_producto),
	foreign key (id_carrito) REFERENCES alquiler(id_alquiler)
);


create table devolucion(
	id_devolucion integer not null,
	id_alquiler integer not null,
	estado_devolucion varchar(40) not null,
	calificacion integer not null,
	primary key (id_devolucion),
	foreign key(id_devolucion) REFERENCES alquiler(id_alquiler)
);

create table pago(
	id_pago integer not null,
	id_carrito integer not null,
	estado_pago boolean not null,
	primary key(id_pago),
	foreign key(id_pago) REFERENCES carrito(id_carrito)
);

create table extensionAlquiler(
	id_extension integer not null,
	id_alquiler integer not null,
	fecha_inicion_extension date not null,
	fecha_fin_extension date not null,
	primary key(id_extension),
	foreign key(id_extension) REFERENCES alquiler(id_alquiler)
);


INSERT INTO rol VALUES (DEFAULT, 'ARRENDADOR');
INSERT INTO rol VALUES (DEFAULT, 'PROPIETARIO');


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";