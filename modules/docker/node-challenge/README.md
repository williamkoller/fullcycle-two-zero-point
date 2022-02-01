# Passo a passo para executar o desafio

1 - executar o docker-compose

```
docker-compose up -d --build
```

2 - acessar o container db
```
docker exec -it db bash
```

3 - criar a tabela people
```
mysql -uroot -proot
use nodedb;
create table people(id int not null auto_increment, name varchar(255), primary key(id));
```