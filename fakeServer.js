const express = require("express");
const app = express();

const fakeUsers = ["Tony", "Lisa", "Michael", "Ginger", "Food"];

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/users", (req, res, next) => {
    res.json(fakeUsers);
});
