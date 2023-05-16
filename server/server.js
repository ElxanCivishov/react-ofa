import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import emailRoutes from "./routes/emailRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.REACT_APP_PORT || 8000;

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use("/", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("test"));
