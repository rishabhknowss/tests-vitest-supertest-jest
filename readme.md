## waitforit.sh 

```
curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
chmod +x wait-for-it.sh
```

## docker postgress locally 

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

## docker compose template 

```
version: '3.8'
services:
  db:
    image: postgres
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    ports:
      - '5432:5432'
```