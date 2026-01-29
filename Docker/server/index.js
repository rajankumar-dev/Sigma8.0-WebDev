import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 4000;

//Api route
app.get("/api/message", (req, res, next) => {
  res.json({ message: "Hello from chaicode server" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
