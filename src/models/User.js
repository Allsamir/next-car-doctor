import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URI ?? "");

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: String,
    password: {
      type: String,
    },
    image: String,
  },
  {
    timestamps: true,
  },
);

// userSchema.pre("save", async function (next) {
//   // this is a mongoose middleware
//   if (this.isModified("password") || this.isNew) {
//     try {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next();
//   }
// });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
