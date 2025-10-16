import express from "express";
import cors from "cors";
import users from "./users.json" with { type: "json" };
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const generateUser = () => {
  return {
    id: nanoid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    mobile: faker.phone.number({ style: "international" }),
    gender: faker.person.gender(),
    address: faker.location.streetAddress(),
    image: faker.image.personPortrait({ sex: "male" }),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    pincode: Number(faker.location.zipCode()),
    createdAt: faker.date.anytime(),
  };
};

const generateData = (count) => {
  const tmp = [];
  for (let i = 0; i < count; i++) {
    tmp.push(generateUser());
  }
  const str = JSON.stringify(tmp, null, 4);
  return str;
};

app.get("/", (req, res) => {
  res.send(
    "<h1>Server is Ready - navigate to /api/users for random users data</h1>"
  );
});

// get all users at once
app.get("/api/users/", (req, res) => {
  res.json(users);
});

// get user by requesting number of users you want
app.get("/api/users/:count", (req, res) => {
  const count = parseInt(req.params.count, 10);
  const usersInCount = JSON.parse(generateData(count));
  res.json(usersInCount);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
