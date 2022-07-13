create table producto(
	id_producto SERIAL not null,
	nombre_producto varchar(30) not null,
	precio float not null,
	descripcion_producto varchar,
	cantidad integer not null,
	estado varchar(15) not null,
	primary key (id_producto)
);

create table categoria(
	id_categoria integer not null,
	nombre_categoria varchar(30) not null,
	descripcion_categoria varchar,
	primary key (id_categoria)
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


create table cliente(
	id_cliente UUID not null,
	nombre varchar(30) not null,
	apellido varchar(30) not null,
	direccion varchar(50),
	telefono VARCHAR(30) NOT NULL,
	mail varchar(55) not null,
	password varchar (30) not null,
	rol varchar (20) not null,
	primary key (id_cliente)
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

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";