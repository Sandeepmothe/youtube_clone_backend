import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subscribedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model(
  "Subscription",
  subscriptionSchema
);