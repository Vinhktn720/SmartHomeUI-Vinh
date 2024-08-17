import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Device } from './models/devices.model.js';
import deviceRoutes from './routes/devices.routes.js'

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
// const database_link = process.env.MONGODB_URI;

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

//router
app.use("/api/devices", deviceRoutes);
// app.post("/api/devices", async (req, res) => {
//   try {
//     const device = await Device.create(req.body);
//     res.status(200).json(device);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/api/devices", async (req, res) => {
//   try {
//     const devices = await Device.find({});
//     res.status(200).json(devices);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })

//Controller

//HomePage
app.get('/test', async(req, res) => {

  const devices = await Device.find({});
  // const obj = [
  //   {
  //     id: 1,
  //     name: "Device 1",
  //     type: "light",
  //     status: "on"
  //   },
  //   {
  //     id: 2,
  //     name: "Device 1",
  //     type: "light",
  //     status: "on"
  //   },
  //   {
  //     id: 3,
  //     name: "Device 1",
  //     type: "light",
  //     status: "on"
  //   },
  //   {
  //     id: 4,
  //     name: "Device 1",
  //     type: "light",
  //     status: "on"
  //   }
  // ];
  // const arr = [1,3,4,5,6,7,8,9,10,11,12];
  // const result = obj.filter((a) => a.id > 2);
  const homes = [];
  const homeIds = 0;
  devices.forEach((a,b) => {
    if(homes.includes(a.homeId)=== false){
      homes.push(a.homeId);
    }
  });
  res.render("index.ejs",{
    numberOfHomes: homes.length,
    numberOfPage: homeIds
  });
  // console.log(devices);
});
// get id
app.get("/test/:id", async(req, res) => {
  const devices = await Device.find({});
  const homeIds = req.params.id;
  const homes = [];
  devices.forEach((a,b) => {
    if(homes.includes(a.homeId)=== false){
      homes.push(a.homeId);
    }
  });
  devices.forEach((a,b) => {
    
  });
  res.render("index.ejs",{
    numberOfHomes: homes.length,
    numberOfPage: homeIds
  });
});

app.get('/', (req, res) => {
  res.render("index.ejs");
});
app.post('/submit', (req, res) => {
  console.log(req.body.homeId);
});

//Connection
mongoose.connect("mongodb://localhost:27017/").then((res) => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});