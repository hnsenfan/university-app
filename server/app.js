import express from 'express'
import cors from 'cors';
import fs from 'fs';

const app = express();

const userJSON = 'assets/users.json'
const PORT = 8082;

app.use(express.json());
app.use(cors());

const fetchUserTable = () => {
  const rawData = fs.readFileSync(userJSON)
  const data = JSON.parse(rawData)
  return data
}

const findUserDataIndex = (username) => {
  const data = fetchUserTable()
  const index = data.user_list.findIndex(x => x.username === username)
  return index
}

const findUserProfile = (username) => {
  const data = fetchUserTable()
  const index = findUserDataIndex(username)
  return data.user_list[index]
}

app.get('/api/user_list', (req, res) => {
  try {
    const data = fetchUserTable()
    res.status(200).json(data.user_list)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

app.get('/api/user_profile', (req, res) => {
  try {
    const data = findUserProfile(req.query.username)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
})

app.patch('/api/subscribe_newsletter', (req, res) => {
  try {
    const allData = fetchUserTable()
    const profileIndex = findUserDataIndex(req.body.username)
    const data = findUserProfile(req.body.username)
    data.subscribe_newsletter = req.body.subscribe_newsletter

    allData.user_list[profileIndex] = data

    const newData = JSON.stringify(allData)
    fs.writeFile(userJSON, newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});

app.patch('/api/fav_universities', (req, res) => {
  try {
    const allData = fetchUserTable()
    const profileIndex = findUserDataIndex(req.body.username)
    const data = findUserProfile(req.body.username)

    let newEntry = data.fav_universities
    newEntry.push(req.body.fav_universities)

    data.fav_universities = newEntry
    allData.user_list[profileIndex] = data

    const newData = JSON.stringify(allData)
    fs.writeFile(userJSON, newData, function (err, result) {
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
