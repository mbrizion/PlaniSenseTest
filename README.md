## Getting Started

**Requirements**

- docker
- docker-compose
- psql
- nodejs

**Running the project**

- Start the database

```bash
docker-compose up -d
```

- Seed the database

```bash
sh initdb/seed.sh
```

- Start serv

```bash
cd server && npm i && nodemon index.js
```

- Start front

```bash
cd client && npm i && npm start
```
