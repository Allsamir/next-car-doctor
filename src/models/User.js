import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URI ?? "");

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: String,
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
