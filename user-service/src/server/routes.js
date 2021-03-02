import User from "../model/user";
import jwt from "jsonwebtoken";
import JWT_SECRETE from "../config/config";
const setUproutes = (app) => {
  app.post("/sign-up", async (req, res, next) => {
    if (!req.email || !req.body) return next(new Error("Invalid details"));
    try {
      const { email, password } = rq.body;
      const newUser = User.create({ email, password });
      return res.json(newUser);
    } catch (error) {
      return next(error);
    }
  });
  app.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = new User({
        email,
        password,
      });
      await user.save();
      const token = jwt.sign(JWT_SECRETE, email);
      return res.status(200).json(token);
    } catch (error) {
      return res.send(error);
    }
  });
};
export default setUproutes;
