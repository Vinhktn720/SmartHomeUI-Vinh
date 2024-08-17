import { Device } from "../models/devices.model.js";

const getDevices = async (req, res) => {
  try {
    const devices = await Device.find({});
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postDevices = async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export{
  getDevices,
  postDevices
};
