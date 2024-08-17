import mongoose from "mongoose";

const DeviceSchema = mongoose.Schema(
  {
    homeId: {
      type: Number,
      required: [true, "Please enter home ID"],
      unique: true,
    },
    personName: {
      type: String,
      required: true,
    },
    deviceId: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model("Device", DeviceSchema);

export {Device};  