import express from 'express'
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 8082;

app.use(express.json());
app.use(cors());

app.get("/api/user_list", (req, res) => {
  const rawData = fs.readFileSync("assets/login.json")
  const data = JSON.parse(rawData)
  res.json(data);
});

app.patch("/api/fav_universities", (req, res) => {
  try {
    const rawData = fs.readFileSync("assets/login.json")
    const data = JSON.parse(rawData)
    const index = data.user_list.findIndex(x => x.username === req.body.username);
    let newEntry = data.user_list[index].fav_universities
    newEntry.push(req.body.fav_universities)
    data.user_list[index].fav_universities = newEntry
    const newData = JSON.stringify(data)
    fs.writeFile("assets/login.json", newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});

app.delete("/api/fav_universities", (req, res) => {
  try {
    const rawData = fs.readFileSync("assets/login.json")
    const data = JSON.parse(rawData)
    const index = data.user_list.findIndex(x => x.username === req.body.username);
    let newEntry = data.user_list[index].fav_universities
    newEntry.push(req.body.fav_universities)
    data.user_list[index].fav_universities = newEntry
    const newData = JSON.stringify(data)
    fs.writeFile("assets/login.json", newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});
  
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
