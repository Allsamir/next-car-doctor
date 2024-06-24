import mongoose from "mongoose";

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URI ?? "");

mongoose.Promise = global.Promise;

const serviceSchema = new mongoose.Schema({
  service_id: String,
  title: String,
  img: String,
  price: String,
  description: String,
  facility: [
    {
      name: String,
      details: String,
    },
  ],
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
