import express from 'express';
import user from './controller/user.controller.js';
import auth from './controller/auth.controller.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log("middleware before request");
  next();
});

app.use(user);
app.use(auth);

app.get('/', (req, res, next) => {
  res.send('Hello World!')
  next();
});

app.get("/products", (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
  next();
});

app.use((req, res, next) => {
  console.log("middleware after request");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});