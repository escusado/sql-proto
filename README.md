create table proto(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
author VARCHAR(40) NOT NULL,
age INT NOT NULL,
created_at DATE,
updated_at DATE,
PRIMARY KEY ( id )
);

get latest mysql image:

```
docker pull mysql/mysql-server:latest
```

run docker image:

```
docker run --name=mk-mysql -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server:latest
```

run docker command cli under the running image

```
docker exec -it mk-mysql mysql -uroot -p
```

use password: `my-secret-pw`

create database:

```
CREATE DATABASE proto
```

create table:

```
create table proto(
    ->    id INT NOT NULL AUTO_INCREMENT,
    ->    title VARCHAR(100) NOT NULL,
    ->    author VARCHAR(40) NOT NULL,
    ->    age INT NOT NULL,
    ->    created_at DATE,
    ->    updated_at DATE,
    ->    PRIMARY KEY ( id )
    -> );
```

create user

```

CREATE USER 'foo'@'%' IDENTIFIED WITH mysql*native_password BY 'bar';
GRANT ALL ON *.\_ TO 'foo'@'%';

```
