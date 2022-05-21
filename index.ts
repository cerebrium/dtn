import express from "express";
import router from "./routes/lightningStrike";
const app = express();
const port = 3000;

app.get("/", (req: Express.Request, res) => {
  res.send("hello world");
});

app.use(router);

app.listen(port, () => {
  console.log("Express app running on port: ", port);
});
