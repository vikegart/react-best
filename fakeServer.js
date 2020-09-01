const express = require("express");
const app = express();

const fakeUsers = ["Tony", "Lisa", "Michael", "Ginger", "Food"];

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.get("/users", (req, res, next) => {
    res.json(fakeUsers);
});
