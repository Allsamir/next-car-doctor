import mongoose from "mongoose";
mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URI ?? "");
mongoose.Promise = global.Promise;

const bookingSchema = new mongoose.Schema({
  email: String,
  name: String,
  service_id: mongoose.Types.ObjectId,
  service_name: String,
  service_img: String,
  service_price: String,
  date: Date,
  address: String,
  phone: String,
});

const Bookings =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Bookings;
