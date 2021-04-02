create database charlie_brownie;


use charlie_brownie;

create table user(
	id int auto_increment primary key not null,
	username varchar(50) not null unique,
	password varchar(100) not null
);

select * from stock;

create table ingredient(
	id int auto_increment primary key not null,
	name varchar(50) not null,
	measureUnit varchar(20) null default '-',
	standardPriceCurrency varchar(10) null default 'pen',
	standardPrice double(10,2) null default 0
);

create table recipe(
	id int auto_increment primary key not null,
	name varchar(100) not null,
	description varchar(500) not null
);

create table recipe_ingredient(
	idRecipe int not null,
	idIngredient int not null,
	quantity double(10,2) null default 0,
	primary key(idRecipe, idIngredient),
	foreign key(idRecipe) references recipe(id),
	foreign key(idIngredient) references ingredient(id)
);

create table stock(
	id int auto_increment primary key not null,
	idIngredient int not null,
	quantity double(10,2) not null,
	comment varchar(200) null default '-',
	createdDate datetime not null default now(),
	foreign key(idIngredient) references ingredient(id)
);


create table product(
	id int auto_increment primary key not null,
	idRecipe int not null,
	name varchar(50) not null,
	description varchar(200) null default '-',
	price double(10,2) null default 0,
	status varchar(50) not null default 'created',
	foreign key(idRecipe) references recipe(id)
);

select i.*,
 IFNULL((select sum(quantity) from stock 
 where idIngredient = i.id 
 group by idIngredient),0) as stock
from ingredient i;


insert into user(username,password) values('admin','admin');

select * from user;
select * from recipe;

delete from ingredient;
select * from recipe_ingredient;
select * from recipe;

select * from stock;

select r.*, GROUP_CONCAT(distinct i.name SEPARATOR ', ') as codigos
from recipe r inner join recipe_ingredient ri
on r.id = ri.idRecipe inner join ingredient i
on i.id = ri.idIngredient
where idIngredient = i.id 
group by r.id;
