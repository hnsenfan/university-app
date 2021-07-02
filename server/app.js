import express from 'express'
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 8082;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  const rawData = fs.readFileSync("assets/login.json")
  const data = JSON.parse(rawData)
  res.json(data);
});
  
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
