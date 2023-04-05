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

**Trees by district**

![Screenshot 2023-04-05 at 15-55-10 PlaniSense - Test technique](https://user-images.githubusercontent.com/50905325/230103015-d22a1aad-9857-4d6f-9f57-9749cdda66d4.png)

**Trees by gender**

![Screenshot 2023-04-05 at 15-55-25 PlaniSense - Test technique](https://user-images.githubusercontent.com/50905325/230103124-5b5c6334-2d05-48c9-97bd-441f607a2fd4.png)
