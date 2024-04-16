import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

app.listen(8080, () => console.log("Server started on port 8080"));
